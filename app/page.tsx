import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Brain,
  LayoutDashboard,
  ArrowRight,
  Check,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-soft">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-purple">Proxa AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate hover:text-dark transition">
              Login
            </Link>
            <Link href="/signup" className="bg-teal hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-sm">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-purple/10 text-purple text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          Built for social media managers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight tracking-tight">
          Create & plan on-brand
          <br />
          <span className="text-purple">content in minutes</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate max-w-2xl mx-auto">
          Proxa AI helps social media managers stop wasting time thinking about what to post.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="w-full sm:w-auto bg-teal hover:bg-teal-600 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-lg shadow-teal/25 flex items-center justify-center gap-2">
            Start Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#features" className="w-full sm:w-auto border-2 border-gray-200 hover:border-purple text-dark font-semibold px-8 py-3.5 rounded-xl transition">
            See How It Works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">Everything you need</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Sparkles, title: "AI Content Generator", desc: "Generate on-brand posts in seconds." },
            { icon: Calendar, title: "Content Calendar", desc: "Plan your entire month visually." },
            { icon: Brain, title: "Brand Memory", desc: "Save tone and guidelines once." },
            { icon: LayoutDashboard, title: "Clean Dashboard", desc: "See everything at a glance." },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-purple" />
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">{f.title}</h3>
              <p className="text-slate text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="font-bold text-purple">Proxa AI</span>
          <p className="text-sm text-slate mt-2">© 2026 Proxa AI</p>
        </div>
      </footer>
    </div>
  );
}
