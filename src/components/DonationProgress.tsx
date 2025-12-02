import { motion } from 'framer-motion';
import { FaDonate, FaQrcode, FaCopy, FaCheckCircle, FaRocket} from 'react-icons/fa';
import { useLanguage } from './LanguageUtils';
import { useState } from 'react';
import QRCode from 'react-qr-code';

interface Translations {
  [key: string]: {
    title: string;
    description: string;
    targetAmount: string;
    donateButton: string;
    copyButton: string;
    copied: string;
    scanQr: string;
    or: string;
    bankTransfer: string;
    purpose: string;
    thankYou: string;
  };
}

const translations: Record<string, Translations[keyof Translations]> = {
  EN: {
    title: 'Support Our Team',
    description: 'Help us reach our goal for the tournament in Lisbon!',
    targetAmount: 'Our Goal',
    donateButton: 'Donate Now',
    copyButton: 'Copy',
    copied: 'Copied!',
    scanQr: 'Scan QR Code',
    or: 'or',
    bankTransfer: 'Bank Transfer',
    purpose: 'Charitable donation for rugby team',
    thankYou: 'Thank you for your support!'
  },
  UA: {
    title: 'Підтримайте нашу команду',
    description: 'Допоможіть нам досягти мети для участі в турнірі у Португалії!',
    targetAmount: 'Наша мета',
    donateButton: 'Підтримати',
    copyButton: 'Копіювати',
    copied: 'Скопійовано!',
    scanQr: 'Сканувати QR-код',
    or: 'або',
    bankTransfer: 'Банківський переказ',
    purpose: 'Благодійний внесок для регбійної команди',
    thankYou: 'Дякуємо за вашу підтримку!'
  },
  HUN: {
    title: 'Támogasd csapatunkat',
    description: 'Segíts nekünk elérni a célunkat a lisbon versenyre!',
    targetAmount: 'Célunk',
    donateButton: 'Támogatás',
    copyButton: 'Másolás',
    copied: 'Másolva!',
    scanQr: 'QR-kód szkennelése',
    or: 'vagy',
    bankTransfer: 'Banki átutalás',
    purpose: 'Adomány a rögbi csapat támogatására',
    thankYou: 'Köszönjük a támogatásodat!'
  }
};

const DonationProgress = () => {
  const { language = 'EN' } = useLanguage();
  const [isCopied, setIsCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const t = translations[language] || translations.EN;

  const targetAmount = 13000;
  const monobankUrl = 'https://send.monobank.ua/jar/UJgAkkC1Q';
  const cardNumber = '4874 1000 2960 8406';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <div className="relative group">
        {/* Subtle Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-950/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/20 transition-all duration-500">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <motion.div
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5}}
                  className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-4 py-1.5"
                >
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wide">
                    {language === 'UA' ? 'Благодійна ініціатива' : language === 'EN' ? 'Charity Initiative' : 'Jótékonysági kezdeményezés'}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: 0.1}}
                  className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight"
                >
                  {t.title}
                </motion.h2>

                <motion.p
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: 0.2}}
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  {t.description}
                </motion.p>
              </div>

              {/* Target Amount Card */}
              <motion.div
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.3}}
                className="relative group/amount"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-xl blur opacity-0 group-hover/amount:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-yellow-500/5 via-amber-500/5 to-yellow-500/5 backdrop-blur-sm p-5 rounded-xl border border-yellow-400/20 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-300/80 font-medium text-xs uppercase tracking-wider mb-1">{t.targetAmount}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                          {formatNumber(targetAmount)}
                        </span>
                        <span className="text-2xl font-bold text-yellow-300">€</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center border border-yellow-400/20">
                      <FaRocket className="text-xl text-yellow-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Donation Actions */}
              <motion.div
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.4}}
                className="space-y-4"
              >
                {/* Main Donate Button */}
                <motion.button
                  onClick={() => window.open(monobankUrl, '_blank')}
                  whileHover={{scale: 1.01}}
                  whileTap={{scale: 0.99}}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-3">
                    <FaDonate className="text-lg" />
                    <span className="text-base">{t.donateButton}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                </motion.button>

                {/* Divider */}
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-slate-700/50"></div>
                  <span className="flex-shrink mx-3 text-xs font-medium text-gray-500 bg-slate-900/80 px-3 py-1 rounded-full">
                    {t.or}
                  </span>
                  <div className="flex-grow border-t border-slate-700/50"></div>
                </div>

                {/* Bank Transfer Card */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-blue-500/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                          </svg>
                        </div>
                        <span className="font-semibold text-blue-300 text-sm">{t.bankTransfer}</span>
                      </div>

                      <button
                        onClick={copyToClipboard}
                        className="group/copy flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg border border-blue-500/20 transition-all duration-200"
                      >
                        {isCopied ? (
                          <div className="flex items-center gap-1.5 text-green-400">
                            <FaCheckCircle className="w-3 h-3" />
                            <span className="text-xs font-semibold">{t.copied}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-blue-400 group-hover/copy:text-blue-300">
                            <FaCopy className="w-3 h-3" />
                            <span className="text-xs font-semibold">{t.copyButton}</span>
                          </div>
                        )}
                      </button>
                    </div>

                    <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50 flex items-center justify-between mb-3">
                      <span className="font-mono text-sm text-gray-200 tracking-wider">{cardNumber}</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20 font-semibold">
                        MONOBANK
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">{t.purpose}</p>
                  </div>
                </div>

                {/* QR Code Button */}
                <button
                  onClick={() => setShowQr(!showQr)}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-purple-500/5 backdrop-blur-sm p-3 rounded-lg border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <FaQrcode className="text-purple-400 text-base" />
                    <span className="text-purple-300 font-medium text-sm">
                      {showQr ? t.donateButton : t.scanQr}
                    </span>
                    <svg
                      className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${showQr ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </button>

                {/* QR Code Display */}
                {showQr && (
                  <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'auto'}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.3}}
                    className="overflow-hidden"
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-lg border border-purple-500/20">
                      <div className="flex flex-col items-center gap-4">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                          <QRCode
                            value={monobankUrl}
                            size={120}
                            level="H"
                            className="rounded"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-sm font-bold text-white mb-1">{t.thankYou}</h4>
                          <p className="text-xs text-gray-400 max-w-xs">
                            {language === 'UA'
                              ? 'Ваш внесок робить нас сильнішими!'
                              : language === 'EN'
                                ? 'Your contribution makes us stronger!'
                                : 'Hozzájárulásod erősebbé tesz minket!'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right Side - Motivational Section */}
            <motion.div
              initial={{opacity: 0, x: 10}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.3}}
              className="hidden lg:flex items-center justify-center relative"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 rounded-xl backdrop-blur-sm border border-slate-700/30"></div>

                <div className="relative z-10 text-center space-y-5">
                  {/* Animated Rugby Ball */}
                  <motion.div
                    animate={{
                      rotate: [0, 3, -3, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg border-2 border-white/10"
                  >
                    <span className="text-3xl">🏉</span>
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent leading-tight">
                      {language === 'UA'
                        ? 'Разом до перемоги!'
                        : language === 'EN'
                          ? 'Together to Victory!'
                          : 'Együtt a győzelemig!'}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs mx-auto">
                      {language === 'UA'
                        ? 'Ваша підтримка - це віра в нашу команду.'
                        : language === 'EN'
                          ? 'Your support is faith in our team.'
                          : 'Támogatásod hit a csapatunkban.'}
                    </p>
                  </div>

                  {/* Animated Dots */}
                  <div className="flex justify-center gap-2">
                    <motion.div
                      className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                      animate={{scale: [1, 1.3, 1]}}
                      transition={{duration: 1.5, repeat: Infinity}}
                    ></motion.div>
                    <motion.div
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                      animate={{scale: [1, 1.3, 1]}}
                      transition={{duration: 1.5, repeat: Infinity, delay: 0.2}}
                    ></motion.div>
                    <motion.div
                      className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                      animate={{scale: [1, 1.3, 1]}}
                      transition={{duration: 1.5, repeat: Infinity, delay: 0.4}}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProgress;
