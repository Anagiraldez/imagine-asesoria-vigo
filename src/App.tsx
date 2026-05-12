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

      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4">

          {/* Contenedor del Logo e Identidad */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* El Logo Pequeño */}
            <img
              src="logo.png"
              alt="Logo imAGine"
              className="h-30 w-auto object-contain"
            />

            {/* Texto de Marca */}
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-primary">
                Im<span className="text-accent">AG</span>ine
              </span>
              <h1 className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                all your rights by ana
              </h1>
            </div>
          </div>

          {/* Menú Desktop */}
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
              className="flex flex-col items-start lg:pt-6 lg:border-r lg:border-gray-300 lg:pr-16"
            >
              <div className="mb-4 text-[10px] md:text-[18px] font-bold tracking-[0.3em] uppercase text-accent">
                Asesoramiento Jurídico
              </div>
              <h1 className="mb-6 md:mb-8 font-serif text-3xl font-bold leading-tight text-primary md:text-5xl xl:text-6xl break-words">
                Derecho Laboral, Seguridad Social y Extranjería
              </h1>
              <p className="mb-8 md:mb-10 max-w-lg border-l-2 border-accent pl-6 text-sm leading-relaxed text-gray-600">
                Para personas trabajadoras, empresas y personas extranjeras.
                <br />Soluciones claras, eficaces y adaptadas a cada caso.
              </p>

              <div className="mb-10 md:mb-12 space-y-4 md:space-y-5 text-justify">
                {[
                  "Resolución de conflictos de trabajo para recuperar su equilibrio profesional.",
                  "Gestión estratégica de su futuro económico ante trámites de la Seguridad Social.",
                  "Soluciones en residencia y nacionalidad para su estabilidad en España."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <p className="text-[13px] md:text-[14px] font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/34613032762?text=Hola,%20me%20gustaría%20solicitar%20una%20consulta%20personalizada."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-8 w-max bg-[#B8860B] px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-white shadow-xl shadow-yellow-900/20 transition-all hover:bg-[#25D366] hover:shadow-2xl active:scale-95"
              >
                Enviar mensaje
              </a>
            </motion.div>

            {/* Lado Derecho: Identidad y Presentación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="relative w-64 mx-auto overflow-hidden rounded-sm border-[6px] md:border-[12px] border-white shadow-2xl">
                <img
                  src="ana.jpg"
                  alt="Tu Fotografía Profesional"
                  className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              <div className="mt-6 md:mt-8 w-full bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                  <div className="h-px w-8 md:w-10 bg-accent opacity-50" />
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-accent">Detrás de ImAGine</span>
                </div>
                <p className="text-[12.5px] md:text-[13.5px] font-medium leading-[1.6] md:leading-[1.8] text-gray-600 italic text-justify">

                  <p>
                    Soy Ana Giráldez, Graduada Social dedicada a la defensa integral en Derecho Laboral,
                    Seguridad Social y Extranjería. Mi enfoque combina la solvencia técnica con una
                    estrategia clara para resolver conflictos y asegurar la máxima protección de sus intereses.
                  </p>
                  <br />
                  <p>
                    Trabajo para personas trabajadoras, autónomos y empresas, transformando la
                    complejidad legal en soluciones directas. Creo en un asesoramiento de confianza
                    donde la precisión profesional siempre va de la mano de la cercanía humana.
                  </p>
                  <br />
                  <p>
                    Si busca resolver sus desafíos con honestidad y eficacia, estaré encantada
                    de estudiar su caso personalmente.
                  </p>


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
                desc: "Defensa en Materia de Despidos, Impugnación de Sanciones, Reclamaciones de Cantidad (Salarios, Horas Extras y Pluses), Acoso Laboral (Mobbing), Conciliación de la vida Personal, Familiar y Laboral, Vacaciones, Convenios Colectivos, Permisos, Modificaciones Sustanciales de Condiciones de Trabajo, Movilidad Geográfica, Teletrabajo, Representantes Legales de las Personas Trabajadoras, Vulneración de Derechos Fundamentales, etc."
              },

              {
                id: "02.",
                title: "Seguridad Social",
                desc: "Impugnación de Altas Médicas, Reconocimiento de Incapacidad Permanente (Parcial,Total, Absoluta y Gran Invalidez), Determinación de Contingencia, Pensiones de Jubilación, Viudedad, Orfandad y Pensión a Favor de Familiares, Subsidios, Desempleo, Complemento Brecha Género, Reclamación Daños y Perjuicios, Nacimiento y Cuidado Menor, Riesgo durante Embarazo y Lactancia, Permisos Cuidado y Conciliación, Prestación Cuidado Menores con Cáncer o Enfermedad Grave, etc.  "
              },
              {
                id: "03.",
                title: "Extranjería",
                desc: "REGULARIZACIÓN EXTRAORDINARIA 2026 (¡PLAZO ABIERTO HASTA EL 30 DE JUNIO!), Autorizaciones de Trabajo y Estancia, Residencia de Larga Duración, Residencia no Lucrativa, Familiar de Ciudadano de la UE, Nacionalidad, Reagrupación Familiar, Gestión de Arraigos (Social, Familiar, Laboral y para la Formación), Residencias por Circunstancias Excepcionales (Asilo y Razones Humanitarias),  "
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-justify"
              >
                <div className="mb-4 font-serif text-4xl italic text-accent opacity-50">{benefit.id}</div>
                <h3 className="mb-4 text-s font-bold tracking-[0.2em] uppercase text-primary">{benefit.title}</h3>
                <div className="mx-auto mb-6 h-px w-10 bg-accent/30" />
                <p className="text-[15px] leading-relaxed text-gray-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contacto"
              className="inline-block bg-[#B8860B] px-10 py-4 text-[15px] font-bold tracking-widest uppercase text-white transition-all hover:bg-primary hover:text-white"
            >
              ¿No encuentra lo que busca? Envíe su duda.
            </a>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="authority" className="bg-blue-200 py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24">

            <div className="flex items-center gap-4">

              <span className="text-[#22c55e] flex items-center justify-center">



                {/* Teléfono verde */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
              </span>

              <div className="h-10 w-px bg-black" />
              <span className="text-[18px] font-bold tracking-[0.3em] uppercase text-blue">(+34) 613 032 762 <br />Consultas que no pueden esperar</span>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) */}
      <section id="testimonios" className="bg-[#F9F9F9] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary"> Valoraciones</h2>
            <div className="mx-auto h-0.5 w-12 bg-accent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 text-justify">
            {[
              {
                name: "Déborah Torres",
                role: "Autónoma (reseña Google)",
                img: "https://picsum.photos/seed/face1/200/200",
                quote: "Una profesional de 10. Cuando tienes que enfrentarte a temas laborales, Seguridad Social o trámites legales, muchas veces vas perdida y sin entender prácticamente nada… y Ana tiene una capacidad increíble para explicártelo todo de forma clara, cercana y con muchísima paciencia. Se nota que le importa de verdad que entiendas cada paso. Y si algo no te queda claro, te lo vuelve a explicar las veces que haga falta, siempre con cariño y una tranquilidad que se agradece muchísimo en situaciones que normalmente generan estrés y agobio. Además de ser una gran profesional, su trato humano es inmejorable. Te sientes acompañada, escuchada y en buenas manos desde el primer momento. Totalmente recomendable."
              },
              {
                name: "Carlos Ruiz",
                role: "Incapacidad Permanente",
                img: "https://picsum.photos/seed/face2/200/200",
                quote: "Logré mi incapacidad permanente después de años. Buen conocimiento de la Seguridad Social y trato insuperable."
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
              <div className="mb-4 text-[14px] md:text-[18px] font-bold tracking-[0.3em] uppercase text-accent">Contacto</div>
              <h2 className="mb-6 md:mb-8 font-serif text-2xl md:text-4xl font-bold text-primary">¿Hablamos?</h2>
              <p className="text-justify mb-10 md:mb-12 text-sm leading-relaxed text-gray-500">Cada caso es único y merece una atención personalizada. Póngase en contacto para evaluar su situación jurídica con total confidencialidad.</p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-accent flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Email</p>
                    <p className="text-sm font-semibold text-primary break-all">anaggsocial@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Teléfono</p>
                    <p className="text-sm font-semibold text-primary">+34 613 032 762</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Despacho</p>
                    <p className="text-sm font-semibold text-primary">C/República Argentina 2, piso 3º, of. 32. Vigo-Pontevedra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Horario</p>
                    <p className="text-sm font-semibold text-primary">De Lunes a Viernes</p>
                    <p className="text-sm text-gray-700">9:00 a 14:00 horas</p>
                    <br />
                    <p className="text-sm text-gray-700">🚨 Para su tranquilidad, atiendo fuera del horario habitual, ofreciéndole asistencia telefónica o reuniones presenciales según su necesidad.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F7E7CE] p-9 md:p-10  shadow-xl">
              <form className="grid gap-5 md:gap-6">
                <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Nombre</label>
                    <input type="text" className="border-b border-gray-400 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Email</label>
                    <input type="email" className="border-b border-gray-400 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Seleccionar especialidad de interés</label>
                  <select className="border-b border-gray-400 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent appearance-none">
                    <option>Derecho Laboral</option>
                    <option>Seguridad Social</option>
                    <option>Extranjería</option>
                    <option>Otros Asuntos</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Mensaje</label>
                  <textarea rows={3} placeholder="Escriba su consulta aquí..." className="border-b border-gray-400 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent resize-none"></textarea>
                </div>
                <button type="submit" className="mt-4 w-fit px-10 mx-auto bg-[#1B263B] py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white shadow-xl shadow-blue-950/20 transition-all hover:bg-navy-dark">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call Section */}
      <section className="bg-blue-200 py-10 md:py-10 text-blue">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl leading-tight">ImAGine un futuro sin interrogantes.</h2>
          <p className="mb-4 md:mb-12 text-[11px] md:text-[17px] font-bold tracking-[0.3em] uppercase text-accent">Reserve su consulta de asesoramiento</p>
           <a
                href="https://wa.me/34613032762?text=Hola,%20me%20gustaría%20solicitar%20una%20consulta%20personalizada."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-8 w-max bg-[#B8860B] px-6 md:px10 py-3 md:py-5 text-[12px] md:text-[14px] font-bold  uppercase text-white shadow-xl shadow-yellow-900/20 transition-all hover:bg-[#25D366] hover:shadow-2xl active:scale-95"
              >
              Necesito una cita
              </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-200 py-12 text-[10px] font-medium tracking-[0.1em] uppercase text-gray-500">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-8 border-t-2 border-blue pt-3 md:flex-row">

            <div className="flex items-center gap-3">

    

              {/* RIGHTS*/}
              <p className="font-bold text-blue tracking-widest">ALL YOUR RIGHTS</p>
            </div>

            <div className="flex gap-10">
              <a
                href="/imagine-asesoramiento/politica.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] text-[11px]"
              >
                Aviso Legal y Política de Privacidad
              </a>
            </div>

            <p>© 2026 imAGine. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
