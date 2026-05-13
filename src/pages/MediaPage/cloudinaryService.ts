import { CLOUDINARY_CONFIG } from '../../config/cloudinary';
import type { MediaItem, EventCategory } from './mediaData';

interface CloudinaryResource {
    public_id: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    bytes: number;
    width: number;
    height: number;
    url: string;
    secure_url: string;
}

// Функція для генерації URL зображення з Cloudinary
export const getCloudinaryImageUrl = (publicId: string, width: number = 1200): string => {
    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/w_${width},q_auto,f_auto/${publicId}`;
};

// Функція для генерації URL thumbnail
export const getCloudinaryThumbnailUrl = (publicId: string): string => {
    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/w_400,h_300,c_fill,q_auto,f_auto/${publicId}`;
};

// Статичний список фото для кожної папки (оскільки Cloudinary API вимагає авторизації)
const STATIC_IMAGES: Record<string, string[]> = {
    'Lisbon2026': [
        'WhatsApp_Image_2026-02-16_at_20.55.05_ocrpqw',
        'WhatsApp_Image_2026-02-16_at_20.55.05_15_i8k4w6',
        'WhatsApp_Image_2026-02-16_at_20.55.05_13_t4tlo7',
        'WhatsApp_Image_2026-02-16_at_20.55.05_12_qfjdyy',
        'WhatsApp_Image_2026-02-16_at_20.55.05_11_lqmo3r',
        'WhatsApp_Image_2026-02-16_at_20.55.05_10_pvsggu',
        'WhatsApp_Image_2026-02-16_at_20.55.05_9_jnw7ka',
        'WhatsApp_Image_2026-02-16_at_20.55.05_8_jyvjyr',
        'WhatsApp_Image_2026-02-16_at_20.55.05_7_gveqy4',
        'WhatsApp_Image_2026-02-16_at_20.55.05_6_lb0fxq',
        'WhatsApp_Image_2026-02-16_at_20.55.05_5_qz83rq',
        'WhatsApp_Image_2026-02-16_at_20.55.05_4_jpdejc',
        'WhatsApp_Image_2026-02-16_at_20.55.05_3_gdcpuo',
        'WhatsApp_Image_2026-02-16_at_20.55.05_2_zc76ww',
        'WhatsApp_Image_2026-02-16_at_20.55.05_1_eu8mbq',
        'photo_2026-02-14_14-34-43_v8fctt',
        'IMG_4211_setdcd',
        'IMG_4210_oosfy5',
        'IMG_4203_cec0je',
        'IMG_4197_is4hrc',
        'IMG_4150_zhhtmg',
        'IMG_3568_f0jbc9',
    ],
    '1gdynia2025': [
        'IMG_5451_2_hapw3j',
        'IMG_5432_2_nxzo2t',
        'IMG_5404_2_sq0yxq',
        'IMG_5402_2_cwkn4p',
        'IMG_4919_2_qenzpb',
        'photo_2026-04-28_23-41-28_pl4ymg',
        'photo_2026-04-28_23-40-59_wirjdk',
        'photo_2026-04-28_23-40-37_jfkebc',
        'photo_2025-05-11_13-47-42_tw2fhx',
        'IMG_7477_3_ds9sux',
        'IMG_7410_3_vt2vl8',
        'IMG_5893_2_st2drx',
        'IMG_5888_2_nns5rl',
        'IMG_5885_2_cln6a0',
        'IMG_5884_2_xddft7',
        'IMG_5882_2_uwfmkr',
        'IMG_5526_2_quiueh',
        'IMG_5625_2_zywqhf',
        'IMG_5558_2_edgsgw',
        'IMG_5486_2_eamapt',
    ],
    '2gdynia2025': [
        'photo_2025-07-08_22-03-06_mwyiil',
        'photo_2025-07-07_13-05-03_l7opr5',
        'IMG_9458_2_qinkrt',
        'IMG_8471_2_boq7o7',
        'IMG_8414_2_okz9th',
        'IMG_8391_2_g1zzrn',
        'IMG_3890_2_ptcpea',
        'IMG_3888_2_md3n5h',
        'IMG_3848_2_gopxqn',
    ],
    'gdynia2026': [
        'IMG_6361_dfoixh',
        'IMG_6370_sbaboy',
        'IMG_6373_heerni',
        'IMG_5910_nzhcnz',
        'IMG_6554_ficuuy',
        'IMG_6555_x8ov5m',
        'IMG_6412_smb8jm',
        'IMG_6038_usuylo',
        'IMG_6460_ilxnhl',
        'IMG_6482_qupwoh',
        'IMG_6486_vv5rrp',
    ],
    'batumi2025': [
        'IMG_2435_2_tktf2w',
        'IMG_2434_2_yfqogl',
        'IMG_2412_sexbc6',
        'IMG_2399_un68ia',
        'IMG_2366_tlqxb8',
        'IMG_2349_3_dzeups',
        'IMG_2140_5_zergbe',
        'IMG_2079_2_iwrvnr',
        'IMG_2073_2_qkamsx',
        'IMG_2018_5_xm9vvc',
        'IMG_1714_geuyw8',
        'IMG_1713_2_qy7kdf',
        'IMG_1712_asqglc',
        'IMG_1710_pm6nxo',
        'IMG_1709_2_ikjugt',
        '20251120_180545_clshzv',
    ],
    'newzealand2026': [
        'zeland1_ewpcdp',
        'zeland4_cqp9ef',
        'zeland2_qw44hm',
        'zeland3_y5vt9t',
        'zeland5_lv5iru',
    ],
    'italy2026': [
        // Фото скоро буде додано
    ],
    'austria2026': [
        // Фото скоро буде додано
    ],
    'britain2026': [
        // Фото скоро буде додано
    ],
    'etc': [
        // Фото скоро буде додано
    ],
};

// Функція для завантаження фото з конкретної папки Cloudinary
export const loadImagesFromCloudinaryFolder = async (
    folder: string,
    eventId: EventCategory
): Promise<MediaItem[]> => {
    try {
        // Використовуємо статичний список фото
        const imageIds = STATIC_IMAGES[folder] || [];
        
        if (imageIds.length === 0) {
            console.warn(`No images configured for folder: ${folder}`);
            return [];
        }

        // Конвертуємо список ID в MediaItem[]
        return imageIds.map((publicId, index) => ({
            id: Date.now() + index + Math.floor(Math.random() * 1000), // Генеруємо унікальний ID
            type: 'photo' as const,
            url: getCloudinaryImageUrl(publicId),
            poster: getCloudinaryThumbnailUrl(publicId),
            title: getTitleForEvent(eventId),
            category: 'photos',
            event: eventId,
            cloudinaryId: publicId,
        }));
    } catch (error) {
        console.error(`Error loading images from Cloudinary folder ${folder}:`, error);
        return [];
    }
};

// Допоміжна функція для отримання назви події
const getTitleForEvent = (eventId: EventCategory): { UA: string; EN: string; HUN: string } => {
    const titles: Record<EventCategory, { UA: string; EN: string; HUN: string }> = {
        lisbon2026: {
            UA: 'Лісабон 2026',
            EN: 'Lisbon 2026',
            HUN: 'Lisszabon 2026',
        },
        gdynia1: {
            UA: 'Гдиня I',
            EN: 'Gdynia I',
            HUN: 'Gdynia I',
        },
        gdynia2: {
            UA: 'Гдиня II',
            EN: 'Gdynia II',
            HUN: 'Gdynia II',
        },
        gdynia2026: {
            UA: 'Гдиня 2026',
            EN: 'Gdynia 2026',
            HUN: 'Gdynia 2026',
        },
        batumi2025: {
            UA: 'Батумі 2025',
            EN: 'Batumi 2025',
            HUN: 'Batumi 2025',
        },
        newzealand2026: {
            UA: 'Нова Зеландія 2026',
            EN: 'New Zealand 2026',
            HUN: 'Új-Zéland 2026',
        },
        italy2026: {
            UA: 'Італія 2026',
            EN: 'Italy 2026',
            HUN: 'Olaszország 2026',
        },
        austria2026: {
            UA: 'Австрія 2026',
            EN: 'Austria 2026',
            HUN: 'Ausztria 2026',
        },
        britain2026: {
            UA: 'Британія 2026',
            EN: 'Britain 2026',
            HUN: 'Britannia 2026',
        },
        other: {
            UA: 'Інше',
            EN: 'Other',
            HUN: 'Egyéb',
        },
        all: {
            UA: 'Всі події',
            EN: 'All events',
            HUN: 'Összes esemény',
        },
    };

    return titles[eventId] || { UA: 'Фото', EN: 'Photo', HUN: 'Fénykép' };
};

// Функція для завантаження всіх фото з усіх папок
export const loadAllCloudinaryImages = async (): Promise<MediaItem[]> => {
    const folders = [
        { folder: 'Lisbon2026', eventId: 'lisbon2026' as EventCategory },
        { folder: '1gdynia2025', eventId: 'gdynia1' as EventCategory },
        { folder: '2gdynia2025', eventId: 'gdynia2' as EventCategory },
        { folder: 'gdynia2026', eventId: 'gdynia2026' as EventCategory },
        { folder: 'batumi2025', eventId: 'batumi2025' as EventCategory },
        { folder: 'newzealand2026', eventId: 'newzealand2026' as EventCategory },
        { folder: 'italy2026', eventId: 'italy2026' as EventCategory },
        { folder: 'austria2026', eventId: 'austria2026' as EventCategory },
        { folder: 'britain2026', eventId: 'britain2026' as EventCategory },
        { folder: 'etc', eventId: 'other' as EventCategory },
    ];

    const allImages: MediaItem[] = [];

    for (const { folder, eventId } of folders) {
        const images = await loadImagesFromCloudinaryFolder(folder, eventId);
        allImages.push(...images);
    }

    return allImages;
};
