import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageUtils';
import type { Language } from './LanguageUtils';

const navLinks: Record<Language, { [key: string]: string }> = {
    UA: {
        home: 'Головна',
        team: 'Команда',
        club: 'Новини',
        about: 'Майбутнє',
        stadium: 'Партнери',
        contact: 'Медіа',
        benefits: 'Клуб 100',
    },
    EN: {
        home: 'Home',
        team: 'Team',
        club: 'News',
        about: 'Future',
        stadium: 'Partners',
        contact: 'Media',
        benefits: 'Club 100',
    },
    HUN: {
        home: 'Főoldal',
        team: 'Csapat',
        club: 'Hírek',
        about: 'Jövő',
        stadium: 'Partnerek',
        contact: 'Média',
        benefits: 'Club 100',
    },
};

const tickerText: Record<string, string> = {
    UA: 'UKRAINE U17 RUGBY 7S \u00A0\u2022\u00A0 РАЗОМ ДО ОЛІМПІЙСЬКИХ ВИСОТ \u00A0\u2022\u00A0 ПІДТРИМАЙ КОМАНДУ \u00A0\u2022\u00A0 КЛУБ "100" \u00A0\u2022\u00A0 ',
    EN: 'UKRAINE U17 RUGBY 7S \u00A0\u2022\u00A0 TOGETHER TOWARDS THE OLYMPICS \u00A0\u2022\u00A0 SUPPORT THE TEAM \u00A0\u2022\u00A0 CLUB "100" \u00A0\u2022\u00A0 ',
    HUN: 'UKRAINE U17 RUGBY 7S \u00A0\u2022\u00A0 EGYÜTT AZ OLIMPIA FELÉ \u00A0\u2022\u00A0 TÁMOGASD A CSAPATOT \u00A0\u2022\u00A0 CLUB "100" \u00A0\u2022\u00A0 ',
};

const copy: Record<string, { about: string; nav: string; contacts: string; rights: string }> = {
    UA: {
        about: 'Юнацька збірна України з регбі-7s U17. Об\'єднуємо таланти, виховуємо чемпіонів.',
        nav: 'Навігація',
        contacts: 'Контакти',
        rights: 'Всі права захищені.',
    },
    EN: {
        about: 'Ukrainian U17 Rugby 7s national team. Uniting talents, raising champions.',
        nav: 'Navigation',
        contacts: 'Contacts',
        rights: 'All rights reserved.',
    },
    HUN: {
        about: 'Ukrán Ifjúsági Válogatott, rögbi-7s U17. Tehetségeket egyesítünk, bajnokokat nevelünk.',
        nav: 'Navigáció',
        contacts: 'Kapcsolat',
        rights: 'Minden jog fenntartva.',
    },
};

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const t = copy[language] ?? copy.UA;
    const ticker = tickerText[language] ?? tickerText.UA;

    return (
        <footer className="w-full bg-black border-t border-white/10">
            {/* Ticker strip */}
            <div className="w-full bg-brand-yellow overflow-hidden border-b border-black/10">
                <div className="flex whitespace-nowrap py-2">
                    <div className="flex animate-marquee">
                        {[0, 1].map((i) => (
                            <span
                                key={i}
                                className="px-4 text-sm font-extrabold uppercase tracking-widest text-black"
                            >
                                {ticker.repeat(4)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="md:col-span-2">
                    <span className="text-xl font-bold text-white uppercase tracking-tight leading-tight">
                        Ukraine U17
                        <span className="block text-brand-yellow">Rugby 7s</span>
                    </span>
                    <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
                        {t.about}
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
                        {t.nav}
                    </h3>
                    <ul className="space-y-2">
                        {Object.entries(navLinks[language]).map(([key, label]) => (
                            <li key={key}>
                                <Link
                                    to={key === 'home' ? '/' : `/${key}`}
                                    className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                                >
                                    <span className="w-0 group-hover:w-2.5 h-px bg-brand-yellow transition-all duration-200" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contacts */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
                        {t.contacts}
                    </h3>
                    <ul className="space-y-3 text-sm text-neutral-400">
                        <li>
                            <a href="tel:+380509498209" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 border border-white/15 group-hover:border-brand-yellow transition-colors flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                +380 50 949 82 09
                            </a>
                        </li>
                        <li>
                            <a href="mailto:shashero10@gmail.com" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 border border-white/15 group-hover:border-brand-blue-light transition-colors flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 text-brand-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="break-all">shashero10@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/Shashero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2.5 hover:text-white transition-colors"
                            >
                                <span className="flex items-center justify-center w-7 h-7 border border-white/15 group-hover:border-brand-yellow transition-colors flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </span>
                                Telegram: @Shashero
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Ukraine U17 Rugby 7s. {t.rights}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-4 bg-brand-blue" />
                        <span className="w-2 h-4 bg-brand-yellow" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
