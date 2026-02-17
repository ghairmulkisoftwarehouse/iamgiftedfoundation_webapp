'use client'
import { badgeSvgMap } from '@/constants/badgeConstants';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

const UserBadge = () => {
  const { userBadge } = useSelector(state => state.badge);

  const allTiers = userBadge?.allTiers || [];
  const lifetimeTotal = userBadge?.lifetimeTotal ?? 0;

  const getBadgeInfo = () => {
    if (!allTiers.length) return {};

    if (lifetimeTotal < allTiers[0].min) {
      return {
        current: null,
        next: allTiers[0],
        progress: Math.min((lifetimeTotal / allTiers[0].min) * 100, 100),
      };
    }

    for (let i = 0; i < allTiers.length; i++) {
      const tier = allTiers[i];
      const nextTier = allTiers[i + 1] || null;

      if (
        lifetimeTotal >= tier.min &&
        (tier.max === null || lifetimeTotal <= tier.max)
      ) {
        const progress = nextTier
          ? ((lifetimeTotal - tier.min) / (nextTier.min - tier.min)) * 100
          : 100;

        return {
          current: tier,
          next: nextTier,
          progress: Math.max(0, Math.min(progress, 100)),
        };
      }
    }

    return {};
  };

  const { current, next, progress } = getBadgeInfo();

  // ONLY render current + next
  const visibleBadges = [current, next].filter(Boolean).map(item => ({
    title: item.name,
    min: item.min,
    Svg: badgeSvgMap[item.min],
  }));



  const getTitle = () => {
  if (!current && next) {
    return "Start earning your first badge";
  }

  if (current && next) {
    return "You’re progressing toward your next badge";
  }

  if (current && !next) {
    return "You’ve reached the highest badge 🎉";
  }

  return "My Badges";
};

  return (
    <div className=" gap-6 w-full px-5 md:container mx-auto  flex flex-col gap-5">
    
  <div className=' flex flex-row justify-between w-full'>

    <p className="text-sm text-black font-semibold md:text-base lg:text-lg pt-3.5 capitalize">
  {getTitle()}
</p>

   <button className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
    <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
    <span className="btn-animated-text text-gray-800 group-hover:text-gray-900 ">
Achieved Badges   
 </span>
  </button>
  </div>
  
    <div className='flex flex-wrap   w-full'>
     {visibleBadges.map((badge, index) => {
        const BadgeSvg = badge.Svg;
        if (!BadgeSvg) return null;

        const isCurrent = current && badge.min === current.min;
        const isNext = badge.min === next?.min;
        return (
          <motion.div
            key={badge.min}
            className={`flex flex-col items-center gap-3 p-5 rounded-[22px]
              ${isCurrent ? 'border-4 border-blue-500' : ''}
              ${!current && isNext ? 'border-4 border-dashed border-blue-400' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold">{badge.title}</h3>

            <BadgeSvg className="w-[240px] h-[240px]" />

            {isNext && (
              <div className="w-full mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
    
    </div>
  );
};

export default UserBadge;
