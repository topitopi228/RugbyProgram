import React, { useState } from 'react';
import type { ClubMember } from '../../../data/clubMembers';
import { getMembershipBorderStyle, getMembershipGradient } from '../../../data/clubMembers';

interface MemberCardProps {
  member: ClubMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
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
          className={`absolute inset-0 w-full h-full rounded-lg border-2 ${borderStyle} 
            bg-gradient-to-br ${gradientStyle} backdrop-blur-sm backface-hidden 
            flex flex-col items-center justify-center p-3 transition-all hover:scale-110`}
        >
          {/* Photo Container */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/30 mb-2">
            <img
              src={member.photo}
              alt={`${member.firstName} ${member.lastName}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.firstName}+${member.lastName}&background=random`;
              }}
            />
          </div>
          
          {/* Name */}
          <div className="text-center">
            <p className="text-white text-xs sm:text-sm md:text-base font-semibold leading-tight">
              {member.firstName}
            </p>
            <p className="text-white/70 text-[11px] sm:text-xs md:text-sm leading-tight">
              {member.lastName}
            </p>
          </div>

          {/* Membership Badge */}
          <div className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${
            member.membershipLevel === 'platinum' ? 'bg-purple-400' :
            member.membershipLevel === 'gold' ? 'bg-amber-500' :
            member.membershipLevel === 'silver' ? 'bg-gray-400' :
            'bg-slate-600'
          } animate-pulse`} />
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg border-2 ${borderStyle} 
            bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
            backdrop-blur-sm rotate-y-180 backface-hidden 
            flex flex-col p-3 transition-all`}
        >
          {/* Position Badge */}
          {member.position && (
            <div className="text-[11px] sm:text-xs md:text-sm text-amber-400 font-semibold mb-1 text-center leading-tight">
              {member.position}
            </div>
          )}

          {/* Join Date */}
          <div className="text-[10px] sm:text-[11px] md:text-xs text-gray-400 mb-3 text-center leading-tight">
            <span className="text-gray-500">Член з:</span>
            <br />
            <span className="text-white/70 text-[11px] sm:text-xs md:text-sm">{formatDate(member.joinDate)}</span>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Membership Level */}
          <div className={`mt-1 text-[10px] sm:text-xs md:text-sm font-bold text-center ${
            member.membershipLevel === 'platinum' ? 'text-purple-400' :
            member.membershipLevel === 'gold' ? 'text-amber-500' :
            member.membershipLevel === 'silver' ? 'text-gray-400' :
            'text-slate-500'
          }`}>
            {member.membershipLevel === 'platinum' ? 'PLATINUM' :
             member.membershipLevel === 'gold' ? 'GOLD' :
             member.membershipLevel === 'silver' ? 'SILVER' :
             'STARTER'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
