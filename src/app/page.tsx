"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Animácie pre sekcie (fade-in s paralax jemným pohybom)
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glass overlay cez celu stranku */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-teal-500/40 to-purple-600/50 backdrop-blur-2xl z-0" />

      {/* HERO sekcia */}
      <motion.section
        className="flex flex-col items-center justify-center py-16 md:py-32 text-center relative z-10 px-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl xs:text-4xl md:text-7xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-fuchsia-600 drop-shadow-lg"
          initial={{ letterSpacing: "-.03em", scale: 0.97 }}
          animate={{ letterSpacing: "0.01em", scale: 1.02 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          WebApp
          <span className="text-blue-300 drop-shadow-[0_2px_18px_rgba(34,211,238,0.55)]">
            Master
          </span>
        </motion.h1>
        <motion.p
          className="text-base xs:text-lg md:text-2xl max-w-lg mb-7 text-slate-100 font-medium drop-shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Tvorba moderných webov, aplikácií a systémov na mieru.<br />
          Webdesigner & Java Developer s dôrazom na detail, výkon a efektivitu.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 320 }}
        >
          <Button
            size="lg"
            asChild
            className="text-base xs:text-lg font-bold shadow-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-blue-400 transition-all duration-300"
          >
            <a href="/spolupraca">Chcem spoluprácu</a>
          </Button>
        </motion.div>
      </motion.section>

      {/* Služby */}
      <motion.section
        className="py-12 md:py-20 flex justify-center relative z-10 px-3"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-0 sm:px-4">
          <motion.h2
            className="text-2xl xs:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-white/90 drop-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Moje služby
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                title: "Webdizajn na mieru",
                text: "Moderné, responzívne a rýchle webstránky.",
                icon: "🌐",
              },
              {
                title: "Webové a Mobilné aplikácie",
                text: "Komplexné riešenia v Java, Next.js, React, Tailwind a vývoj mobilných aplikácií (Android/iOS, React Native, Expo).",
                icon: "🖥️",
              },
              {
                title: "Automatizácie a AI",
                text: "Automatizované systémy, napojenie na AI a API integrácie.",
                icon: "🤖",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={sectionVariant}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 8px 32px 0 rgba(31,38,135,0.33)",
                  y: -8,
                }}
                className="group p-6 md:p-8 bg-white/20 backdrop-blur-2xl border border-white/25 shadow-2xl rounded-3xl text-center transition-all duration-300 hover:bg-white/35 cursor-pointer"
              >
                <div className="text-3xl xs:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-slate-800 group-hover:text-fuchsia-600 transition">
                  {item.title}
                </h3>
                <p className="text-slate-700 group-hover:text-blue-700 transition">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Referencie */}
      <motion.section
        className="py-12 md:py-20 relative z-10 px-3"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-0 sm:px-4">
          <motion.h2
            className="text-2xl xs:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-white/90 drop-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Referencie
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              {
                name: "dietnyplan.sk",
                desc: "Plne automatizovaný predaj diétneho plánu (Next.js + Java + Stripe + Railway).",
              },
              {
                name: "universalkalkulacka.sk",
                desc: "Dynamický systém kalkulačiek pre viacero krajín s custom dizajnom a SEO optimalizáciou.",
              },
              {
                name: "basecamp.com",
                desc: "Online nástroj pre projektový manažment používaný firmami po celom svete. Postavené na Ruby on Rails a Next.js. Zamerané na spoluprácu, todo-listy a efektívne riadenie tímov.",
              },
              {
                name: "Sleep Monitor",
                desc: "Obľúbená mobilná aplikácia na sledovanie a analýzu spánku, monitorovanie chrápania a zaznamenávanie spánkových cyklov. Dostupná pre Android aj iOS. Vysoké hodnotenie, intuitívny dizajn a bohaté analytické funkcie.",
              },
            ].map((ref, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={sectionVariant}
                whileHover={{
                  scale: 1.04,
                  y: -5,
                  boxShadow: "0 4px 24px 0 rgba(31,38,135,0.25)",
                }}
                className="bg-white/30 backdrop-blur-2xl border border-white/25 shadow-xl rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:bg-white/50 hover:border-fuchsia-400 focus:outline-none"
              >
                <span className="font-semibold text-blue-600 mb-2 text-lg underline underline-offset-2">
                  {ref.name}
                </span>
                <span className="text-slate-800 mb-2">{ref.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* O mne */}
      <motion.section
        className="py-12 md:py-20 flex justify-center relative z-10 px-3"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-0 sm:px-4 flex flex-col items-center">
          <motion.h2
            className="text-2xl xs:text-3xl md:text-4xl font-bold mb-6 text-white/90 drop-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            O mne
          </motion.h2>
          <motion.p
            className="text-base xs:text-lg md:text-xl text-slate-200 max-w-2xl text-center bg-white/20 px-4 md:px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 shadow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Volám sa Martin (alias Bant). Som skúsený webdesigner a Java developer, ktorý rád prepája čistý dizajn s výkonným backendom. Mám za sebou množstvo úspešných projektov, kde bol dôležitý nielen pekný vzhľad, ale hlavne funkčnosť a výkon.
          </motion.p>
        </div>
      </motion.section>

      {/* Kontakt */}
      <motion.section
        className="py-12 md:py-20 flex justify-center relative z-10 px-3"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-0 sm:px-4 flex flex-col items-center">
          <motion.h2
            className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4 text-white/90 drop-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Kontakt
          </motion.h2>
          <motion.p
            className="mb-8 text-slate-200"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Napíš mi na{" "}
            <a
              href="mailto:webappmaster@webappmaster.sk"
              className="text-blue-200 underline hover:text-fuchsia-400 transition"
            >
              info@webappmaster.sk
            </a>{" "}
            alebo použite formulár nižšie.
          </motion.p>
          <motion.form
            className="w-full max-w-lg bg-white/30 backdrop-blur-2xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl grid gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <input
              className="p-3 border border-white/30 bg-white/40 backdrop-blur-xl rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              type="text"
              placeholder="Meno"
              required
            />
            <input
              className="p-3 border border-white/30 bg-white/40 backdrop-blur-xl rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              type="email"
              placeholder="E-mail"
              required
            />
            <textarea
              className="p-3 border border-white/30 bg-white/40 backdrop-blur-xl rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Správa"
              rows={4}
              required
            />
            <Button
              type="submit"
              size="lg"
              className="font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white shadow-lg hover:from-blue-500 hover:to-fuchsia-500 transition-all"
            >
              Odoslať
            </Button>
          </motion.form>
        </div>
      </motion.section>
    </main>
  );
}

