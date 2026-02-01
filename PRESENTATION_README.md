# SoftElion PowerPoint Presentation

## 📁 Файли
- `SoftElion_Presentation.pptx` - Готова презентація PowerPoint
- `softelion_presentation.py` - Python скрипт для генерації презентації
- `requirements_pptx.txt` - Залежності Python

## 📊 Структура презентації

### Слайд 1: Титульний слайд
- Назва компанії SoftElion
- Підзаголовок: IT Outsourcing Company
- Опис: Custom Software Development Services

### Слайд 2: Хто ми такі
- Заснована у 2020 році
- Міжнародна компанія
- Рейтинг 4.9/5
- 500+ успішних проектів

### Слайд 3: Що ми робимо (Огляд послуг)
- Custom Software Development
- Web Development
- Mobile App Development
- AI & Machine Learning
- DevOps Services
- Dedicated Teams
- Legacy Modernization
- Quality Assurance
- API Development

### Слайд 4: Custom Software Development
- Детальний процес розробки (6 кроків)
- Від аналізу вимог до підтримки

### Слайд 5: Технологічний стек
- Frontend технології
- Backend технології
- Mobile технології
- Бази даних
- Cloud & DevOps
- AI & ML інструменти

### Слайд 6: Web & Mobile Development
- Послуги веб-розробки
- Послуги мобільної розробки

### Слайд 7: AI & Machine Learning
- Чат-боти та NLP
- Предиктивна аналітика
- Computer Vision
- Системи рекомендацій

### Слайд 8: DevOps & Cloud Services
- Cloud Migration
- CI/CD Pipeline
- Containerization
- Monitoring
- Security

### Слайд 9: Dedicated Teams
- Переваги виділених команд
- Склад команди

### Слайд 10: Чому обирають SoftElion
- 6 ключових причин

### Слайд 11: Контакти
- Веб-сайт
- Email
- Заклик до дії

## 🎨 Дизайн особливості

- **Сучасні градієнтні фони** - кожен слайд має унікальну комбінацію кольорів
- **Декоративні елементи** - напівпрозорі кола для візуальної привабливості
- **Кольорова схема**:
  - Основні: зелений (#10B981), синій (#3B82F6), фіолетовий (#A78BFA)
  - Акценти: жовтий (#FBF24), помаранчевий (#FB923C)
  - Текст: білий, світло-сірий
- **Типографіка**:
  - Заголовки: 40-72pt, жирний
  - Підзаголовки: 24-32pt
  - Основний текст: 16-20pt

## 🛠 Як редагувати

### Зміна тексту в презентації:
1. Відкрийте `softelion_presentation.py`
2. Знайдіть відповідний слайд (Slide 1, Slide 2, etc.)
3. Змініть текст в функціях `add_text_with_style()`
4. Збережіть файл та запустіть скрипт знову

### Зміна кольорів:
- Фони: змініть параметри в `add_gradient_background(slide, color1, color2)`
- Текст: змініть RGB значення в `add_text_with_style()`
- Кольори задаються як кортежі RGB: (R, G, B), де кожне значення 0-255

### Додавання нових слайдів:
```python
# Додайте новий слайд
slide = prs.slides.add_slide(prs.slide_layouts[6])
add_gradient_background(slide, (color1), (color2))
add_text_with_style(slide, "Заголовок", x, y, width, height, size, bold, color, align)
```

## 📝 Для повторної генерації

```bash
# Windows
py -3 softelion_presentation.py

# або
python softelion_presentation.py
```

## 💡 Поради

1. **Персоналізація**: Додайте логотип компанії на титульний слайд
2. **Кейси**: Можна додати реальні скріншоти проектів
3. **Статистика**: Оновіть цифри відповідно до актуальних даних
4. **Мова**: Легко змінити мову презентації, редагуючи текст у скрипті
5. **Експорт в PDF**: PowerPoint дозволяє зберегти презентацію як PDF

## ⚠️ Примітка

Емодзі в тексті слайдів можуть не відображатися в деяких версіях PowerPoint. Якщо це проблема, видаліть їх зі скрипта Python.
