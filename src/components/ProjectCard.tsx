import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import type { ProjectData } from '../types';

interface ProjectCardProps extends ProjectData {
    onReadMore: (project: ProjectData) => void;
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    imageUrl,
    dashboardUrl,
    engagementLink,
    onReadMore,
    className,
    ...props
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={cn("w-full", className)}
        >
            <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: '20/9' }}>
                    <motion.img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* GitHub overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {engagementLink && (
                            <motion.a
                                href={engagementLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg backdrop-blur-md"
                                title="View on GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </motion.a>
                        )}
                    </div>
                </div>

                <div className="p-4 sm:p-5">
                    <h3 className="mb-2 text-base sm:text-lg md:text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags?.map((tag, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="bg-blue-50 text-blue-600 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium hover:bg-blue-100 border-0"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <p className="mb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                    <button
                        onClick={() => onReadMore({ title, description, tags, imageUrl, dashboardUrl, engagementLink, ...props })}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 min-h-[44px]"
                    >
                        View Analysis →
                    </button>
                </div>
            </Card>
        </motion.div>
    );
}
