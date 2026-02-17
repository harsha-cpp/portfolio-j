"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, LogIn } from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Invalid credentials. Please try again.");
            setLoading(false);
        } else {
            router.push("/admin");
        }
    };

    return (
        <div className="min-h-screen bg-base flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-heading-1 font-bold text-text-primary mb-2">
                        Admin Login
                    </h1>
                    <p className="text-body text-text-muted">
                        Sign in to manage your portfolio content
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="surface-card p-8 space-y-6"
                >
                    {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-small">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-small font-medium text-text-muted mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim"
                            />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all"
                                placeholder="admin@jahnavi.dev"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-small font-medium text-text-muted mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim"
                            />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-base-elevated border border-white/10 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            "Signing in..."
                        ) : (
                            <>
                                Sign In <LogIn size={16} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
