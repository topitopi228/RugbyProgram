import React from 'react';
import type { ClubMember } from '../../../data/clubMembers';

interface MemberCardProps {
  member: ClubMember;
}

const levelLabel = (level: ClubMember['membershipLevel']) => {
  switch (level) {
    case 'platinum':
      return 'PLATINUM';
    case 'gold':
      return 'GOLD';
    case 'silver':
      return 'SILVER';
    default:
      return 'STARTER';
  }
};

const levelDotColor = (level: ClubMember['membershipLevel']) => {
  switch (level) {
    case 'platinum':
      return 'bg-brand-yellow';
    case 'gold':
      return 'bg-brand-yellow';
    case 'silver':
      return 'bg-brand-blue';
    default:
      return 'bg-neutral-600';
  }
};

// Gold/Platinum tiers get the brand-yellow accent, Silver gets brand-blue,
// Starter stays neutral — gives the grid some visual variety.
const levelAccentColor = (level: ClubMember['membershipLevel']) => {
  switch (level) {
    case 'platinum':
    case 'gold':
      return 'text-brand-yellow';
    case 'silver':
      return 'text-brand-blue';
    default:
      return 'text-neutral-400';
  }
};

const levelHoverBorder = (level: ClubMember['membershipLevel']) => {
  switch (level) {
    case 'silver':
      return 'hover:border-brand-blue';
    default:
      return 'hover:border-brand-yellow';
  }
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div
      className={`h-full w-full rounded-lg border border-white/10 ${levelHoverBorder(member.membershipLevel)} hover:-translate-y-1 transition-all duration-200
        bg-neutral-950 flex flex-col items-center justify-center p-3 relative`}
    >
      {/* Membership Badge */}
      <div className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${levelDotColor(member.membershipLevel)}`} />

      {/* Photo Container */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border border-white/20 mb-2">
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
        <p className="text-neutral-400 text-[11px] sm:text-xs md:text-sm leading-tight">
          {member.lastName}
        </p>
      </div>

      {/* Membership Level */}
      <div className={`mt-1 text-[9px] sm:text-xs md:text-sm font-bold text-center ${levelAccentColor(member.membershipLevel)}`}>
        {levelLabel(member.membershipLevel)}
      </div>
    </div>
  );
};

export default MemberCard;
