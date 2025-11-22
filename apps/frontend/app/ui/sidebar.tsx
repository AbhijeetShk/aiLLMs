"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdChat, MdPerson } from "react-icons/md";

const links = [
  { href: "/patient-dashboard", label: "Patient Dashboard", icon: <MdPerson size={20} /> },
  { href: "/doctor-dashboard", label: "Doctor Dashboard", icon: <MdDashboard size={20} /> },
  { href: "/medical-assistant", label: "Medical Assistant", icon: <MdChat size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-xl p-6 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-blue-600">AI Lung Assistant</h1>

      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
              ${
                pathname === l.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-50"
              }
            `}
          >
            {l.icon}
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
