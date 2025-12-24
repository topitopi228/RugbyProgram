import React from 'react';
import { motion } from 'framer-motion';
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
      value: totalMembers,
      color: 'from-amber-400 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-600/10'
    },
    {
      icon: <FaCrown className="text-xl" />,
      label: 'Вільні місця',
      value: availableSlots,
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'from-indigo-500/10 to-indigo-600/10'
    },
    {
      icon: <FaChartLine className="text-xl" />,
      label: 'Заповненість',
      value: `${totalMembers}%`,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10'
    },
    {
      icon: <FaTrophy className="text-xl" />,
      label: 'Мета клубу',
      value: 100,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative group"
        >
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}>
                {stat.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              
              <p className="text-xs text-gray-400">
                {stat.label}
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-2xl">
              <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${stat.color} opacity-20 rotate-45`} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MembersStats;
