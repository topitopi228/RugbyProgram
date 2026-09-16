import React from 'react';
import type { ClubMember } from '../../../data/clubMembers';

interface PlatinumMemberCardProps {
  member: ClubMember;
}

const PlatinumMemberCard: React.FC<PlatinumMemberCardProps> = ({ member }) => {
  return (
    <div
      className="h-full w-full rounded-lg border border-brand-yellow hover:border-yellow-300 hover:-translate-y-1 transition-all duration-200
        bg-neutral-950 flex flex-col items-center justify-center p-3 relative"
    >
      {/* Membership Badge */}
      <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-brand-yellow" />

      {/* Photo Container */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border border-brand-yellow/60 mb-2">
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
      <div className="mt-1 text-[9px] sm:text-xs md:text-sm font-bold text-center text-brand-yellow">
        PLATINUM
      </div>
    </div>
  );
};

export default PlatinumMemberCard;
