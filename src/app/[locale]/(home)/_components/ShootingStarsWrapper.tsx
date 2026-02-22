"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";

export default function ShootingStarsWrapper() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <ShootingStars
        minSpeed={15}
        maxSpeed={35}
        minDelay={2000}
        maxDelay={5000}
        starColor="#8b5cf6"
        trailColor="#6366f1"
        starWidth={12}
        starHeight={2}
      />
    </div>
  );
}
