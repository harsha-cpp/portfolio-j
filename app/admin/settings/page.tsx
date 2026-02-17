"use client";

import { useState } from "react";
import { Save, Upload } from "lucide-react";
import heroData from "@/data/hero.json";

export default function SettingsAdmin() {
    const [settings, setSettings] = useState({
        heroName: heroData.name,
        heroTitle: heroData.title,
        heroDesc: heroData.description,
        email: "jahnavi.dantuluri@gmail.com",
        linkedinUrl: "https://linkedin.com/in/jahnavi-dantuluri",
    });
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        // In production: await fetch("/api/settings", { method: "PUT", body: JSON.stringify(settings) });
        await new Promise((resolve) => setTimeout(resolve, 500));
        setSaving(false);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-heading-1 font-bold text-text-primary mb-2">
                        Site Settings
                    </h1>
                    <p className="text-body text-text-muted">
                        Manage your hero section, contact info, and uploads.
                    </p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-purple text-white text-small font-medium hover:bg-accent-purple-light transition-colors disabled:opacity-50"
                >
                    <Save size={16} />
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Hero Section Settings */}
                <div className="surface-card p-6 space-y-5">
                    <h2 className="text-heading-3 font-semibold text-text-primary">
                        Hero Section
                    </h2>

                    <div>
                        <label className="block text-small font-medium text-text-muted mb-2">
                            Display Name
                        </label>
                        <input
                            type="text"
                            value={settings.heroName}
                            onChange={(e) =>
                                setSettings({ ...settings, heroName: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-small font-medium text-text-muted mb-2">
                            Title / Role
                        </label>
                        <input
                            type="text"
                            value={settings.heroTitle}
                            onChange={(e) =>
                                setSettings({ ...settings, heroTitle: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-small font-medium text-text-muted mb-2">
                            Description
                        </label>
                        <textarea
                            rows={4}
                            value={settings.heroDesc}
                            onChange={(e) =>
                                setSettings({ ...settings, heroDesc: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all resize-none"
                        />
                    </div>
                </div>

                {/* Contact & Uploads */}
                <div className="space-y-6">
                    <div className="surface-card p-6 space-y-5">
                        <h2 className="text-heading-3 font-semibold text-text-primary">
                            Contact Information
                        </h2>

                        <div>
                            <label className="block text-small font-medium text-text-muted mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={settings.email}
                                onChange={(e) =>
                                    setSettings({ ...settings, email: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-small font-medium text-text-muted mb-2">
                                LinkedIn URL
                            </label>
                            <input
                                type="url"
                                value={settings.linkedinUrl}
                                onChange={(e) =>
                                    setSettings({ ...settings, linkedinUrl: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Resume Upload */}
                    <div className="surface-card p-6">
                        <h2 className="text-heading-3 font-semibold text-text-primary mb-4">
                            Resume Upload
                        </h2>
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-accent-purple/30 transition-colors cursor-pointer">
                            <Upload size={32} className="text-text-dim mx-auto mb-3" />
                            <p className="text-small text-text-muted mb-1">
                                Drag & drop your resume here
                            </p>
                            <p className="text-xs text-text-dim">
                                PDF, DOC up to 10MB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
