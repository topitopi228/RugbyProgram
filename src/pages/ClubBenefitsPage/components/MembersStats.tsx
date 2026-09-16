import React from 'react';
import { FaUsers, FaCrown, FaChartLine, FaTrophy } from 'react-icons/fa';

interface MembersStatsProps {
  totalMembers: number;
  availableSlots: number;
}

const MembersStats: React.FC<MembersStatsProps> = ({ totalMembers, availableSlots }) => {
  const stats = [
    {
      icon: <FaUsers className="text-xl" />,
      label: 'Активні члени',
      value: totalMembers
    },
    {
      icon: <FaCrown className="text-xl" />,
      label: 'Вільні місця',
      value: availableSlots
    },
    {
      icon: <FaChartLine className="text-xl" />,
      label: 'Заповненість',
      value: `${totalMembers}%`
    },
    {
      icon: <FaTrophy className="text-xl" />,
      label: 'Мета клубу',
      value: 100
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const isBlue = index % 2 === 1;
        const accentBorder = isBlue ? 'border-brand-blue/40' : 'border-brand-yellow/40';
        const accentHover = isBlue ? 'hover:border-brand-blue' : 'hover:border-brand-yellow';
        const accentText = isBlue ? 'text-brand-blue' : 'text-brand-yellow';
        return (
          <div
            key={index}
            className={`relative bg-neutral-950 rounded-lg p-4 border border-white/10 ${accentHover} hover:-translate-y-1 transition-all duration-200`}
          >
            <div className="relative z-10">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black border ${accentBorder} ${accentText} mb-3`}>
                {stat.icon}
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-1">
                {stat.value}
              </h3>

              <p className="text-xs text-neutral-400">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MembersStats;
