"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlusCircle } from "lucide-react";
import clsx from "clsx";

interface NavButtonProps {
  href: string;
  label: string;
}

const NavButton = ({ href, label }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
  <Link
      href={href}
      className={clsx(
        "flex items-center space-x-1",
        isActive ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-800 opacity-50"
      )}
    >
       <PlusCircle className="w-6 h-6 text-gray-400 hover:text-white" />
      <span>{label}</span>
    </Link>
  );
};

export default NavButton;
