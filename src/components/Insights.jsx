import { motion } from 'framer-motion';

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Understand Spending with Powerful Insights</h2>
          <p className="mt-3 text-gray-600">Interactive mockups and animated charts to visualize your finances.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.4}} className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 p-6 ring-1 ring-black/5">
            <div className="h-64 rounded-xl bg-white shadow-inner p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-tr from-blue-100 to-emerald-100" />
            </div>
            <p className="mt-3 text-sm text-gray-600">Dashboard Overview: total income, expenses, and category breakdowns.</p>
          </motion.div>

          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.4, delay: 0.05}} className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
            <div className="h-64 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50" />
            <p className="mt-3 text-sm text-gray-600">Interactive Reports: filter by date, category, or payee.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
