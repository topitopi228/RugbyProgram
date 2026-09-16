import React from 'react';
import type { MembershipLevel } from '../../../data/clubMembers';

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
  // Each filter gets its own accent color when active, for a bit of visual
  // variety instead of every tab looking identical.
  const filters = [
    {
      value: 'all' as const,
      label: 'Всі члени',
      count: memberCounts.all,
      activeClass: 'bg-brand-yellow border-brand-yellow text-black',
      hoverClass: 'hover:border-brand-yellow'
    },
    {
      value: 'starter' as const,
      label: 'Starter',
      count: memberCounts.starter,
      activeClass: 'bg-neutral-300 border-neutral-300 text-black',
      hoverClass: 'hover:border-neutral-300'
    },
    {
      value: 'silver' as const,
      label: 'Silver',
      count: memberCounts.silver,
      activeClass: 'bg-brand-blue border-brand-blue text-white',
      hoverClass: 'hover:border-brand-blue'
    },
    {
      value: 'gold' as const,
      label: 'Gold',
      count: memberCounts.gold,
      activeClass: 'bg-brand-yellow border-brand-yellow text-black',
      hoverClass: 'hover:border-brand-yellow'
    },
    {
      value: 'platinum' as const,
      label: 'Platinum',
      count: memberCounts.platinum,
      activeClass: 'bg-brand-yellow border-brand-yellow text-black',
      hoverClass: 'hover:border-brand-yellow'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onLevelChange(filter.value)}
          className={`
            relative px-4 py-2 rounded-lg border transition-colors
            ${selectedLevel === filter.value
              ? filter.activeClass
              : `bg-black border-white/20 ${filter.hoverClass} text-neutral-300`
            }
          `}
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm uppercase tracking-wide">{filter.label}</span>
            <span className={`
              px-2 py-0.5 rounded-md text-xs font-bold
              ${selectedLevel === filter.value
                ? 'bg-black/20 text-inherit'
                : 'bg-white/10 text-neutral-400'
              }
            `}>
              {filter.count}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MembersFilter;
