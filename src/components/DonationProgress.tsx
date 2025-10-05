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
    description: 'Help us reach our goal for the tournament in Georgia!',
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
    description: 'Допоможіть нам досягти мети для участі в турнірі у Грузії!',
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
    description: 'Segíts nekünk elérni a célunkat a grúziai versenyre!',
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

  const targetAmount = 15700; // 15,700 EUR
  const monobankUrl = 'https://send.monobank.ua/your-donation-link';
  const cardNumber = '4441 1144 2222 3333';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 to-transparent"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8">
          {/* Left side - Donation Info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                {t.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t.description}</p>
            </div>

            {/* Target Amount */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="text-center space-y-3">
                <p className="text-gray-500 font-medium tracking-wide">{t.targetAmount}</p>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
                  {formatNumber(targetAmount)} <span className="text-3xl">€</span>
                </div>
              </div>
            </div>

            {/* Donation Buttons */}
            <div className="space-y-5">
              <button
                onClick={() => window.open(monobankUrl, '_blank')}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center group"
              >
                <FaDonate className="mr-3 transition-transform group-hover:scale-110" />
                <span className="font-semibold">{t.donateButton}</span>
              </button>

              <div className="relative flex items-center my-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-sm font-medium text-gray-400">{t.or}</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-white/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">{t.bankTransfer}</span>
                  <button
                    onClick={copyToClipboard}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center transition-colors"
                  >
                    {isCopied ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t.copied}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FaCopy className="mr-1" />
                        {t.copyButton}
                      </span>
                    )}
                  </button>
                </div>
                <div className="font-mono bg-gray-50 p-3 rounded-lg text-sm border border-gray-100 flex items-center justify-between">
                  <span>{cardNumber}</span>
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">MONOBANK</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{t.purpose}</p>
              </div>

              <button
                onClick={() => setShowQr(!showQr)}
                className="w-full text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center mt-2 group"
              >
                <FaQrcode className="mr-2 transition-transform group-hover:scale-110" />
                <span className="border-b border-dashed border-blue-300 group-hover:border-blue-500">
                  {showQr ? t.donateButton : t.scanQr}
                </span>
              </button>

              {showQr && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 mt-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-3 rounded-lg shadow-inner border border-gray-100 mb-4">
                      <QRCode
                        value={monobankUrl}
                        size={140}
                        level="H"
                        className="p-1"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{t.thankYou}</h4>
                      <p className="text-sm text-gray-500">
                        {language === 'UA' 
                          ? 'Ваш внесок важливий для нас!' 
                          : language === 'EN' 
                            ? 'Your contribution means a lot!' 
                            : 'Hozzájárulásod sokat jelent számunkra!'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="hidden md:flex items-center justify-center p-6 relative">
            <div className="relative w-full h-full min-h-[28rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg mb-6 transform rotate-12">
                  <span className="text-5xl">🏉</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {language === 'UA' 
                    ? 'Дякуємо за підтримку!' 
                    : language === 'EN' 
                      ? 'Thank You for Your Support!' 
                      : 'Köszönjük a támogatást!'}
                </h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  {language === 'UA'
                    ? 'Кожен ваш внесок наближує нас до участі на Олімпійських Іграх.'
                    : language === 'EN'
                      ? 'Every contribution brings us closer to the  Olympic Games.'
                      : 'Minden hozzájárulás közelebb visz minket a grúziai versenyhez.'}
                </p>
                <div className="mt-6 flex justify-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProgress;