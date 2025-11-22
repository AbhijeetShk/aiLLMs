"use client";

export default function Topbar() {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="text-gray-600">Welcome back 👋</div>
      <div className="flex gap-4 items-center">
        <button className="text-gray-600 hover:text-blue-600">🔔</button>
        <div className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm">
          Anushka
        </div>
      </div>
    </header>
  );
}
