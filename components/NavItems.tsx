"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Companions", href: "/companions" },
    { label: "Plans" , href: "/subscription" },
    { label: "My Journey", href: "my-journey" },
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
                        pathname === href && "text-primary font-semibold",
                        mobile && "text-lg"
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;
