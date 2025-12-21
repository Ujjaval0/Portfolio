export interface ProjectData {
    title: string;
    category: string;
    domain: string;
    tags: string[];
    description: string;
    imageUrl: string;
    fullDetails?: string;
    objective: string[];
    takeaways: { title: string; items: string[] }[];
    dashboardUrl?: string;
    engagementLink?: string;
}
