/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="app-container" className="min-h-screen bg-white font-sans text-primary">
      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
              <span className="font-serif text-xl font-bold text-accent">I</span>
            </div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Imagine <span className="font-light text-accent">Asesoramiento</span></span>
          </div>
          
          <div className="hidden items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase md:flex">
            <a href="#hero" className="text-accent hover:text-accent-hover transition-colors">Inicio</a>
            <a href="#beneficios" className="text-primary hover:text-accent transition-colors">Servicios</a>
            <a href="#testimonios" className="text-primary hover:text-accent transition-colors">Experiencia</a>
            <a href="#contacto" className="border-b-2 border-accent pb-1 text-primary hover:text-accent transition-all">
              Contacto
            </a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-gray-100 bg-white md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-6 px-6 py-8 text-[11px] font-bold tracking-widest uppercase">
                <a href="#hero" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                <a href="#testimonios" onClick={() => setIsMenuOpen(false)}>Experiencia</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-accent">
                  Contacto
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-[#F4F4F4] pb-16 pt-28 lg:pb-32 lg:pt-48 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Lado Izquierdo: Propuesta de Valor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:pt-6"
            >
              <div className="mb-4 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
                Asesoramiento Jurídico Premium
              </div>
              <h1 className="mb-6 md:mb-8 font-serif text-3xl font-bold leading-tight text-primary md:text-5xl xl:text-6xl break-words">
                Especialista en Derecho Laboral, Seguridad Social y Extranjería
              </h1>
              <p className="mb-8 md:mb-10 max-w-lg border-l-2 border-accent pl-6 text-sm leading-relaxed text-gray-600">
                Asesoramiento jurídico profesional para trabajadores, empresas y personas extranjeras, con soluciones claras, eficaces y adaptadas a cada caso.
              </p>
              
              <div className="mb-10 md:mb-12 space-y-4 md:space-y-5 text-balance">
                {[
                  "Defensa experta en conflictos laborales y despidos.",
                  "Gestión integral de prestaciones y trámites de seguridad social.",
                  "Soluciones ágiles en residencia y nacionalidad."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <p className="text-[13px] md:text-[14px] font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <a 
                href="#contacto"
                className="w-max bg-primary px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white shadow-xl shadow-blue-950/20 transition-all hover:bg-navy-dark hover:shadow-2xl active:scale-95"
              >
                Solicita tu consulta personalizada
              </a>
            </motion.div>

            {/* Lado Derecho: Identidad y Presentación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="relative w-full overflow-hidden rounded-sm border-[6px] md:border-[12px] border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Tu Fotografía Profesional" 
                  className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <div className="mt-6 md:mt-8 w-full bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                  <div className="h-px w-8 md:w-10 bg-accent opacity-50" />
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-accent">Su Asesora de Confianza</span>
                </div>
                <p className="text-[12.5px] md:text-[13.5px] font-medium leading-[1.6] md:leading-[1.8] text-gray-600 italic">
                  Con más de quince años de trayectoria, mi compromiso es transformar la práctica jurídica en una experiencia de absoluta distinción. Mi metodología se fundamenta en el rigor técnico y una sensibilidad humana genuina, comprendiendo que tras cada consulta existe un proyecto vital que proteger. Lidero defensas estratégicas garantizando seguridad jurídica excepcional para empresas y particulares. Mi labor es ofrecerle claridad y eficacia contrastada en cada etapa de su proceso. Le invito a un asesoramiento donde la excelencia es nuestro estándar diario de actuación ética. Juntos, aseguraremos que sus derechos sean respetados con la máxima dedicación que merece.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 md:mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                id: "01.",
                title: "Derecho Laboral",
                desc: "Defensa experta en despidos, EREs, reclamaciones de cantidad y negociación colectiva con un enfoque estratégico."
              },
              {
                id: "02.",
                title: "Seguridad Social",
                desc: "Tramitación integral de pensiones, jubilación e incapacidades gestionadas con éxito ante la administración."
              },
              {
                id: "03.",
                title: "Extranjería",
                desc: "Soluciones ágiles en residencia, nacionalidad y regularización, eliminando la complejidad burocrática."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 font-serif text-3xl italic text-accent opacity-50">{benefit.id}</div>
                <h3 className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-primary">{benefit.title}</h3>
                <div className="mx-auto mb-6 h-px w-10 bg-accent/30" />
                <p className="text-[13px] leading-relaxed text-gray-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#contacto"
              className="inline-block border border-primary px-10 py-4 text-[11px] font-bold tracking-widest uppercase text-primary transition-all hover:bg-primary hover:text-white"
            >
              Consultar servicios detallados
            </a>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="authority" className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24">
            <div className="flex items-center gap-4">
              <span className="font-serif text-4xl font-bold text-accent">98%</span>
              <div className="h-8 w-px bg-white/20" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">Casos<br/>Resueltos</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-4xl font-bold text-accent">+500</span>
              <div className="h-8 w-px bg-white/20" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">Clientes<br/>Atendidos</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-4xl font-bold text-accent">24h</span>
              <div className="h-8 w-px bg-white/20" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">Atención<br/>Preferente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) */}
      <section id="testimonios" className="bg-[#F9F9F9] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary">Testimonios Seleccionados</h2>
            <div className="mx-auto h-0.5 w-12 bg-accent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                name: "Ana Martínez",
                role: "Emprendedora",
                img: "https://picsum.photos/seed/face1/200/200",
                quote: "Excelente trato y profesionalidad en mi proceso de nacionalidad. Siempre disponible para resolver dudas con una claridad excepcional."
              },
              {
                name: "Carlos Ruiz",
                role: "Incapacidad Permanente",
                img: "https://picsum.photos/seed/face2/200/200",
                quote: "Lograron mi incapacidad permanente después de años de lucha. Su conocimiento de la Seguridad Social es realmente insuperable."
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 bg-white p-7 md:p-10 border border-gray-100 shadow-sm md:flex-row md:items-center"
              >
                <img src={t.img} alt={t.name} className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-accent shadow-sm object-cover" />
                <div>
                  <p className="mb-4 text-sm italic leading-relaxed text-gray-600">"{t.quote}"</p>
                  <h4 className="text-[11px] font-bold tracking-widest uppercase text-primary">{t.name}</h4>
                  <p className="text-[10px] font-medium text-accent uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-accent">Contacto Directo</div>
              <h2 className="mb-6 md:mb-8 font-serif text-3xl md:text-4xl font-bold text-primary">Iniciemos su defensa</h2>
              <p className="mb-10 md:mb-12 text-sm leading-relaxed text-gray-500">Cada caso es único y merece una atención personalizada. Póngase en contacto para evaluar su situación jurídica con total confidencialidad.</p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-accent flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Email</p>
                    <p className="text-sm font-semibold text-primary break-all">prestigio@imagineasesoramiento.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Teléfono</p>
                    <p className="text-sm font-semibold text-primary">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Despacho</p>
                    <p className="text-sm font-semibold text-primary">C/ Velázquez, 100, 4º Derecha, Madrid</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FBFBF9] p-7 md:p-10 border border-gray-100 shadow-xl">
              <form className="grid gap-5 md:gap-6">
                <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Nombre Completo</label>
                    <input type="text" className="border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Email</label>
                    <input type="email" className="border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Especialidad de Interés</label>
                  <select className="border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent appearance-none">
                    <option>Derecho Laboral</option>
                    <option>Seguridad Social</option>
                    <option>Extranjería</option>
                    <option>Otros Asuntos</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Mensaje</label>
                  <textarea rows={3} className="border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent resize-none"></textarea>
                </div>
                <button type="submit" className="mt-4 bg-primary py-5 text-[11px] font-bold tracking-[0.2em] uppercase text-white shadow-xl shadow-blue-950/20 transition-all hover:bg-navy-dark">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call Section */}
      <section className="bg-navy-dark py-20 md:py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold md:text-5xl leading-tight">Proteja sus derechos con asesoramiento experto</h2>
          <p className="mb-10 md:mb-12 text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Primera consulta de evaluación disponible</p>
          <a 
            href="#contacto"
            className="inline-block bg-accent px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-primary shadow-2xl transition-all hover:scale-105 hover:bg-accent-hover active:scale-95"
          >
            Solicitar Consulta Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark py-12 text-[10px] font-medium tracking-[0.1em] uppercase text-gray-500">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
                <span className="font-serif text-lg font-bold text-primary">I</span>
              </div>
              <p className="font-bold text-white tracking-widest">Imagine Asesoramiento</p>
            </div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-accent transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
            </div>
            <p>© 2026 Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
