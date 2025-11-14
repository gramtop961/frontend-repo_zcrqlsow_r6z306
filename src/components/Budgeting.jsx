import { motion } from 'framer-motion';

export default function Budgeting() {
  return (
    <section id="budgeting" className="py-20 bg-gradient-to-b from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.5}}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Stay on Budget, Every Month</h2>
          <p className="mt-4 text-gray-600">Set spending limits per category and monitor progress with real-time visual feedback.</p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-600" /> Budget Creation & Tracking</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-600" /> Recurring Transactions</li>
          </ul>
        </motion.div>

        <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: 0.1}} className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/5">
            <p className="text-sm font-semibold text-gray-800">Groceries</p>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-2 bg-blue-600 rounded-full" style={{width: '62%'}} />
            </div>
            <p className="mt-2 text-xs text-gray-500">$186 / $300</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/5">
            <p className="text-sm font-semibold text-gray-800">Transport</p>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-2 bg-emerald-600 rounded-full" style={{width: '40%'}} />
            </div>
            <p className="mt-2 text-xs text-gray-500">$80 / $200</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-white p-5 shadow ring-1 ring-black/5">
            <p className="text-sm font-semibold text-gray-800">Monthly Overview</p>
            <div className="mt-4 h-36 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl" />
            <p className="mt-2 text-xs text-gray-500">Line chart preview</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
