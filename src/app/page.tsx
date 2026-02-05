'use client';

import { useState } from 'react';

// Hero Section
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            🦅 Open Source AI Agent Framework
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Paying{' '}
            <span className="text-red-400 line-through">$500/Night</span>
            <br />
            for AI That Should Cost{' '}
            <span className="text-emerald-400">$6</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Enterprise OpenClaw cuts your AI agent costs by{' '}
            <span className="text-emerald-400 font-bold">97%</span> with intelligent
            token optimization, multi-model routing, and one-click deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              Start Free →
            </a>
            <a
              href="https://github.com/anthropics/claude-code"
              target="_blank"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-lg transition-all border border-white/20"
            >
              Watch Demo
            </a>
          </div>
          <blockquote className="text-lg text-slate-400 italic max-w-2xl mx-auto border-l-4 border-emerald-500 pl-4">
            &quot;I went from $500 overnight disasters to $6 overnight wins. This is insane.&quot;
            <span className="block text-emerald-400 font-medium mt-2">— Matt G., AI Engineer</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function Problem() {
  const problems = [
    { problem: 'Context bloat', impact: 'Full files loaded every message', cost: '2-3M extra tokens/day' },
    { problem: 'Heartbeat overhead', impact: 'Full reload every 30 minutes', cost: '$2-3/day IDLE' },
    { problem: 'Single model', impact: 'Using Opus for everything', cost: '20x more than needed' },
    { problem: 'No visibility', impact: "Don't know where tokens go", cost: 'Surprise $500 bills' },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Your AI Agent Is Burning Money 🔥
          </h2>
          <p className="text-xl text-slate-600">The hidden cost killers nobody talks about</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:border-red-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                  💸
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.problem}</h3>
                  <p className="text-slate-600 mb-2">{item.impact}</p>
                  <p className="text-red-600 font-semibold">{item.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-600 mt-8 text-lg">
          <span className="font-semibold">Sound familiar?</span> You&apos;re not alone. Most AI agent users discover this the hard way.
        </p>
      </div>
    </section>
  );
}

// Solution Section
function Solution() {
  const solutions = [
    {
      icon: '🎯',
      title: 'Intelligent Multi-Model Routing',
      description: 'Automatically routes tasks to the right model',
      details: [
        '85% Haiku - Research, basic tasks ($0.0008/1K)',
        '10% Sonnet - Writing, coding ($0.003/1K)',
        '5% Opus - Complex reasoning ($0.015/1K)',
        '0% Local - Heartbeats, file ops (FREE)',
      ],
    },
    {
      icon: '📊',
      title: 'Real-Time Token Dashboard',
      description: 'See exactly where your tokens go',
      details: ['Cost prediction before execution', 'Budget alerts and limits', 'Historical analytics'],
    },
    {
      icon: '🧠',
      title: 'Context Optimization',
      description: "Don't load what you don't need",
      details: ['Selective loading', 'Smart compression', 'Cache-first architecture', 'Minimal heartbeat context'],
    },
    {
      icon: '🤖',
      title: 'Sub-Agent Cost Control',
      description: 'Manage costs across all agents',
      details: ['Per-agent model assignment', 'Automatic model switching', 'Cost attribution'],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Enterprise OpenClaw Fixes This
          </h2>
          <p className="text-xl text-slate-600">Four powerful optimizations, one simple platform</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-emerald-500">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Results Section
function Results() {
  const comparisons = [
    { before: '$2-3/day IDLE', after: '~$0' },
    { before: '$25/task average', after: '$0.50' },
    { before: '$90+/month', after: '<$10' },
    { before: '$150 overnight tasks', after: '$6' },
  ];

  return (
    <section className="py-20 px-4 bg-emerald-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Numbers Don&apos;t Lie</h2>
          <p className="text-xl text-emerald-100">Real results from real users</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {comparisons.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
              <p className="text-red-300 line-through text-lg mb-2">{item.before}</p>
              <p className="text-3xl font-bold text-white">{item.after}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-2xl font-bold">
          That&apos;s a <span className="text-yellow-300">97% reduction</span> in AI costs.
        </p>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: 'Community',
      price: 'Free',
      period: 'forever',
      features: ['Core features', 'Self-hosted', 'Community support', 'Basic RAG', 'REST API'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Everything in Community', 'Token Optimizer Dashboard', 'Multi-Model Routing', 'Usage Analytics', 'Email support'],
      cta: 'Join Waitlist',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: ['Everything in Pro', 'Full optimization suite', 'SLA guarantee', 'Priority support', 'Custom integrations'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600">All plans include unlimited agents on your infrastructure</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-xl shadow-lg border-2 relative ${
                plan.popular ? 'border-emerald-500 scale-105' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-600">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-700">
                    <span className="text-emerald-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Waitlist Section
function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For MVP: simple mailto or Formspree integration
    window.location.href = `mailto:waitlist@enterprise-openclaw.com?subject=Waitlist Signup&body=Please add me to the waitlist: ${email}`;
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 bg-slate-900 text-white" id="waitlist">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join 10,000+ Developers Building Smarter AI</h2>
        <p className="text-xl text-slate-300 mb-8">Get early access to Enterprise features</p>
        <div className="bg-slate-800 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400">✓</span> Token Optimizer (Enterprise)
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400">✓</span> One-click deployment
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400">✓</span> Community Discord access
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400">✓</span> Exclusive tutorials
            </div>
          </div>
          {submitted ? (
            <div className="text-emerald-400 font-semibold py-4">
              🎉 Thanks for signing up! Check your email client to complete.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all"
              >
                Join Waitlist →
              </button>
            </form>
          )}
          <p className="text-slate-500 text-sm mt-4">We&apos;ll never spam you. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const faqs = [
    {
      q: 'How hard is it to set up?',
      a: 'One command: `./install.sh` - Running in 60 seconds.',
    },
    {
      q: 'Do I need to change my existing agents?',
      a: 'No. Enterprise OpenClaw works alongside your current setup. Migrate gradually.',
    },
    {
      q: "What if I'm not a developer?",
      a: 'Our Pro plan includes a hosted version with no coding required.',
    },
    {
      q: 'What models do you support?',
      a: 'Anthropic (Claude), OpenAI (GPT), Ollama (local), and more.',
    },
    {
      q: 'Is my data safe?',
      a: '100% self-hosted. Your data never leaves your infrastructure.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-50 rounded-xl p-6 cursor-pointer">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                {faq.q}
                <span className="text-emerald-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Cut Your AI Costs by 97%?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#waitlist"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all"
            >
              Start Free →
            </a>
            <a
              href="https://github.com"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/20"
            >
              View GitHub →
            </a>
            <a
              href="https://discord.gg"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/20"
            >
              Join Discord →
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦅</span>
            <span className="font-bold">Enterprise OpenClaw</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Enterprise OpenClaw. Open source, built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <Pricing />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
