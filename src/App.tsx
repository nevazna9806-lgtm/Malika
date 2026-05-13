/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  BookOpen, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Calendar,
  Clock,
  ArrowRight,
  GraduationCap,
  Globe,
  Star,
  Image as ImageIcon,
  Trophy,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'home' | 'events';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bosh sahifa', href: '#home', page: 'home' },
    { name: 'Maktab haqida', href: '#about', page: 'home' },
    { name: 'Yangiliklar', href: '#news', page: 'home' },
    { name: 'Yutuqlar', href: '#events', page: 'events' },
    { name: 'Aloqa', href: '#contact', page: 'home' },
  ];

  const handleNavClick = (page: Page, href: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    if (page === 'home' && href.startsWith('#')) {
      setTimeout(() => {
        const el = document.getElementById(href.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const EventsPage = () => (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Bosh sahifaga qaytish
          </button>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6 underline decoration-brand-blue/30 underline-offset-8">
            Tadbirlar va <span className="text-brand-blue">Yutuqlar</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Maktabimiz hayotidagi eng yorqin lahzalar va o'quvchilarimizning erishgan yuksak natijalari bilan tanishing. Har bir muvaffaqiyat ortida katta mehnat va intilish yotadi.
          </p>
        </motion.div>

        {/* Gallery Sections */}
        <div className="space-y-32">
          {/* Achievements */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue">
                <Trophy size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold">O'quvchilar yutuqlari</h3>
                <p className="text-slate-500">Viloyat va Respublika miqyosidagi natijalar</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Viloyat Matematika olimpiadasi",
                  student: "Asadbek Karimov",
                  place: "1-o'rin",
                  image: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  title: "Respublika " + '"Yosh kitobxon" tanlovi',
                  student: "Mohira Sodiqova",
                  place: "2-o'rin",
                  image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=1935&auto=format&fit=crop"
                },
                {
                  title: "Prezident stipendiyasi sovrindori",
                  student: "Javohir Ergashev",
                  place: "G'olib",
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
                  </div>
                  <div className="p-10 flex-grow">
                    <div className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
                      {item.place}
                    </div>
                    <h4 className="text-2xl font-bold mb-3 leading-tight">{item.title}</h4>
                    <p className="text-slate-500 font-semibold text-lg">{item.student}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Event Gallery */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue">
                <ImageIcon size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold">Foto Galereya</h3>
                <p className="text-slate-500">Maktabdagi tadbirlardan unutilmas fotolavhalar</p>
              </div>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
              {[
                "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2098&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1577896851231-70ef146975bb?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=2069&auto=format&fit=crop"
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] overflow-hidden shadow-xl group cursor-zoom-in relative"
                >
                  <img src={img} alt="School event" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                      <ImageIcon size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-blue/20">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div onClick={() => handleNavClick('home', '#home')} className="flex items-center gap-3 group cursor-pointer text-slate-900 transition-colors">
            <div className="bg-brand-blue p-2.5 rounded-xl text-white transition-transform group-hover:scale-110 shadow-lg shadow-brand-blue/20">
              <GraduationCap size={26} />
            </div>
            <div>
              <h1 className={`text-2xl font-display font-black leading-none transition-colors ${scrolled ? 'text-brand-blue' : 'text-slate-900 group-hover:text-brand-blue'}`}>
                12-Maktab
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black opacity-80">Guliston shahri</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.page as Page, link.href)}
                className={`text-sm font-bold tracking-tight transition-colors relative group py-2 ${
                  currentPage === link.page ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue transition-transform origin-left ${currentPage === link.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
            <button className="bg-brand-blue text-white px-7 py-3 rounded-full text-sm font-black hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/30 active:scale-95">
              Bog'lanish
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900 bg-white/50 backdrop-blur rounded-xl shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-32 px-8"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.page as Page, link.href)}
                  className={`text-left text-4xl font-display font-black transition-colors ${
                    currentPage === link.page ? 'text-brand-blue' : 'text-slate-900 border-l-4 border-transparent active:border-brand-blue pl-4'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button className="bg-brand-blue text-white w-full py-5 rounded-[2rem] text-xl font-black shadow-2xl shadow-brand-blue/40 mt-8">
                Bog'lanish
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {currentPage === 'events' ? (
          <EventsPage />
        ) : (
          <>
            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                  alt="School building" 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-slate-50"></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                      <Star size={14} fill="currentColor" />
                      <span>Sifatli Ta'lim — Yorqin Kelajak</span>
                    </div>
                    <h2 className="text-6xl md:text-[5.5rem] font-display font-black text-slate-900 leading-[0.95] mb-10 tracking-tight">
                      Bilimlar <br /> <span className="text-brand-blue italic relative">kelajak<span className="absolute bottom-4 left-0 w-full h-4 bg-brand-blue/10 -z-10"></span></span> <br /> maskani
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl font-medium">
                      Guliston shahridagi <span className="text-slate-900 font-bold">12-sonli</span> ixtisoslashtirilgan maktab — har bir bolaning orzulari ushaladigan maskan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                      <button className="bg-brand-blue text-white px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-all shadow-2xl shadow-brand-blue/40 group active:scale-95">
                        Batafsil ma'lumot
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </button>
                      <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-[2rem] font-black hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                        Tanishuv videosi
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "backOut" }}
                    className="relative hidden lg:block"
                  >
                    <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,64,175,0.3)] border-[12px] border-white">
                      <img 
                        src="https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=1935&auto=format&fit=crop" 
                        alt="Education" 
                        className="w-full h-auto aspect-[4/5] object-cover"
                      />
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative background circle */}
              <div className="absolute left-[-10%] bottom-[-20%] hidden xl:block opacity-5">
                <div className="w-[800px] h-[800px] bg-brand-blue rounded-full"></div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white relative z-20">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-12 lg:translate-y-[-50%] shadow-[0_40px_80px_-15px_rgba(15,23,42,0.4)] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent pointer-events-none"></div>
                  {[
                    { label: 'O\'quvchilar', value: '800+', icon: Users },
                    { label: 'Murabbiylar', value: '60+', icon: Award },
                    { label: 'Sinflar', value: '32+', icon: BookOpen },
                    { label: 'Yil Tajriba', value: '25+', icon: Clock },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center group relative z-10">
                      <div className="bg-white/5 w-16 h-16 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-blue/20">
                        <stat.icon className="text-brand-blue" size={28} />
                      </div>
                      <h3 className="text-white text-4xl md:text-5xl font-black mb-2 tracking-tight">{stat.value}</h3>
                      <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* News Section */}
            <section id="news" className="py-32">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div className="max-w-2xl">
                    <span className="text-brand-blue font-black tracking-[0.3em] uppercase text-xs">Yangiliklar & E'lonlar</span>
                    <h2 className="text-5xl font-display font-black text-slate-900 mt-6 leading-tight">
                      Maktabimizdagi so'nggi <br /> muhim voqealar
                    </h2>
                  </div>
                  <button 
                    onClick={() => setCurrentPage('events')}
                    className="text-brand-blue font-black flex items-center gap-3 hover:gap-5 transition-all group"
                  >
                    Barcha yutuqlar <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    {
                      date: '12 May, 2024',
                      title: "Viloyat olimpiadasida o'quvchilarimiz g'alaba qozonishdi",
                      desc: "Matematika va Informatika fanlaridan o'quvchilarimiz mutloq g'oliblikni qo'lga kiritishdi.",
                      img: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=2070&auto=format&fit=crop"
                    },
                    {
                      date: '08 May, 2024',
                      title: "Ma'naviyat va ma'rifat darslari maktabimizning ustuvor yo'nalishi",
                      desc: "O'quvchilarning ma'naviy dunyosini boyitish maqsadida xalqaro ekspertlar bilan uchrashuv o'tkazildi.",
                      img: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=1935&auto=format&fit=crop"
                    },
                    {
                      date: '01 May, 2024',
                      title: "Maktabimizda \"Ochiq eshiklar kuni\" o'tkazildi",
                      desc: "Ota-onalar maktabdagi ta'lim jarayonlari va sharoitlar bilan yaqindan tanishdilar.",
                      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                      <div className="aspect-[16/11] overflow-hidden relative">
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl text-[10px] font-black text-slate-900 uppercase tracking-widest">
                          Yangilik
                        </div>
                      </div>
                      <div className="p-10 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-6">
                          <Calendar size={14} className="text-brand-blue" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-tight mb-4">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8">
                          {item.desc}
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-brand-blue font-black text-sm">
                          Batafsil <ArrowRight size={16} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Newsletter/CTA */}
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-brand-blue rounded-[5rem] p-12 md:p-32 relative overflow-hidden text-center text-white shadow-[0_50px_100px_-30px_rgba(30,64,175,0.5)]">
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[1.1]">
                        Farzandingiz kelajagini <br className="hidden md:block" /> xavfsiz qo'llarga topshiring
                      </h2>
                      <p className="text-white/80 mb-14 text-xl md:text-2xl font-medium max-w-2xl mx-auto">Hozirda 2024-2025 o'quv yili uchun qabul davom etmoqda. O'z o'rningizni band qiling.</p>
                      <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-white text-brand-blue px-12 py-6 rounded-[2.5rem] font-black text-lg hover:bg-white/90 transition-all shadow-2xl active:scale-95">
                          Onlayn ariza
                        </button>
                        <button className="bg-brand-blue border-2 border-white/30 text-white px-12 py-6 rounded-[2.5rem] font-black text-lg hover:bg-white/10 transition-all active:scale-95">
                          Qabul shartlari
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  {/* Decorative background icon */}
                  <div className="absolute -top-10 -right-10 p-10 opacity-10 rotate-12">
                    <GraduationCap size={400} />
                  </div>
                </div>
              </div>
            </section>

            {/* Contact section is inherited from layout */}
            <section id="contact" className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div>
                    <span className="text-brand-blue font-black tracking-[0.3em] uppercase text-xs">Bog'laning</span>
                    <h2 className="text-5xl font-display font-black text-slate-900 mt-6 mb-10 leading-tight">Biz har doim yordamga <br /> tayyormiz</h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-10">
                      <div className="flex gap-6 items-start group">
                        <div className="bg-slate-50 p-5 rounded-3xl text-brand-blue shadow-sm border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                          <Users size={32} />
                        </div>
                        <div>
                          <h4 className="font-black text-xl mb-2 text-slate-900">Loyiha rahbari</h4>
                          <p className="text-slate-900 font-bold text-lg">Ergashova Muqaddas</p>
                          <a href="tel:+998881232226" className="text-slate-500 font-bold block hover:text-brand-blue transition-colors">+998 (88) 123-22-26</a>
                        </div>
                      </div>

                      <div className="flex gap-6 items-start group">
                        <div className="bg-slate-50 p-5 rounded-3xl text-brand-blue shadow-sm border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                          <MapPin size={32} />
                        </div>
                        <div>
                          <h4 className="font-black text-xl mb-2 text-slate-900">Manzilimiz</h4>
                          <p className="text-slate-500 font-medium leading-relaxed">Sirdaryo viloyati, Guliston shahri, <br /> Do'stlik ko'chasi, 45-uy</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-6 items-start group">
                        <div className="bg-slate-50 p-5 rounded-3xl text-brand-blue shadow-sm border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                          <Phone size={32} />
                        </div>
                        <div>
                          <h4 className="font-black text-xl mb-2 text-slate-900">Aloqa markazi</h4>
                          <a href="tel:+998672251212" className="text-slate-500 font-bold block hover:text-brand-blue transition-colors text-lg">+998 (67) 225-12-12</a>
                          <a href="tel:+998901234512" className="text-slate-500 font-bold block hover:text-brand-blue transition-colors text-lg">+998 (90) 123-45-12</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-4 bg-brand-blue/5 rounded-[4.5rem] blur-2xl group-hover:bg-brand-blue/10 transition-colors"></div>
                    <div className="bg-white rounded-[4rem] overflow-hidden min-h-[500px] border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                        alt="City Map" 
                        className="w-full h-full object-cover opacity-60 filter grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-brand-blue p-6 rounded-full text-white animate-bounce shadow-2xl relative">
                          <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-25"></div>
                          <MapPin size={40} fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl">
                        <h5 className="font-black text-slate-900 text-xl mb-2">12-Ijod Maktabi</h5>
                        <p className="text-sm text-slate-500 font-bold">Guliston shahar markazida, asosiy bekatlar yonida joylashgan.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-16 pb-20 border-bottom border-white/5">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-brand-blue p-2.5 rounded-xl text-white shadow-lg shadow-brand-blue/20">
                  <GraduationCap size={26} />
                </div>
                <h1 className="text-2xl font-display font-black">12-Maktab</h1>
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-10 font-medium">
                Sifatli ta'lim orqali millat kelajagini shakllantiramiz. Bizning har bir qadamimiz bilim va ma'rifat sari.
              </p>
              <div className="flex gap-5">
                {['telegram', 'instagram', 'facebook'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:translate-y-[-5px] transition-all duration-300">
                    <Globe size={20} className="text-slate-300" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black mb-10 text-xl tracking-tight">Tezkor havolalar</h4>
              <ul className="space-y-5 text-slate-400 text-base font-medium">
                <li><button onClick={() => handleNavClick('home', '#home')} className="hover:text-white hover:translate-x-2 transition-all">Siz uchun asosiy</button></li>
                <li><button onClick={() => handleNavClick('home', '#about')} className="hover:text-white hover:translate-x-2 transition-all">Biz haqimizda</button></li>
                <li><button onClick={() => handleNavClick('home', '#news')} className="hover:text-white hover:translate-x-2 transition-all">So'nggi yangiliklar</button></li>
                <li><button onClick={() => handleNavClick('events', '#events')} className="hover:text-white hover:translate-x-2 transition-all">Yutuqlarimiz</button></li>
                <li><button onClick={() => handleNavClick('home', '#contact')} className="hover:text-white hover:translate-x-2 transition-all">Bog'laning</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-10 text-xl tracking-tight">Bo'limlarimiz</h4>
              <ul className="space-y-5 text-slate-400 text-base font-medium">
                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all">Metodika xizmati</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all">Psixolog xonasi</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all">Elektron kutubxona</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all">Ilmiy to'garaklar</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all">Ijodiy studiya</a></li>
              </ul>
            </div>

            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
              <h4 className="font-black mb-8 text-xl tracking-tight">Ish vaqtimiz</h4>
              <ul className="space-y-6 text-slate-300 text-sm font-bold">
                <li className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                  <span>Dsh - Juma</span>
                  <span className="text-brand-green font-black">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                  <span>Shanba</span>
                  <span className="text-brand-blue font-black">08:00 - 13:00</span>
                </li>
                <li className="text-slate-500 font-bold flex gap-2 items-center italic">
                  <Clock size={16} /> Yakshanba dam olish kuni
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 text-sm font-bold">
              © {new Date().getFullYear()} Guliston shahar 12-sonli maktabi.
            </p>
            <div className="flex gap-10 text-slate-600 text-sm font-bold">
              <a href="#" className="hover:text-white transition-colors">Maxfiylik</a>
              <a href="#" className="hover:text-white transition-colors">Xavfsizlik</a>
              <a href="#" className="hover:text-white transition-colors">Cookie'lar</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
