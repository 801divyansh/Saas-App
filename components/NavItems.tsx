"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { label: "Dashboard", href: "/Dashboard" },
    { label: "Companions", href: "/companions" },
    { label: "Plans" , href: "/subscription" },
    { label: "My Journey", href: "/my-journey" },
]

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
    const pathname = usePathname();
    return (
        <nav className={mobile ? "flex flex-col gap-4" : "flex items-center gap-8"}>
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        pathname === href && "bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-orange-300 font-semibold",
                        mobile && "text-lg"
                    )}
                >
                    {label}
                </Link>
            ))}
            <ThemeToggle />
        </nav>
    );
};

export default NavItems;
