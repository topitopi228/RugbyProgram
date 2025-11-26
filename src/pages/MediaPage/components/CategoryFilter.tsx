// @ts-nocheck
import { motion } from 'framer-motion';

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
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div className="flex flex-wrap justify-center gap-2 mb-8" variants={container} initial="hidden" animate="show">
            {categories.map((category) => (
                <motion.button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/20' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {category.name[language]}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default CategoryFilter;
