# Створення мобільної версії backteam.webp

## Варіант 1: Онлайн сервіс (найпростіший)

1. Відкрийте https://squoosh.app/
2. Завантажте файл `public/backteam.webp`
3. Налаштування:
   - Resize: Width = 800px (висота автоматично)
   - Format: WebP
   - Quality: 80
4. Збережіть як `backteam-mobile.webp` в папку `public/`

## Варіант 2: За допомогою ImageMagick (якщо встановлений)

```bash
magick public/backteam.webp -resize 800x -quality 80 public/backteam-mobile.webp
```

## Варіант 3: За допомогою онлайн конвертера

- https://www.iloveimg.com/resize-image
- https://tinypng.com/

## Очікуваний результат:

- Оригінал: ~102 KB
- Мобільна версія: ~30-40 KB (економія 60-70%)
- Ширина: 800px
- Формат: WebP
- Якість: 80%

## Після створення файлу:

Файл `backteam-mobile.webp` буде автоматично використовуватися на мобільних пристроях (екрани до 768px).
