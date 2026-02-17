import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat("en-IN", {
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}
