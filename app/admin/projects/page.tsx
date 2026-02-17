"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, Star } from "lucide-react";
import projects from "@/data/projects.json";

export default function ProjectsAdmin() {
    const [items] = useState(projects);

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-heading-1 font-bold text-text-primary mb-2">
                        Projects
                    </h1>
                    <p className="text-body text-text-muted">
                        Manage your projects and case studies.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-purple text-white text-small font-medium hover:bg-accent-purple-light transition-colors">
                    <Plus size={16} />
                    Add Project
                </button>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {items.map((project) => (
                    <div key={project.id} className="surface-card p-6 group">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-heading-3 font-semibold text-text-primary">
                                        {project.title}
                                    </h3>
                                    <Star
                                        size={14}
                                        className="text-accent-mint fill-accent-mint"
                                    />
                                </div>
                                <p className="text-small text-accent-purple-light">
                                    {project.tagline}
                                </p>
                            </div>

                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors">
                                    <Eye size={14} />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-accent-purple/10 text-text-muted hover:text-accent-purple transition-colors">
                                    <Pencil size={14} />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-red-500/10 text-text-muted hover:text-red-400 transition-colors">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>

                        <p className="text-small text-text-muted line-clamp-3 mb-4">
                            {project.description}
                        </p>

                        {/* Features Count */}
                        <div className="flex items-center gap-4 text-xs text-text-dim">
                            <span>{project.features.length} features</span>
                            <span>•</span>
                            <span>{project.mission ? "Has mission" : "No mission"}</span>
                            <span>•</span>
                            <span>{project.vision ? "Has vision" : "No vision"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
