import React, { useState } from 'react';
import type { ClubMember } from '../../../data/clubMembers';
import { getMembershipBorderStyle, getMembershipGradient } from '../../../data/clubMembers';

interface PlatinumMemberCardProps {
  member: ClubMember;
}

const PlatinumMemberCard: React.FC<PlatinumMemberCardProps> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('uk-UA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const borderStyle = getMembershipBorderStyle(member.membershipLevel);
  const gradientStyle = getMembershipGradient(member.membershipLevel);

  return (
    <div className="h-full w-full perspective-1000">
      <div
        className={`relative h-full w-full transition-all duration-500 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg border-[3px] ${borderStyle} 
            bg-gradient-to-br ${gradientStyle} backdrop-blur-sm backface-hidden 
            flex flex-col items-center justify-center p-3 transition-all hover:scale-110 relative overflow-hidden`}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" 
               style={{
                 animation: 'shimmer 3s ease-in-out infinite'
               }} />
          
          {/* Photo Container */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-[#a78bfa]/40 mb-2 relative">
            <img
              src={member.photo}
              alt={`${member.firstName} ${member.lastName}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.firstName}+${member.lastName}&background=random`;
              }}
            />
            {/* Glowing ring around photo */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-pulse" />
          </div>
          
          {/* Name */}
          <div className="text-center relative z-10">
            <p className="text-white text-xs sm:text-sm md:text-base font-semibold leading-tight drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]">
              {member.firstName}
            </p>
            <p className="text-white/70 text-[11px] sm:text-xs md:text-sm leading-tight">
              {member.lastName}
            </p>
          </div>

          {/* Membership Badge with extra sparkle */}
          <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,0.9)] animate-pulse" />
          
          {/* Corner sparkles */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg border-[3px] ${borderStyle} 
            bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
            backdrop-blur-sm rotate-y-180 backface-hidden 
            flex flex-col items-center justify-center p-2 sm:p-3 transition-all overflow-hidden`}
        >
          {/* Position Badge */}
          {member.position && (
            <div className="text-[7px] sm:text-[9px] md:text-xs text-amber-400 font-semibold mb-0.5 sm:mb-1 text-center leading-[1.1] px-1 break-words max-w-full">
              {member.position}
            </div>
          )}

          {/* Join Date */}
          <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 mb-0.5 sm:mb-1 text-center leading-tight px-1">
            <span className="text-gray-500">Член з:</span>
            <br />
            <span className="text-white/70 text-[8px] sm:text-[10px] md:text-xs whitespace-nowrap">{formatDate(member.joinDate)}</span>
          </div>

          {/* Membership Level */}
          <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-xs md:text-sm font-bold text-center text-[#c4b5fd] drop-shadow-[0_0_8px_rgba(196,181,253,0.6)]">
            PLATINUM
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatinumMemberCard;
