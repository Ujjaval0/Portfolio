import type { ReactNode } from 'react';

export interface ProjectData {
    title: string;
    category: string;
    domain: string;
    tags: string[];
    description: string;
    imageUrl: string;
    fullDetails?: string;
    objective?: string[];
    takeaways?: { title: string; items: string[] }[];
    impact?: string[];
    customSections?: { title: string; content: ReactNode[] }[];
    dashboardUrl?: string;
    reportUrl?: string;
    engagementLink?: string;
}

