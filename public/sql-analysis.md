# Sales Data Analysis — SQL Scripts

All queries run on **PostgreSQL** against a star schema: `fact_sales`, `dim_products`, `dim_customers`.

---

## 1. Trend Analysis

Analyse sales performance over time across different date dimensions.

```sql
-- Full table reference
SELECT * FROM fact_sales;
```

### By Year

```sql
SELECT
    EXTRACT(YEAR FROM order_date)      AS order_year,
    SUM(sales_amount)                  AS total_sales,
    COUNT(DISTINCT customer_key)       AS total_customers,
    SUM(quantity)                      AS total_quantity
FROM fact_sales
WHERE order_date IS NOT NULL
GROUP BY EXTRACT(YEAR FROM order_date)
ORDER BY order_year;
```

### By Month

```sql
SELECT
    EXTRACT(MONTH FROM order_date)     AS order_month,
    SUM(sales_amount)                  AS total_sales,
    COUNT(DISTINCT customer_key)       AS total_customers,
    SUM(quantity)                      AS total_quantity
FROM fact_sales
WHERE order_date IS NOT NULL
GROUP BY EXTRACT(MONTH FROM order_date)
ORDER BY order_month;
```

### By Year + Month

```sql
SELECT
    EXTRACT(YEAR  FROM order_date)     AS order_year,
    EXTRACT(MONTH FROM order_date)     AS order_month,
    SUM(sales_amount)                  AS total_sales,
    COUNT(DISTINCT customer_key)       AS total_customers,
    SUM(quantity)                      AS total_quantity
FROM fact_sales
WHERE order_date IS NOT NULL
GROUP BY
    EXTRACT(YEAR  FROM order_date),
    EXTRACT(MONTH FROM order_date)
ORDER BY order_year, order_month;
```

### Using DATE_TRUNC

```sql
SELECT
    DATE_TRUNC('month', order_date)::DATE  AS month_date,
    SUM(sales_amount)                      AS total_sales,
    COUNT(DISTINCT customer_key)           AS total_customers,
    SUM(quantity)                          AS total_quantity
FROM fact_sales
WHERE order_date IS NOT NULL
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month_date;
```

---

## 2. Cumulative Analysis

Running totals, moving averages, and month-over-month growth.

### Running Total Sales (Subquery)

```sql
SELECT
    order_date,
    total_sales,
    SUM(total_sales) OVER (ORDER BY order_date) AS running_total_sales
FROM (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS order_date,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    WHERE order_date IS NOT NULL
    GROUP BY DATE_TRUNC('month', order_date)
) t;
```

### Running Total Sales (CTE — Monthly)

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS order_date,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    WHERE order_date IS NOT NULL
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    order_date,
    total_sales,
    SUM(total_sales) OVER (ORDER BY order_date) AS running_total_sales
FROM monthly_sales;
```

### Running Total Sales (CTE — Yearly)

```sql
WITH yearly_sales AS (
    SELECT
        DATE_TRUNC('year', order_date)::DATE  AS order_date,
        SUM(sales_amount)                     AS total_sales
    FROM fact_sales
    WHERE order_date IS NOT NULL
    GROUP BY DATE_TRUNC('year', order_date)
)
SELECT
    order_date,
    total_sales,
    SUM(total_sales) OVER (ORDER BY order_date) AS running_total_sales
FROM yearly_sales;
```

### Moving Average + Running Total (Combined)

```sql
WITH yearly_sales AS (
    SELECT
        DATE_TRUNC('year', order_date)::DATE  AS order_date,
        SUM(sales_amount)                     AS total_sales,
        AVG(sales_amount)                     AS avg_sales
    FROM fact_sales
    WHERE order_date IS NOT NULL
    GROUP BY DATE_TRUNC('year', order_date)
)
SELECT
    order_date,
    total_sales,
    SUM(total_sales) OVER (ORDER BY order_date)        AS running_total_sales,
    ROUND(AVG(avg_sales) OVER (ORDER BY order_date), 0) AS moving_average_sales
FROM yearly_sales;
```

### Monthly Sales Base

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS month,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    WHERE order_date IS NOT NULL
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT * FROM monthly_sales
ORDER BY month;
```

### Running Total (Monthly)

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS month,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    total_sales,
    SUM(total_sales) OVER (ORDER BY month) AS running_total
FROM monthly_sales;
```

### 3-Month Moving Average

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS month,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    total_sales,
    AVG(total_sales) OVER (
        ORDER BY month
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3_months
FROM monthly_sales;
```

### Previous Month Sales (LAG)

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS month,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    total_sales,
    LAG(total_sales) OVER (ORDER BY month) AS prev_month_sales
FROM monthly_sales;
```

### Month-over-Month Growth %

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date)::DATE  AS month,
        SUM(sales_amount)                      AS total_sales
    FROM fact_sales
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    total_sales,
    ROUND(
        (total_sales - LAG(total_sales) OVER (ORDER BY month))
        * 100.0
        / NULLIF(LAG(total_sales) OVER (ORDER BY month), 0),
    2) AS growth_pct
FROM monthly_sales;
```

---

## 3. Performance Analysis

Compare each product's yearly sales against its own historical average and prior-year sales.

```sql
WITH yearly_product_sales AS (
    SELECT
        EXTRACT(YEAR FROM f.order_date)  AS order_year,
        p.product_name,
        SUM(f.sales_amount)              AS current_sales
    FROM fact_sales f
    LEFT JOIN dim_products p
        ON f.product_key = p.product_key
    WHERE f.order_date IS NOT NULL
    GROUP BY
        EXTRACT(YEAR FROM f.order_date),
        p.product_name
)
SELECT
    order_year,
    product_name,
    current_sales,

    -- vs. product's own historical average
    ROUND(AVG(current_sales) OVER (PARTITION BY product_name), 0)                        AS avg_sales,
    ROUND(current_sales - AVG(current_sales) OVER (PARTITION BY product_name), 0)        AS diff_avg,
    CASE
        WHEN current_sales - AVG(current_sales) OVER (PARTITION BY product_name) > 0 THEN 'Above Avg'
        WHEN current_sales - AVG(current_sales) OVER (PARTITION BY product_name) < 0 THEN 'Below Avg'
        ELSE 'Avg'
    END AS avg_change,

    -- vs. previous year
    LAG(current_sales) OVER (PARTITION BY product_name ORDER BY order_year)               AS py_sales,
    current_sales - LAG(current_sales) OVER (PARTITION BY product_name ORDER BY order_year) AS diff_py,
    CASE
        WHEN current_sales - LAG(current_sales) OVER (PARTITION BY product_name ORDER BY order_year) > 0 THEN 'Increasing'
        WHEN current_sales - LAG(current_sales) OVER (PARTITION BY product_name ORDER BY order_year) < 0 THEN 'Decreasing'
        ELSE 'No Change'
    END AS py_change

FROM yearly_product_sales
ORDER BY product_name, order_year;
```

---

## 4. Data Segmentation

Group data into meaningful ranges to spot distribution patterns.

### Products by Cost Range

```sql
WITH product_segments AS (
    SELECT
        product_key,
        product_name,
        cost,
        CASE
            WHEN cost < 100                  THEN 'Below 100'
            WHEN cost BETWEEN 100 AND 500    THEN '100–500'
            WHEN cost BETWEEN 500 AND 1000   THEN '500–1000'
            ELSE 'Above 1000'
        END AS cost_range
    FROM dim_products
)
SELECT
    cost_range,
    COUNT(product_key) AS total_products
FROM product_segments
GROUP BY cost_range
ORDER BY total_products DESC;
```

### Customers by Spending Behaviour (VIP / Regular / New)

```sql
WITH customer_spending AS (
    SELECT
        c.customer_key,
        SUM(f.sales_amount)  AS total_spending,
        MIN(f.order_date)    AS first_order,
        MAX(f.order_date)    AS last_order,
        DATE_PART('month', AGE(MAX(f.order_date), MIN(f.order_date)))
        + 12 * DATE_PART('year', AGE(MAX(f.order_date), MIN(f.order_date)))
                             AS lifespan
    FROM fact_sales f
    LEFT JOIN dim_customers c
        ON f.customer_key = c.customer_key
    GROUP BY c.customer_key
)
SELECT
    customer_segment,
    COUNT(customer_key) AS total_customers
FROM (
    SELECT
        customer_key,
        CASE
            WHEN lifespan >= 12 AND total_spending > 5000  THEN 'VIP'
            WHEN lifespan >= 12 AND total_spending <= 5000 THEN 'Regular'
            ELSE 'New'
        END AS customer_segment
    FROM customer_spending
) AS segmented_customers
GROUP BY customer_segment
ORDER BY total_customers DESC;
```
