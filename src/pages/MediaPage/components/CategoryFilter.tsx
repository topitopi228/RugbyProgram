// @ts-nocheck

interface Category {
    id: string;
    name: {
        UA: string;
        EN: string;
        HUN: string;
    };
}

interface CategoryFilterProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
    language: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryChange, language }) => {
    // Give the "photos" category a distinct blue accent for a bit of color variety,
    // while everything else keeps the primary yellow accent.
    const isBlueCategory = (id: string) => id === 'photos';

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
                const active = activeCategory === category.id;
                const blue = isBlueCategory(category.id);
                return (
                    <button
                        key={category.id}
                        onClick={() => onCategoryChange(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                            active
                                ? blue
                                    ? 'bg-brand-blue-light text-white'
                                    : 'bg-yellow-400 text-black'
                                : blue
                                    ? 'border border-white/20 text-white/70 hover:border-brand-blue-light'
                                    : 'border border-white/20 text-white/70 hover:border-yellow-400'
                        }`}
                    >
                        {category.name[language]}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryFilter;
