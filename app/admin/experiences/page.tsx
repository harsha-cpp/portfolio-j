"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import experiences from "@/data/experiences.json";

interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    location: string;
    type: string;
    description: string;
    highlights: string[];
}

export default function ExperiencesAdmin() {
    const [items] = useState<Experience[]>(experiences);
    const [editingId, setEditingId] = useState<string | null>(null);

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-heading-1 font-bold text-text-primary mb-2">
                        Experiences
                    </h1>
                    <p className="text-body text-text-muted">
                        Manage your work experience entries.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-purple text-white text-small font-medium hover:bg-accent-purple-light transition-colors">
                    <Plus size={16} />
                    Add Experience
                </button>
            </div>

            {/* Experience List */}
            <div className="space-y-4">
                {items.map((exp) => (
                    <div
                        key={exp.id}
                        className="surface-card p-6 group"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="text-heading-3 font-semibold text-text-primary">
                                    {exp.title}
                                </h3>
                                <p className="text-body text-accent-purple-light font-medium mt-1">
                                    {exp.company}
                                </p>
                                <div className="flex items-center gap-4 mt-2 text-small text-text-muted">
                                    <span>{exp.period}</span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                    <span className="px-2 py-0.5 rounded-full text-xs bg-accent-purple/10 text-accent-purple-light">
                                        {exp.type}
                                    </span>
                                </div>
                                <p className="text-small text-text-muted mt-3 line-clamp-2">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {exp.highlights.map((h) => (
                                        <span
                                            key={h}
                                            className="px-2 py-0.5 text-xs rounded-full bg-base-elevated text-text-dim"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                                <button
                                    onClick={() => setEditingId(exp.id)}
                                    className="p-2 rounded-lg hover:bg-accent-purple/10 text-text-muted hover:text-accent-purple transition-colors"
                                    title="Edit"
                                >
                                    <Pencil size={16} />
                                </button>
                                <button
                                    className="p-2 rounded-lg hover:bg-red-500/10 text-text-muted hover:text-red-400 transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Status indicator for editing */}
            {editingId && (
                <div className="fixed bottom-6 right-6 px-4 py-3 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-small text-accent-purple-light">
                    Editing mode ready — connect to CMS backend to enable full CRUD
                    <button
                        onClick={() => setEditingId(null)}
                        className="ml-3 text-text-dim hover:text-text-primary"
                    >
                        Dismiss
                    </button>
                </div>
            )}
        </div>
    );
}
