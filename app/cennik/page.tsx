"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const webTypes = [
  { label: "Jednoduchá vizitka (do 3 strán)", price: 390 },
  { label: "Firemná stránka (do 6 strán)", price: 590 },
  { label: "Blog / Magazín", price: 690 },
  { label: "E-shop (do 20 produktov)", price: 990 },
];
const webOptions = [
  { label: "Redakčný systém (CMS)", price: 140 },
  { label: "SEO balík", price: 70 },
  { label: "Vlastný dizajn", price: 180 },
  { label: "Multijazyčnosť", price: 120 },
];

const appTypes = [
  { label: "Jednoduchá aplikácia (login, správa údajov)", price: 990 },
  { label: "Pokročilá (API, admin zóna, fakturácia)", price: 1790 },
  { label: "Plnohodnotná SaaS aplikácia", price: 2690 },
];
const appOptions = [
  { label: "Platobná brána", price: 200 },
  { label: "Napojenie na AI (chat, OCR, analýza)", price: 280 },
  { label: "Automatizácie (notifikácie, reporty)", price: 170 },
];

const mobileTypes = [
  { label: "Android alebo iOS (základná)", price: 1490 },
  { label: "Android + iOS (základná)", price: 1890 },
  { label: "Android + iOS (komplexná)", price: 2690 },
];
const mobileOptions = [
  { label: "Publikovanie na Google Play/App Store", price: 70 },
  { label: "Prepojenie s webom", price: 180 },
  { label: "Vlastný dizajn", price: 140 },
];

const aiTypes = [
  { label: "Základná automatizácia/API", price: 490 },
  { label: "Chatbot, AI reporting", price: 790 },
  { label: "OCR alebo analýza dokumentov", price: 890 },
];
const aiOptions = [
  { label: "Prepojenie s interným systémom", price: 170 },
  { label: "Rozšírené analytické funkcie", price: 220 },
];

export default function Cennik() {
  // Kalkulačka states
  const [web, setWeb] = useState(false);
  const [webType, setWebType] = useState<number | null>(null);
  const [webOpt, setWebOpt] = useState<number[]>([]);

  const [app, setApp] = useState(false);
  const [appType, setAppType] = useState<number | null>(null);
  const [appOpt, setAppOpt] = useState<number[]>([]);

  const [mobile, setMobile] = useState(false);
  const [mobileType, setMobileType] = useState<number | null>(null);
  const [mobileOpt, setMobileOpt] = useState<number[]>([]);

  const [ai, setAi] = useState(false);
  const [aiType, setAiType] = useState<number | null>(null);
  const [aiOpt, setAiOpt] = useState<number[]>([]);

  const [custom, setCustom] = useState("");
  const [comment, setComment] = useState("");

  // Výpočet ceny
  const total =
    (web ? (webType !== null ? webTypes[webType].price : 0) : 0) +
    (web ? webOpt.reduce((sum, idx) => sum + webOptions[idx].price, 0) : 0) +
    (app ? (appType !== null ? appTypes[appType].price : 0) : 0) +
    (app ? appOpt.reduce((sum, idx) => sum + appOptions[idx].price, 0) : 0) +
    (mobile ? (mobileType !== null ? mobileTypes[mobileType].price : 0) : 0) +
    (mobile ? mobileOpt.reduce((sum, idx) => sum + mobileOptions[idx].price, 0) : 0) +
    (ai ? (aiType !== null ? aiTypes[aiType].price : 0) : 0) +
    (ai ? aiOpt.reduce((sum, idx) => sum + aiOptions[idx].price, 0) : 0) +
    (custom ? Number(custom) : 0);

  // Utility na selectovanie options
  const handleCheck = (idxArr: number[], idx: number, set: (a: number[]) => void) => {
    set(idxArr.includes(idx) ? idxArr.filter(i => i !== idx) : [...idxArr, idx]);
  };

  // Prehľad zvolených možností
  function Summary() {
    return (
      <div className="bg-white/70 rounded-xl p-5 mb-6">
        <div className="font-bold mb-1">Vybrané služby:</div>
        <ul className="text-slate-700 text-sm list-disc ml-5 space-y-1">
          {web && (
            <>
              <li>Webstránka: <span className="font-medium">{webType !== null ? webTypes[webType].label : "Typ nevybraný"}</span></li>
              {webOpt.map(idx => (
                <li key={idx}>– {webOptions[idx].label}</li>
              ))}
            </>
          )}
          {app && (
            <>
              <li>Webová aplikácia: <span className="font-medium">{appType !== null ? appTypes[appType].label : "Typ nevybraný"}</span></li>
              {appOpt.map(idx => (
                <li key={idx}>– {appOptions[idx].label}</li>
              ))}
            </>
          )}
          {mobile && (
            <>
              <li>Mobilná aplikácia: <span className="font-medium">{mobileType !== null ? mobileTypes[mobileType].label : "Typ nevybraný"}</span></li>
              {mobileOpt.map(idx => (
                <li key={idx}>– {mobileOptions[idx].label}</li>
              ))}
            </>
          )}
          {ai && (
            <>
              <li>Automatizácia/AI: <span className="font-medium">{aiType !== null ? aiTypes[aiType].label : "Typ nevybraný"}</span></li>
              {aiOpt.map(idx => (
                <li key={idx}>– {aiOptions[idx].label}</li>
              ))}
            </>
          )}
          {custom && (
            <li>Špeciálna požiadavka: <span className="font-medium">{Number(custom).toLocaleString("sk-SK")} €</span></li>
          )}
          {!web && !app && !mobile && !ai && !custom && (
            <li>– Žiadna služba nevybraná –</li>
          )}
        </ul>
        {comment && (
          <div className="mt-2">
            <div className="font-bold">Poznámka:</div>
            <div className="text-slate-600">{comment}</div>
          </div>
        )}
      </div>
    );
  }

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
        className="w-full flex flex-col items-center justify-center min-h-screen py-20 z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white/30 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl px-8 py-10 max-w-3xl w-full flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-fuchsia-600">
            Cenník a kalkulačka
          </h1>
          <p className="text-md text-slate-800 mb-6 text-center">
            Vyberte si služby a získajte orientačnú cenu ihneď.<br />
            Pre presnú ponuku stačí odoslať dopyt s vašimi požiadavkami.
          </p>
          <form className="w-full grid md:grid-cols-2 gap-7 mb-8">
            {/* Webstránka */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow p-5 border border-white/30">
              <label className="flex gap-3 items-center font-bold text-blue-800 mb-2">
                <input type="checkbox" checked={web} onChange={e => setWeb(e.target.checked)} className="accent-blue-600 w-5 h-5" />
                Webstránka
              </label>
              {web && (
                <>
                  <div className="mb-2">
                    {webTypes.map((t, idx) => (
                      <label key={t.label} className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={webType === idx}
                          onChange={() => setWebType(idx)}
                          name="webType"
                          className="accent-blue-600"
                        />
                        {t.label} <span className="text-xs text-slate-500">(+{t.price} €)</span>
                      </label>
                    ))}
                  </div>
                  <div className="mb-1">
                    {webOptions.map((opt, idx) => (
                      <label key={opt.label} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={webOpt.includes(idx)}
                          onChange={() => handleCheck(webOpt, idx, setWebOpt)}
                          className="accent-blue-500"
                        />
                        {opt.label} <span className="text-xs text-slate-500">(+{opt.price} €)</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* Webová aplikácia */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow p-5 border border-white/30">
              <label className="flex gap-3 items-center font-bold text-blue-800 mb-2">
                <input type="checkbox" checked={app} onChange={e => setApp(e.target.checked)} className="accent-fuchsia-600 w-5 h-5" />
                Webová aplikácia
              </label>
              {app && (
                <>
                  <div className="mb-2">
                    {appTypes.map((t, idx) => (
                      <label key={t.label} className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={appType === idx}
                          onChange={() => setAppType(idx)}
                          name="appType"
                          className="accent-fuchsia-600"
                        />
                        {t.label} <span className="text-xs text-slate-500">(+{t.price} €)</span>
                      </label>
                    ))}
                  </div>
                  <div className="mb-1">
                    {appOptions.map((opt, idx) => (
                      <label key={opt.label} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={appOpt.includes(idx)}
                          onChange={() => handleCheck(appOpt, idx, setAppOpt)}
                          className="accent-fuchsia-500"
                        />
                        {opt.label} <span className="text-xs text-slate-500">(+{opt.price} €)</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* Mobilná aplikácia */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow p-5 border border-white/30">
              <label className="flex gap-3 items-center font-bold text-blue-800 mb-2">
                <input type="checkbox" checked={mobile} onChange={e => setMobile(e.target.checked)} className="accent-teal-600 w-5 h-5" />
                Mobilná aplikácia
              </label>
              {mobile && (
                <>
                  <div className="mb-2">
                    {mobileTypes.map((t, idx) => (
                      <label key={t.label} className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={mobileType === idx}
                          onChange={() => setMobileType(idx)}
                          name="mobileType"
                          className="accent-teal-600"
                        />
                        {t.label} <span className="text-xs text-slate-500">(+{t.price} €)</span>
                      </label>
                    ))}
                  </div>
                  <div className="mb-1">
                    {mobileOptions.map((opt, idx) => (
                      <label key={opt.label} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={mobileOpt.includes(idx)}
                          onChange={() => handleCheck(mobileOpt, idx, setMobileOpt)}
                          className="accent-teal-500"
                        />
                        {opt.label} <span className="text-xs text-slate-500">(+{opt.price} €)</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* Automatizácia & AI */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow p-5 border border-white/30">
              <label className="flex gap-3 items-center font-bold text-blue-800 mb-2">
                <input type="checkbox" checked={ai} onChange={e => setAi(e.target.checked)} className="accent-purple-600 w-5 h-5" />
                Automatizácia & AI
              </label>
              {ai && (
                <>
                  <div className="mb-2">
                    {aiTypes.map((t, idx) => (
                      <label key={t.label} className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={aiType === idx}
                          onChange={() => setAiType(idx)}
                          name="aiType"
                          className="accent-purple-600"
                        />
                        {t.label} <span className="text-xs text-slate-500">(+{t.price} €)</span>
                      </label>
                    ))}
                  </div>
                  <div className="mb-1">
                    {aiOptions.map((opt, idx) => (
                      <label key={opt.label} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={aiOpt.includes(idx)}
                          onChange={() => handleCheck(aiOpt, idx, setAiOpt)}
                          className="accent-purple-500"
                        />
                        {opt.label} <span className="text-xs text-slate-500">(+{opt.price} €)</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
          </form>
          {/* Špeciálne požiadavky a komentár */}
          <div className="w-full flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <label className="block text-slate-800 text-sm mb-1">Špeciálna požiadavka (EUR):</label>
              <input
                type="number"
                min={0}
                value={custom}
                onChange={e => setCustom(e.target.value.replace(/[^0-9]/g, ""))}
                className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 w-full"
                placeholder="Napr. ďalší modul, špeciálny dizajn..."
              />
            </div>
            <div className="flex-1">
              <label className="block text-slate-800 text-sm mb-1">Komentár / špecifikácia:</label>
              <input
                type="text"
                value={comment}
                onChange={e => setComment(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 w-full"
                placeholder="Doplňte, čo potrebujete..."
              />
            </div>
          </div>
          {/* Súhrn & výsledok */}
          <Summary />
          <div className="flex flex-col items-center mb-4">
            <span className="text-xl font-bold text-blue-700">
              Orientačná cena: <span className="text-3xl">{total.toLocaleString("sk-SK")} €</span>
            </span>
            <span className="text-sm text-slate-700 mt-1">(Konečná cena závisí od detailov a rozsahu projektu)</span>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
