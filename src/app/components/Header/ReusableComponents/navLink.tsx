"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  icon: string;
}

const NavLink = ({ href, label, icon }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded-lg flex items-center space-x-1",
        isActive ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-800 opacity-50"
      )}
    >
      <span>{label}</span>
      <span className={isActive ? "text-yellow-400" : "text-gray-400"}>
        <Image src={icon} alt="label" width={16} height={16}/>
      </span>
    </Link>
  );
};

export default NavLink;
