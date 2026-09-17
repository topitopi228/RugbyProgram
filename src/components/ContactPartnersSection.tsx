import type { Language } from './LanguageUtils';

interface ContactPartnersSectionProps {
    language: Language | string;
}

const sponsorLogos = [1, 2, 3, 4, 5, 6];

const copy: Record<string, {
    kicker: string;
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    telegram: string;
    partners: string;
}> = {
    UA: {
        kicker: "Зв'яжіться з нами",
        title: 'Залишились питання?',
        subtitle: "Зв'яжіться з нами зручним для вас способом",
        phone: 'Телефон',
        email: 'Email',
        telegram: 'Telegram',
        partners: 'Партнери',
    },
    EN: {
        kicker: 'Get in touch',
        title: 'Have questions?',
        subtitle: 'Contact us in any convenient way',
        phone: 'Phone',
        email: 'Email',
        telegram: 'Telegram',
        partners: 'Partners',
    },
    HUN: {
        kicker: 'Lépjen kapcsolatba',
        title: 'Kérdése van?',
        subtitle: 'Lépjen velünk kapcsolatba bármilyen kényelmes módon',
        phone: 'Telefon',
        email: 'Email',
        telegram: 'Telegram',
        partners: 'Partnerek',
    },
};

const ContactPartnersSection: React.FC<ContactPartnersSectionProps> = ({ language }) => {
    const t = copy[language] ?? copy.UA;

    return (
        <section className="w-full bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 animate-fade-up">
                    <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-brand-yellow uppercase border border-brand-yellow/40">
                        {t.kicker}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white uppercase tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-sm text-neutral-400 max-w-xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <a
                        href="tel:+380509498209"
                        className="group flex flex-col items-center text-center gap-3 p-6 bg-neutral-950 border border-white/10 hover:border-brand-yellow hover:-translate-y-1 transition-all duration-200"
                    >
                        <span className="flex items-center justify-center w-14 h-14 border border-brand-yellow/40 bg-black transition-colors duration-200 group-hover:border-brand-yellow group-hover:bg-brand-yellow/10">
                            <svg className="h-6 w-6 text-brand-yellow transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                        <span className="text-sm font-bold text-white uppercase tracking-wide">{t.phone}</span>
                        <span className="text-neutral-400 text-sm">+380 50 949 82 09</span>
                    </a>

                    <a
                        href="mailto:shashero10@gmail.com"
                        className="group flex flex-col items-center text-center gap-3 p-6 bg-neutral-950 border border-white/10 hover:border-brand-yellow hover:-translate-y-1 transition-all duration-200"
                    >
                        <span className="flex items-center justify-center w-14 h-14 border border-brand-yellow/40 bg-black transition-colors duration-200 group-hover:border-brand-yellow group-hover:bg-brand-yellow/10">
                            <svg className="h-6 w-6 text-brand-yellow transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span className="text-sm font-bold text-white uppercase tracking-wide">{t.email}</span>
                        <span className="text-neutral-400 text-sm break-all">shashero10@gmail.com</span>
                    </a>

                    <a
                        href="https://t.me/Shashero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-center gap-3 p-6 bg-neutral-950 border border-white/10 hover:border-brand-yellow hover:-translate-y-1 transition-all duration-200"
                    >
                        <span className="flex items-center justify-center w-14 h-14 border border-brand-yellow/40 bg-black transition-colors duration-200 group-hover:border-brand-yellow group-hover:bg-brand-yellow/10">
                            <svg className="h-6 w-6 text-brand-yellow transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                        </span>
                        <span className="text-sm font-bold text-white uppercase tracking-wide">Telegram</span>
                        <span className="text-neutral-400 text-sm">@Shashero</span>
                    </a>
                </div>

                <div className="mt-16">
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center px-4 py-2 text-xs font-bold tracking-widest text-brand-yellow uppercase border border-brand-yellow/40">
                            {t.partners}
                        </span>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                        <div className="flex">
                            {[0, 1].map((set) => (
                                <div key={set} className="flex animate-marquee flex-shrink-0" aria-hidden={set === 1}>
                                    {sponsorLogos.map((num) => (
                                        <div
                                            key={`${set}-${num}`}
                                            className="mx-3 flex-shrink-0 bg-neutral-950 border border-white/10 border-t-2 border-t-brand-yellow p-4 md:p-5 transition-colors hover:border-brand-yellow/60"
                                        >
                                            <img
                                                src={`/spin-${num}.webp`}
                                                alt={`Sponsor ${num}`}
                                                className="h-12 md:h-14 w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPartnersSection;
