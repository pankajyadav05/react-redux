"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-end items-end w-full gap-6 px-6 mt-4">
      <Link
        href="/"
        className={cn(
          "transition border-b-4 border-transparent text-foreground/50",
          pathname === "/" && "border-foreground text-foreground"
        )}
      >
        Home
      </Link>
      <Link
        href="/history"
        className={cn(
          "transition border-b-4 border-transparent text-foreground/50",
          pathname === "/history" && "border-foreground text-foreground"
        )}
      >
        History
      </Link>
    </nav>
  );
};

export default Navbar;
