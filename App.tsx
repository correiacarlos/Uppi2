
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Utensils, 
  Stethoscope, 
  PawPrint, 
  Smartphone, 
  CheckCircle2, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Phone,
  ShieldCheck,
  Zap,
  Star,
  MapPin,
  Clock,
  ChevronRight,
  Store
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 bg-uppi-green ${scrolled ? 'py-3 shadow-xl' : 'py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logotipo à esquerda funcionando como botão Home */}
        <a href="#inicio" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="https://raw.githubusercontent.com/emergent-sh/emergent-assets/main/uppi-logo.png" 
            alt="Logo UPPI" 
            className="h-10 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
            }}
          />
          <span className="fallback-logo hidden text-2xl font-black tracking-tighter text-white">
            uppi<span className="text-uppi-yellow">.</span>
          </span>
        </a>

        {/* Menu Central/Direito */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-[13px] uppercase tracking-[0.2em] text-white/90">
          <a href="#inicio" className="hover:text-uppi-yellow transition-colors">Início</a>
          <a href="#servicos" className="hover:text-uppi-yellow transition-colors">Para Você</a>
          <a href="#como-funciona" className="hover:text-uppi-yellow transition-colors">Como Funciona</a>
          <a href="#contato" className="hover:text-uppi-yellow transition-colors">Contato</a>
        </div>

        {/* Botão de Download */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-white text-uppi-green px-8 py-3.5 rounded-2xl font-black shadow-lg hover:bg-uppi-yellow hover:text-slate-900 transition-all text-sm tracking-widest uppercase">
            BAIXAR APP
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-white bg-white/10 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-[110] bg-uppi-green transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
             <a href="#inicio" onClick={() => setIsOpen(false)}>
                <img src="https://raw.githubusercontent.com/emergent-sh/emergent-assets/main/uppi-logo.png" alt="Logo UPPI" className="h-12 w-auto" />
             </a>
             <button className="p-2 bg-white/10 rounded-full text-white" onClick={() => setIsOpen(false)}><X size={24}/></button>
          </div>
          <div className="space-y-8">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Para Você', href: '#servicos' },
              { label: 'Como Funciona', href: '#como-funciona' },
              { label: 'Sobre Nós', href: '#contato' }
            ].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="block text-4xl font-black text-white hover:text-uppi-yellow transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-auto space-y-4">
             <button className="w-full bg-white text-uppi-green py-6 rounded-3xl font-black text-xl shadow-2xl">ABRIR O APP</button>
             <div className="flex justify-center gap-8 py-6 border-t border-white/10">
                <Instagram size={24} className="text-white/60" />
                <Facebook size={24} className="text-white/60" />
                <Phone size={24} className="text-white/60" />
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-uppi-green selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-40 pb-20 lg:pt-64 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-pattern -z-10"></div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-50 text-uppi-green px-6 py-3 rounded-full mb-10 border border-green-100 shadow-sm">
              <span className="w-3 h-3 bg-uppi-green rounded-full animate-ping"></span>
              <span className="text-xs font-black uppercase tracking-widest">O Delivery Oficial de Cambuí-MG</span>
            </div>
            
            <h1 className="text-5xl lg:text-[100px] font-black leading-[0.9] tracking-tighter text-slate-900 mb-10">
              Peça local, <br />
              <span className="text-uppi-green">viva o novo.</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              O delivery que entende o sotaque de Cambuí. Praticidade total para você pedir o que ama em poucos toques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="bg-uppi-green text-white px-10 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 btn-primary">
                <Smartphone size={28} /> 
                <span>BAIXAR O APP</span>
              </button>
              <a href="#servicos" className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-6 rounded-3xl font-black text-xl flex items-center justify-center hover:border-uppi-green hover:bg-green-50/50 transition-all">
                VER SERVIÇOS
              </a>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
               <div className="flex -space-x-4">
                  {[1,2,3,4,5].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i+200}`} className="w-14 h-14 rounded-full border-4 border-white shadow-xl hover:scale-110 transition-transform cursor-pointer" alt="user" />
                  ))}
               </div>
               <div className="text-left">
                  <div className="flex text-uppi-yellow gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">+4.000 cambuienses no app</p>
               </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative z-10 animate-float">
                <div className="relative mx-auto border-slate-900 border-[16px] rounded-[4rem] h-[720px] w-[350px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden bg-white">
                    <div className="absolute top-0 inset-x-0 h-10 bg-slate-900 flex justify-center z-50">
                        <div className="w-24 h-6 bg-slate-900 rounded-b-3xl"></div>
                    </div>
                    <div className="p-6 pt-12">
                        <div className="flex justify-between items-center mb-8">
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase">Localização</p>
                              <p className="text-sm font-black text-slate-900 flex items-center gap-1">Cambuí - MG <MapPin size={14} className="text-uppi-green"/></p>
                           </div>
                           <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"><ShoppingBag size={20} className="text-slate-400"/></div>
                        </div>
                        
                        <div className="bg-green-50 p-5 rounded-3xl mb-8 border border-green-100">
                           <p className="text-xs font-black text-uppi-green uppercase tracking-widest mb-1">Cupom: BEMVINDO</p>
                           <p className="text-lg font-black text-slate-900 leading-tight">Ganhe R$10 de desconto no 1º pedido!</p>
                        </div>

                        <p className="font-black text-lg mb-4">O que vamos pedir?</p>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                           {['Pizza', 'Burger', 'Açaí', 'Padaria'].map(item => (
                             <div key={item} className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2 border border-slate-100">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm"></div>
                                <span className="text-[10px] font-black uppercase">{item}</span>
                             </div>
                           ))}
                        </div>

                        <p className="font-black text-lg mb-4">Mais Próximos</p>
                        <div className="space-y-4">
                           {[1,2].map(i => (
                             <div key={i} className="flex gap-4 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden">
                                  <img src={`https://images.unsplash.com/photo-${i === 1 ? '1550547660-d9450f859349' : '1571091723234-105273390231'}?auto=format&fit=crop&q=80&w=200`} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-black">Lanchonete local {i}</p>
                                  <p className="text-[10px] text-slate-400">18-25 min • Entrega Grátis</p>
                                  <div className="flex text-uppi-yellow gap-0.5 mt-1">
                                    {[1,2,3,4,5].map(star => <Star key={star} size={8} fill="currentColor" />)}
                                  </div>
                                </div>
                             </div>
                           ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-40 -left-16 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100 animate-bounce">
                   <div className="bg-uppi-yellow p-3 rounded-2xl text-white shadow-lg shadow-yellow-100"><Clock size={28} /></div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Entrega Flash</p>
                      <p className="text-lg font-black text-slate-900">18 min</p>
                   </div>
                </div>
                <div className="absolute bottom-20 -right-16 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100">
                   <div className="bg-uppi-green p-3 rounded-2xl text-white shadow-lg shadow-green-100"><ShieldCheck size={28} /></div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Segurança</p>
                      <p className="text-lg font-black text-slate-900">100% Cambuí</p>
                   </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-uppi-green/5 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* User Section - Facilidade */}
      <section id="servicos" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter mb-8 leading-tight">
              Tudo o que você precisa, <br />
              <span className="text-uppi-green">em um só lugar.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">Não é apenas comida. É facilidade para o seu dia a dia em Cambuí.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { Icon: Utensils, title: "Alimentação", desc: "Os melhores restaurantes, lanchonetes e padarias da cidade prontos para te atender.", color: "text-orange-500", bg: "bg-orange-50" },
              { Icon: Stethoscope, title: "Farmácia", desc: "Medicamentos e itens de higiene entregues com rapidez total e segurança.", color: "text-blue-500", bg: "bg-blue-50" },
              { Icon: PawPrint, title: "Pet Shop", desc: "Seu pet também merece UPPI. Rações e acessórios sem sair de casa.", color: "text-green-500", bg: "bg-green-50" }
            ].map((s, i) => (
              <div key={i} className="group bg-white p-12 rounded-[4rem] border border-slate-100 card-hover cursor-pointer relative overflow-hidden">
                 <div className={`${s.bg} ${s.color} w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                   <s.Icon size={44} strokeWidth={2.5} />
                 </div>
                 <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                 <p className="text-slate-500 leading-relaxed mb-8 text-lg font-medium">{s.desc}</p>
                 <div className="flex items-center text-uppi-green font-black text-sm gap-2 uppercase tracking-[0.2em]">
                    VER LOJAS <ChevronRight size={18} />
                 </div>
                 <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-slate-50 rounded-full -z-10 group-hover:scale-[3] transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-7xl font-black mb-6 tracking-tight">Pedir é simples.</h2>
              <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-sm italic">Como Cambuí gosta.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-20 relative">
              <div className="hidden lg:block absolute top-1/3 left-[15%] right-[15%] h-1 border-t-4 border-dashed border-slate-100 -z-0"></div>
              
              {[
                { step: "01", title: "Baixe o App", desc: "Disponível para iOS e Android. Cadastro rápido sem burocracia.", icon: <Smartphone className="text-uppi-green" size={32}/> },
                { step: "02", title: "Escolha a Loja", desc: "Navegue pelas melhores opções da nossa cidade em poucos toques.", icon: <Store className="text-uppi-green" size={32}/> },
                { step: "03", title: "Receba em Casa", desc: "Nossa frota local garante que seu pedido chegue rápido e quente.", icon: <Zap className="text-uppi-green" size={32}/> }
              ].map((s, i) => (
                <div key={i} className="relative z-10 text-center flex flex-col items-center">
                   <div className="w-24 h-24 bg-white border-4 border-slate-50 text-slate-900 rounded-[2.5rem] flex items-center justify-center text-4xl font-black mb-10 shadow-2xl shadow-slate-200 group hover:border-uppi-green transition-colors">
                      <span className="group-hover:hidden transition-all">{s.step}</span>
                      <div className="hidden group-hover:block transition-all animate-pulse">{s.icon}</div>
                   </div>
                   <h4 className="text-3xl font-black mb-4 tracking-tight">{s.title}</h4>
                   <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xs">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-uppi-green relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl lg:text-8xl font-black text-white mb-16 leading-none tracking-tighter">
              A fome não espera. <br />
              <span className="text-uppi-yellow italic">Peça agora.</span>
           </h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-slate-900 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-8" alt="App Store" />
              </button>
              <button className="bg-slate-900 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8" alt="Play Store" />
              </button>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-white pt-32 pb-16 border-t border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
             <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center gap-3 mb-8 bg-uppi-green p-4 rounded-3xl w-fit">
                  <img src="https://raw.githubusercontent.com/emergent-sh/emergent-assets/main/uppi-logo.png" alt="Logo UPPI" className="h-10 w-auto" />
                </div>
                <p className="text-slate-400 font-medium leading-relaxed mb-8 text-lg">
                  O delivery que valoriza o comércio local de Cambuí-MG. Tecnologia para as pessoas.
                </p>
                <div className="flex gap-4">
                   {[Instagram, Facebook, Phone].map((Icon, i) => (
                     <a key={i} href="#" className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:text-uppi-green hover:bg-green-50 hover:border-uppi-green transition-all border-2 border-transparent">
                        <Icon size={24} />
                     </a>
                   ))}
                </div>
             </div>
             <div>
                <h4 className="font-black text-xs uppercase tracking-[0.4em] text-slate-400 mb-10">Explorar</h4>
                <ul className="space-y-5 font-bold text-slate-900 text-lg">
                   <li><a href="#inicio" className="hover:text-uppi-green transition-colors">Página Inicial</a></li>
                   <li><a href="#servicos" className="hover:text-uppi-green transition-colors">Para Você</a></li>
                   <li><a href="#como-funciona" className="hover:text-uppi-green transition-colors">Como Funciona</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-black text-xs uppercase tracking-[0.4em] text-slate-400 mb-10">Empresa</h4>
                <ul className="space-y-5 font-bold text-slate-900 text-lg">
                   <li><a href="#" className="hover:text-uppi-green transition-colors">Sobre a UPPI</a></li>
                   <li><a href="#" className="hover:text-uppi-green transition-colors">Perguntas Frequentes</a></li>
                   <li><a href="#" className="hover:text-uppi-green transition-colors">Termos e Privacidade</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-black text-xs uppercase tracking-[0.4em] text-slate-400 mb-10">Fale Conosco</h4>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-uppi-green shrink-0">
                        <MapPin size={24} />
                     </div>
                     <p className="font-bold text-slate-900 leading-tight">Cambuí - Minas Gerais<br /><span className="text-slate-400 font-medium text-sm">Orgulho Sul-Mineiro</span></p>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                        <Clock size={24} />
                     </div>
                     <p className="font-bold text-slate-900 leading-tight">Operação Ativa<br /><span className="text-slate-400 font-medium text-sm">Suporte em tempo real</span></p>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
             <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">© 2024 UPPI App Delivery • Todos os direitos reservados</p>
                <div className="hidden md:block w-1 h-1 bg-slate-200 rounded-full"></div>
                <a href="#" className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] hover:text-uppi-green">Privacidade</a>
             </div>
             <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100 shadow-sm">
                <ShieldCheck size={20} className="text-uppi-green" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Conexão 100% Segura</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
