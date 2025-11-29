import { motion } from 'framer-motion';
import { FaDonate, FaQrcode, FaCopy } from 'react-icons/fa';
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
    <div className="max-w-5xl mx-auto my-8 px-4">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/12 via-blue-400/12 to-purple-400/12 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:border-yellow-400/22 transition-all duration-500">
          <div className="absolute inset-0 overflow-hidden opacity-4">
            <div className="absolute -top-1/4 -right-1/4 w-[140%] h-[140%] bg-gradient-to-br from-yellow-400/9 to-transparent rounded-full mix-blend-soft-light transform rotate-12 animate-pulse"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-[110%] h-[110%] bg-gradient-to-tr from-blue-400/9 to-transparent rounded-full mix-blend-soft-light transform -rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  
                  transition={{duration: 0.6}}
                  className="flex items-center space-x-2 mb-2"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-300 font-medium text-sm uppercase tracking-wider">
                    {language === 'UA' ? 'Благодійна ініціатива' : language === 'EN' ? 'Charity Initiative' : 'Jótékonysági kezdeményezés'}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  
                  transition={{duration: 0.6, delay: 0.1}}
                  className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent leading-tight"
                >
                  {t.title}
                </motion.h2>

                <motion.p
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  
                  transition={{duration: 0.6, delay: 0.2}}
                  className="text-base text-gray-300 leading-relaxed"
                >
                  {t.description}
                </motion.p>
              </div>

              <motion.div
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                
                transition={{duration: 0.6, delay: 0.3}}
                className="relative group/amount"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/18 to-amber-400/18 rounded-xl blur opacity-0 group-hover/amount:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-yellow-400/28 transition-all duration-300">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      <p className="text-yellow-300 font-semibold text-base tracking-wide">{t.targetAmount}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                        {formatNumber(targetAmount)}
                      </div>
                      <div className="text-xl lg:text-2xl font-bold text-yellow-300">€</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                
                transition={{duration: 0.6, delay: 0.4}}
                className="space-y-3"
              >
                <button
                  onClick={() => window.open(monobankUrl, '_blank')}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/28 to-amber-400/28 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold py-3 px-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/22 hover:-translate-y-0.5 flex items-center justify-center space-x-3 group/button">
                    <FaDonate className="text-base transition-transform group-hover/button:scale-110" />
                    <span className="text-base">{t.donateButton}</span>
                    <svg className="w-4 h-4 transition-transform group-hover/button:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                </button>

                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink mx-3 text-sm font-medium text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full border border-white/5">
                    {t.or}
                  </span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/12 to-purple-400/12 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-blue-400/28 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-blue-400/30">
                          <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                          </svg>
                        </div>
                        <span className="font-semibold text-blue-300 text-sm">{t.bankTransfer}</span>
                      </div>

                      <button
                        onClick={copyToClipboard}
                        className="group/copy flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:scale-105"
                      >
                        {isCopied ? (
                          <div className="flex items-center space-x-1 text-green-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>{t.copied}</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1 text-blue-400 group-hover/copy:text-blue-300">
                            <FaCopy className="w-3 h-3" />
                            <span>{t.copyButton}</span>
                          </div>
                        )}
                      </button>
                    </div>

                    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50 flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-gray-200 tracking-wider">{cardNumber}</span>
                      <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded border border-blue-400/30 font-semibold">
                        MONOBANK
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed">{t.purpose}</p>
                  </div>
                </div>

                <motion.button
                  onClick={() => setShowQr(!showQr)}
                  className="group relative w-full"
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/12 to-pink-400/12 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:border-purple-400/28 transition-all duration-300 flex items-center justify-center space-x-2 group/button">
                    <FaQrcode className="text-purple-400 transition-transform group-hover/button:scale-110" />
                    <span className="text-purple-300 font-medium text-sm">
                      {showQr ? t.donateButton : t.scanQr}
                    </span>
                    <svg className={`w-3 h-3 text-purple-400 transition-transform duration-300 ${showQr ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </motion.button>

                {showQr && (
                  <motion.div
                    initial={{opacity: 0, y: -10, scale: 0.95}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: -10, scale: 0.95}}
                    className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-3 rounded-lg shadow-inner border border-gray-200/20 mb-3">
                        <QRCode
                          value={monobankUrl}
                          size={100}
                          level="H"
                          className="rounded"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-base font-bold text-white mb-1">{t.thankYou}</h4>
                        <p className="text-sm text-gray-300 max-w-xs">
                          {language === 'UA'
                            ? 'Ваш внесок робить нас сильнішими!'
                            : language === 'EN'
                              ? 'Your contribution makes us stronger!'
                              : 'Hozzájárulásod erősebbé tesz minket!'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              
              transition={{duration: 0.8, delay: 0.3}}
              className="hidden lg:flex items-center justify-center p-5 relative"
            >
              <div className="relative w-full h-full min-h-[15rem] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/4 via-transparent to-blue-400/4 rounded-xl backdrop-blur-sm border border-white/5"></div>

                <div className="relative z-10 text-center p-4">
                  <motion.div
                    animate={{
                      rotate: [0, 2.5, -2.5, 0],
                      y: [0, -2.5, 2.5, 0]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 shadow-xl mb-4 border border-white/20"
                  >
                    <span className="text-3xl filter drop-shadow">🏉</span>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {language === 'UA'
                      ? 'Разом до перемоги!'
                      : language === 'EN'
                        ? 'Together to Victory!'
                        : 'Együtt a győzelemig!'}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                    {language === 'UA'
                      ? 'Ваша підтримка - це віра в нашу команду.'
                      : language === 'EN'
                        ? 'Your support is faith in our team.'
                        : 'Támogatásod hit a csapatunkban.'}
                  </p>

                  <div className="flex justify-center space-x-2">
                    <motion.div
                      className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
                      animate={{scale: [1, 1.2, 1]}}
                      transition={{duration: 1.5, repeat: Infinity}}
                    ></motion.div>
                    <motion.div
                      className="w-2.5 h-2.5 bg-blue-400 rounded-full"
                      animate={{scale: [1, 1.2, 1]}}
                      transition={{duration: 1.5, repeat: Infinity, delay: 0.2}}
                    ></motion.div>
                    <motion.div
                      className="w-2.5 h-2.5 bg-purple-400 rounded-full"
                      animate={{scale: [1, 1.2, 1]}}
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
