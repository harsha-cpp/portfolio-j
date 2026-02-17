export default function GradientBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
            {/* Primary gradient orb — top right */}
            <div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, transparent 70%)",
                }}
            />
            {/* Secondary orb — bottom left */}
            <div
                className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, transparent 70%)",
                }}
            />
            {/* Center subtle wash */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.015]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%)",
                }}
            />
            {/* Very subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />
        </div>
    );
}
