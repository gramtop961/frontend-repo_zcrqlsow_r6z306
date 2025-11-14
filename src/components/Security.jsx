import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Cloud } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'Authentication & Security', desc: 'Protect data with biometric login (Face ID, Touch ID, or Fingerprint).' },
  { icon: Globe2, title: 'Multi-Currency Support', desc: 'Log transactions in multiple currencies with automatic conversion.' },
  { icon: Cloud, title: 'Data Backup', desc: 'Ensure financial data is safely stored and recoverable.' },
];

export default function Security() {
  return (
    <section id="security" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Secure, Reliable, and Smart</h2>
          <p className="mt-3 text-gray-600">Your data stays safe while you stay in control.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({icon: Icon, title, desc}, i) => (
            <motion.div key={title} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.4, delay: i * 0.05}} className="p-6 bg-white rounded-2xl shadow ring-1 ring-black/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
