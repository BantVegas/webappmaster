"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Zadanie a špecifikácia",
    desc: "Napíšete mi svoju predstavu alebo vyplníte dopytový formulár. Spoločne upresníme požiadavky a ciele.",
    icon: "📝",
  },
  {
    title: "2. Cenová ponuka a dohoda",
    desc: "Požiadavky ocením a obratom pošlem ponuku. Po schválení si potvrdíme rozsah a termín.",
    icon: "💶",
  },
  {
    title: "3. Návrh a vývoj",
    desc: "Navrhnem dizajn, začínam vývoj. Počas procesu spolu komunikujeme a dolaďujeme detaily.",
    icon: "💻",
  },
  {
    title: "4. Testovanie a nasadenie",
    desc: "Spoločne otestujeme. Po schválení nasadím web/apku do prevádzky a dám prístupy.",
    icon: "🚀",
  },
  {
    title: "5. Podpora a rozvoj",
    desc: "Som k dispozícii na ďalšie úpravy, konzultácie alebo rozšírenie projektu.",
    icon: "🤝",
  },
];

export default function AkoToFunguje() {
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
        className="w-full flex flex-col items-center justify-center min-h-screen py-16 md:py-20 z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white/30 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl px-4 md:px-8 py-8 md:py-10 max-w-md md:max-w-2xl w-full flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-fuchsia-600">
            Ako to funguje
          </h1>
          <p className="text-base md:text-lg text-slate-800 mb-6 text-center">
            Férový a prehľadný postup od zadania až po spustenie a podporu.
          </p>
          <ol className="space-y-5 md:space-y-8 w-full max-w-xl px-1">
            {steps.map((step, idx) => (
              <motion.li
                key={step.title}
                className="flex items-start gap-4 md:gap-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow p-4 md:p-6 border border-white/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
              >
                <span className="text-2xl md:text-4xl">{step.icon}</span>
                <div>
                  <div className="font-bold text-blue-700 mb-1 text-base md:text-lg">{step.title}</div>
                  <div className="text-slate-800 text-sm md:text-base">{step.desc}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </motion.section>
    </main>
  );
}

