import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-emerald-50">
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}} className="relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full px-3 py-1 mb-4">
            New • Now with multi-currency support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Track Expenses. Stay in Control.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            A fast, secure, and intuitive mobile app to manage daily spending and achieve financial clarity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white font-semibold px-6 py-3 shadow-lg hover:bg-blue-700 transition-all">
              Download App
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 font-semibold px-6 py-3 shadow hover:shadow-md border border-gray-200">
              Learn More
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="p-4 rounded-lg bg-white/60 backdrop-blur border border-gray-100 shadow-sm">
              Quick add with persistent + button
            </div>
            <div className="p-4 rounded-lg bg-white/60 backdrop-blur border border-gray-100 shadow-sm">
              Real-time budgeting & insights
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.1}} className="relative w-full h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute -z-0 inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
