// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
    return (
        <div className="relative">
            {/* Main Hero Container - fits viewport with navbar */}
            <div className="relative h-[calc(100vh-5rem)] w-full overflow-hidden mt-20 rounded-b-[50px]">
                <img
                    src="/backteam.webp"
                    alt="Rugby team"
                    fetchPriority="high"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                />
                
                {/* Light gradient only at top for navbar visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
            </div>
        </div>
    );
};

export default HeroSection;
