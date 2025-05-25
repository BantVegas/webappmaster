"use client";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle } from "lucide-react";

export default function Spolupraca() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-teal-500/40 to-purple-600/50 backdrop-blur-2xl z-0" />
      <motion.section
        className="w-full flex flex-col items-center justify-center min-h-screen py-10 md:py-20 z-10 relative px-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white/30 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl px-4 xs:px-6 md:px-8 py-8 md:py-12 max-w-2xl w-full flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-fuchsia-600">
            Spolupráca
          </h1>
          <p className="text-base sm:text-md text-slate-800 mb-7 text-center max-w-lg">
            Máte záujem o spoluprácu? Stačí sa mi ozvať priamo! Rád si vypočujem vašu predstavu a navrhnem riešenie na mieru – od jednoduchých webstránok až po komplexné aplikácie a systémy.
          </p>
          {/* Kontakty */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 w-full mb-8">
            <div className="flex-1 flex flex-col items-center">
              <span className="text-lg font-semibold text-blue-800 mb-1">WebAppMaster</span>
              <a
                href="tel:+421950889523"
                className="flex items-center gap-2 text-base text-slate-800 hover:text-blue-600 transition underline"
              >
                <Phone className="w-5 h-5" />
                +421 950 889 523
              </a>
              <a
                href="mailto:webappmaster@webappmaster.sk"
                className="flex items-center gap-2 text-base text-slate-800 hover:text-fuchsia-600 transition underline"
              >
                <Mail className="w-5 h-5" />
                webappmaster@webappmaster.sk
              </a>
            </div>
            <div className="flex-1 flex flex-col items-center mt-6 sm:mt-0">
              <span className="text-lg font-semibold text-blue-800 mb-1">Kde pôsobím?</span>
              <span className="text-base text-slate-700">Celé Slovensko & online</span>
              <span className="text-base text-slate-700">Spolupráca aj so zahraničím 🇪🇺</span>
            </div>
          </div>
          <div className="w-full border-t border-white/20 my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-blue-700 mb-3">Prečo spolupracovať so mnou?</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Moderný a čistý dizajn
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Výkonný backend (Java, Next.js)
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Férová cena a osobný prístup
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Rýchla komunikácia a spoľahlivosť
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-fuchsia-700 mb-3">Čo viem ponúknuť?</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-fuchsia-500" />
                  Tvorba webstránok na mieru
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-fuchsia-500" />
                  Vývoj aplikácií a automatizácií
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-fuchsia-500" />
                  Konzultácie & poradenstvo
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-fuchsia-500" />
                  Dlhodobá podpora projektov
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
