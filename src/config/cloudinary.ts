// Cloudinary Configuration
export const CLOUDINARY_CONFIG = {
    cloudName: 'ddnrfvpyh', // Виправлено на правильний cloud name
    uploadPreset: 'ml_default',
};

// Cloudinary API URL
export const getCloudinaryUrl = (folder: string) => {
    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/list/${folder}.json`;
};

// Функція для отримання всіх фото з папки Cloudinary
export const fetchCloudinaryImages = async (folder: string): Promise<any[]> => {
    try {
        // Використовуємо Cloudinary Admin API для отримання списку ресурсів
        const response = await fetch(
            `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/list/${folder}.json`
        );
        
        if (!response.ok) {
            console.warn(`Failed to fetch images from folder: ${folder}`);
            return [];
        }
        
        const data = await response.json();
        return data.resources || [];
    } catch (error) {
        console.error(`Error fetching Cloudinary images from ${folder}:`, error);
        return [];
    }
};

// Функція для генерації URL фото з Cloudinary
export const getCloudinaryImageUrl = (publicId: string, transformation?: string) => {
    const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
    const trans = transformation || 'w_1200,q_auto,f_auto';
    return `${baseUrl}/${trans}/${publicId}`;
};

// Функція для генерації URL thumbnail
export const getCloudinaryThumbnailUrl = (publicId: string) => {
    return getCloudinaryImageUrl(publicId, 'w_400,h_300,c_fill,q_auto,f_auto');
};

// Event folders mapping
export const EVENT_FOLDERS = {
    lisbon2026: 'Lisbon2026',
    gdynia1: '1gdynia2025',
    gdynia2: '2gdynia2025',
    newzealand2026: 'newzealand2026',
    dragobrat2025: 'dragobrat2025',
    italy2026: 'italy2026',
    france2026: 'france2026',
    austria2026: 'austria2026',
    britain2026: 'britain2026',
    other: 'etc', // Папка для "інших" фото
} as const;

export type EventFolder = keyof typeof EVENT_FOLDERS;
