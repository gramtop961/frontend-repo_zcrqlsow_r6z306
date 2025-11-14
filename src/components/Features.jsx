import { Zap, ListChecks, Tags } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Fast Transaction Entry',
    desc: 'Add expenses instantly with a persistent + button. Input amount, category, date/time, and notes effortlessly.'
  },
  {
    icon: ListChecks,
    title: 'Expense List View',
    desc: 'See recent transactions at a glance. Tap to edit or delete entries quickly.'
  },
  {
    icon: Tags,
    title: 'Category Management',
    desc: 'Customize categories with icons and colors for personalized tracking.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Essential Features for Everyday Finance Management</h2>
          <p className="mt-3 text-gray-600">Built to be fast, flexible, and delightful to use.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon: Icon, title, desc}, i) => (
            <motion.div key={title} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.4, delay: i * 0.05}} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-white shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center ring-1 ring-black/5 mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
