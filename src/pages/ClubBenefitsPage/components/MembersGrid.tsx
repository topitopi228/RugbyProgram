import React, { useState, useMemo } from 'react';
import type { MembershipLevel } from '../../../data/clubMembers';
import { clubMembers } from '../../../data/clubMembers';
import MemberCard from './MemberCard';
import PlatinumMemberCard from './PlatinumMemberCard';
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
          <div
            key={index}
            className="aspect-[3/4]"
          >
            {member ? (
              member.membershipLevel === 'platinum' ? (
                <PlatinumMemberCard member={member} />
              ) : (
                <MemberCard member={member} />
              )
            ) : (
              // Empty slot
              <div className="h-full w-full rounded-lg border border-white/10 bg-neutral-950 flex items-center justify-center hover:border-brand-yellow/50 hover:-translate-y-1 transition-all duration-200">
                <span className="text-neutral-600 text-sm sm:text-base md:text-lg font-semibold">{index}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 p-6 rounded-lg bg-neutral-950 border border-white/10">
        <h3 className="animate-fade-up text-xl font-extrabold uppercase text-white mb-4">Рівні підписки:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-black border border-white/10 hover:-translate-y-1 transition-all duration-200">
            <div className="w-5 h-5 rounded-full bg-neutral-600 flex-shrink-0" />
            <span className="text-neutral-300 font-medium">Starter</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-black border border-brand-blue/40 hover:-translate-y-1 transition-all duration-200">
            <div className="w-5 h-5 rounded-full bg-brand-blue flex-shrink-0" />
            <span className="text-brand-blue font-medium">Silver</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-black border border-brand-yellow/40 hover:-translate-y-1 transition-all duration-200">
            <div className="w-5 h-5 rounded-full bg-brand-yellow flex-shrink-0" />
            <span className="text-brand-yellow font-medium">Gold</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-black border border-brand-yellow/40 hover:-translate-y-1 transition-all duration-200">
            <div className="w-5 h-5 flex-shrink-0 relative">
              <img src="/diamond-platinum.svg" alt="Diamond" className="w-full h-full object-contain" />
            </div>
            <span className="text-brand-yellow font-medium">Platinum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersGrid;
