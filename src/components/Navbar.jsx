import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Budgeting", href: "#budgeting" },
    { label: "Insights", href: "#insights" },
    { label: "Security", href: "#security" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-inner" aria-hidden="true" />
            <span className="font-semibold text-gray-900">Expense Tracker</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-blue-700 transition-colors">
              Get the App
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-gray-800 py-2">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow">
              Get the App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
