import React from 'react';
import type { MembershipLevel } from '../../../data/clubMembers';
import { motion } from 'framer-motion';

interface MembersFilterProps {
  selectedLevel: MembershipLevel | 'all';
  onLevelChange: (level: MembershipLevel | 'all') => void;
  memberCounts: {
    all: number;
    starter: number;
    silver: number;
    gold: number;
    platinum: number;
  };
}

const MembersFilter: React.FC<MembersFilterProps> = ({ 
  selectedLevel, 
  onLevelChange,
  memberCounts
}) => {
  const filters = [
    { 
      value: 'all' as const, 
      label: 'Всі члени',
      color: 'from-slate-600 to-slate-700',
      borderColor: 'border-slate-500',
      count: memberCounts.all
    },
    { 
      value: 'starter' as const, 
      label: 'Starter',
      color: 'from-slate-700 to-slate-800',
      borderColor: 'border-slate-600',
      count: memberCounts.starter
    },
    { 
      value: 'silver' as const, 
      label: 'Silver',
      color: 'from-gray-500 to-gray-600',
      borderColor: 'border-gray-400',
      shadowColor: 'shadow-gray-400/30',
      count: memberCounts.silver
    },
    { 
      value: 'gold' as const, 
      label: 'Gold',
      color: 'from-amber-600 to-amber-700',
      borderColor: 'border-amber-500',
      shadowColor: 'shadow-amber-500/30',
      count: memberCounts.gold
    },
    { 
      value: 'platinum' as const, 
      label: 'Platinum',
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      borderColor: 'border-[#a78bfa]',
      shadowColor: 'shadow-purple-400/50',
      count: memberCounts.platinum
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          onClick={() => onLevelChange(filter.value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative px-4 py-2 rounded-xl border-2 transition-all duration-300
            ${selectedLevel === filter.value 
              ? `bg-gradient-to-r ${filter.color} ${filter.borderColor} ${filter.shadowColor ? `shadow-lg ${filter.shadowColor}` : ''} text-white`
              : `bg-slate-800/50 ${filter.borderColor} hover:bg-slate-700/50 text-gray-300`
            }
          `}
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">{filter.label}</span>
            <span className={`
              px-2 py-0.5 rounded-full text-xs font-bold
              ${selectedLevel === filter.value 
                ? 'bg-white/20 text-white' 
                : 'bg-slate-700 text-gray-400'
              }
            `}>
              {filter.count}
            </span>
          </div>
          {selectedLevel === filter.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-xl border-2 border-white/20"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default MembersFilter;
