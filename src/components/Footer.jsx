import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" aria-label="Twitter" className="hover:text-gray-700"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-700"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-700"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-500">© {year} Expense Tracker App. All rights reserved.</p>
      </div>
    </footer>
  );
}
