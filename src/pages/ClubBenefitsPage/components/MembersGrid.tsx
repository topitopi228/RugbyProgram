import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { MembershipLevel } from '../../../data/clubMembers';
import { clubMembers } from '../../../data/clubMembers';
import MemberCard from './MemberCard';
import MembersFilter from './MembersFilter';

const MembersGrid: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<MembershipLevel | 'all'>('all');
  
  // Підрахунок членів за рівнями
  const memberCounts = useMemo(() => {
    const counts = {
      all: clubMembers.length,
      starter: 0,
      silver: 0,
      gold: 0,
      platinum: 0
    };
    
    clubMembers.forEach(member => {
      counts[member.membershipLevel]++;
    });
    
    return counts;
  }, []);

  // Фільтровані члени
  const filteredMembers = useMemo(() => {
    if (selectedLevel === 'all') {
      return clubMembers;
    }
    return clubMembers.filter(member => member.membershipLevel === selectedLevel);
  }, [selectedLevel]);

  // Створюємо масив з 100 слотів
  const totalSlots = 100;
  const slots = Array.from({ length: totalSlots }, (_, index) => {
    const member = selectedLevel === 'all' 
      ? clubMembers[index]
      : filteredMembers[index];
      
    return { index: index + 1, member };
  });

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Filter Component */}
      <MembersFilter 
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        memberCounts={memberCounts}
      />
      {/* Members Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-2.5 md:gap-3">
        {slots.map(({ index, member }) => (
          <motion.div 
            key={index} 
            className="aspect-[3/4]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: (index - 1) * 0.01,
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            {member ? (
              <MemberCard member={member} />
            ) : (
              // Empty slot
              <div className="h-full w-full rounded-lg border border-slate-700/30 bg-slate-800/20 backdrop-blur-sm flex items-center justify-center hover:border-amber-500/30 transition-colors">
                <span className="text-slate-600 text-sm sm:text-base md:text-lg font-semibold">{index}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 p-4 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30">
        <h3 className="text-lg font-semibold text-white mb-3">Рівні підписки:</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-slate-600" />
            <span className="text-gray-300">Starter</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-400 shadow-[0_0_8px_rgba(192,192,192,0.5)]" />
            <span className="text-gray-300">Silver</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <span className="text-gray-300">Gold</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.6)]" />
            <span className="text-gray-300">Platinum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersGrid;
