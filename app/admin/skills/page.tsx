"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import skillsData from "@/data/skills.json";

export default function SkillsAdmin() {
    const [professional] = useState(skillsData.professional);
    const [technical] = useState(skillsData.technical);

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-heading-1 font-bold text-text-primary mb-2">
                        Skills
                    </h1>
                    <p className="text-body text-text-muted">
                        Manage your professional and technical skills.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-purple text-white text-small font-medium hover:bg-accent-purple-light transition-colors">
                    <Plus size={16} />
                    Add Skill
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Professional Skills */}
                <div>
                    <h2 className="text-heading-3 font-semibold text-text-primary mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-purple" />
                        Professional Skills
                    </h2>
                    <div className="space-y-3">
                        {professional.map((skill) => (
                            <div
                                key={skill.name}
                                className="surface-card p-4 flex items-center justify-between group"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-small font-medium text-text-primary">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs text-text-muted">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 bg-base-elevated rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-purple-light"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                                <button className="ml-4 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500/10 text-text-dim hover:text-red-400 transition-all">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Skills */}
                <div>
                    <h2 className="text-heading-3 font-semibold text-text-primary mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-mint" />
                        Technical Skills
                    </h2>
                    <div className="space-y-3">
                        {technical.map((skill) => (
                            <div
                                key={skill.name}
                                className="surface-card p-4 flex items-center justify-between group"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-small font-medium text-text-primary">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs text-text-muted">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 bg-base-elevated rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-accent-mint to-accent-mint-light"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                                <button className="ml-4 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500/10 text-text-dim hover:text-red-400 transition-all">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
