export default function CTA() {
  return (
    <section id="cta" className="py-16 bg-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Take Control of Your Finances Today</h2>
        <p className="mt-3 text-emerald-50">Get started now and build better money habits.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-emerald-700 font-semibold px-6 py-3 shadow hover:shadow-md">Get Started</a>
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 text-white font-semibold px-6 py-3 shadow hover:bg-emerald-400">Download the App</a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 opacity-90">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
        </div>
      </div>
    </section>
  );
}
