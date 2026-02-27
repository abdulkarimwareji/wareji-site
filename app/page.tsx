import { 
  ArrowRight, Shield, Zap, Globe, Smartphone, Banknote, CreditCard, 
  Wallet, ChevronRight, Menu, X, Facebook, Twitter, Instagram 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                <span className="text-white font-black text-xl">W</span>
             </div>
             <span className="font-black text-2xl tracking-tighter text-slate-900">Wareji</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
            <a href="#features" className="hover:text-purple-600 transition">Features</a>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#security" className="hover:text-purple-600 transition">Security</a>
          </div>

          <div className="flex items-center gap-4">
             <button className="hidden sm:block text-sm font-bold text-slate-900 hover:text-purple-600 transition">LOGIN</button>
             <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-purple-600 transition shadow-xl shadow-slate-200">GET THE APP</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-8 border border-purple-100">
             <span className="bg-purple-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded tracking-tighter">NEW</span>
             <span className="text-purple-700 text-xs font-bold tracking-tight">Direct Bank-to-Bank Transfers now live</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-slate-900">
            One wallet.<br />
            <span className="text-purple-600">Infinite possibilities.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            The first unified payment hub for East Africa. Send money instantly between EVC Plus, eDahab, local banks, and global cards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="w-full sm:w-auto bg-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-purple-700 transition shadow-2xl shadow-purple-200 flex items-center justify-center gap-2">
                DOWNLOAD NOW <ArrowRight className="w-5 h-5" />
             </button>
             <button className="w-full sm:w-auto border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition">
                VIEW PRICING
             </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-50 bg-slate-50/30">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Integrated with the National Financial Switch</p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
               <span className="font-black text-2xl tracking-tighter">SALAAM BANK</span>
               <span className="font-black text-2xl tracking-tighter">PREMIER BANK</span>
               <span className="font-black text-2xl tracking-tighter">IBS BANK</span>
               <span className="font-black text-2xl tracking-tighter">HORMUUD</span>
               <span className="font-black text-2xl tracking-tighter">VISA</span>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-4xl font-black tracking-tight mb-4">Why choose Wareji?</h2>
               <p className="text-slate-500 font-medium max-w-xl mx-auto">We've broken down the barriers between mobile networks and banks. One app to rule them all.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <FeatureCard 
                 icon={<Zap className="w-8 h-8 text-purple-600" />}
                 title="Instant Transfers"
                 desc="Move money between EVC, Zaad, and eDahab in under 60 seconds with our high-speed bridge."
               />
               <FeatureCard 
                 icon={<Globe className="w-8 h-8 text-purple-600" />}
                 title="Universal Rails"
                 desc="The only app that lets you pay from a Visa card into a mobile money number instantly."
               />
               <FeatureCard 
                 icon={<Shield className="w-8 h-8 text-purple-600" />}
                 title="Bank-to-Bank"
                 desc="Powered by BPC SmartVista technology for direct secure switch to the Central Bank's national infrastructure."
               />
            </div>
         </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-[3rem] mx-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
               <h2 className="text-5xl font-black leading-tight mb-8">Transparent pricing.<br />No hidden surprises.</h2>
               <div className="space-y-6">
                  <PricingRow label="Wallet to Mobile" value="1.05%" />
                  <PricingRow label="Direct Bank-to-Bank" value="$3.00 Flat" />
                  <PricingRow label="Visa/Mastercard" value="3.5% + $0.30" />
               </div>
            </div>
            <div className="flex-1 bg-white/10 p-12 rounded-[2rem] border border-white/10 backdrop-blur-xl">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-purple-400" /> App Preview
               </h3>
               <div className="aspect-[9/16] bg-slate-800 rounded-3xl border-8 border-slate-700 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col p-6">
                     <div className="h-6 w-1/3 bg-slate-600 rounded-full mb-8"></div>
                     <div className="h-20 w-full bg-purple-600/50 rounded-2xl mb-4 border border-purple-500/30"></div>
                     <div className="h-4 w-1/2 bg-slate-700 rounded-full mb-2"></div>
                     <div className="h-4 w-3/4 bg-slate-700 rounded-full mb-12"></div>
                     <div className="space-y-4">
                        <div className="h-14 w-full bg-slate-700 rounded-xl"></div>
                        <div className="h-14 w-full bg-slate-700 rounded-xl"></div>
                        <div className="h-14 w-full bg-slate-700 rounded-xl"></div>
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 border-b border-slate-100 pb-20">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-8">
                     <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-lg">W</span>
                     </div>
                     <span className="font-black text-xl tracking-tighter">Wareji</span>
                  </div>
                  <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                     Modernizing finance in East Africa. Built with love for the next generation of digital commerce.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-slate-400">Legal</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-600">
                     <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
                     <li><a href="#" className="hover:text-purple-600">AML Compliance</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-slate-400">Internal</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-600">
                     <li><a href="https://admin.wareji.com" className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 hover:bg-purple-50 hover:border-purple-200 transition flex items-center gap-2">
                        <Shield className="w-4 h-4 text-purple-600" /> Admin Portal
                     </a></li>
                     <li><a href="#" className="hover:text-purple-600">Support Center</a></li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-xs font-bold text-slate-400">© 2026 Wareji Fintech Solutions FZ-LLC. All rights reserved.</p>
               <div className="flex items-center gap-6 text-slate-400">
                  <Facebook className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
                  <Twitter className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
                  <Instagram className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
   return (
      <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500 group">
         <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            {icon}
         </div>
         <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
         <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
   );
}

function PricingRow({ label, value }: any) {
   return (
      <div className="flex items-center justify-between py-6 border-b border-white/10 last:border-0">
         <span className="text-xl font-bold text-white/70">{label}</span>
         <span className="text-2xl font-black text-purple-400 tracking-tight">{value}</span>
      </div>
   );
}
