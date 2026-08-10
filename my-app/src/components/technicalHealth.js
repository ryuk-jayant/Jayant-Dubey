import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillHealthBar({ 
  skillName = "React.js", 
  level = 85,          // Skill percentage (0 - 100)
  maxHp = 100, 
  rank = "Knight",      // Custom rank badge
  type = "hp",          // "hp" (Green/Red), "mana" (Blue), or "legendary" (Gold)
  icon = ""
}) {
  const [currentHp, setCurrentHp] = useState(0);

  // Trigger smooth fill animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setCurrentHp(level), 200);
    return () => clearTimeout(timer);
  }, [level]);

  // Dynamic color schemes based on skill type or health percentage
  const getColorScheme = () => {
    if (type === "mana") {
      return {
        bar: "bg-gradient-to-r from-cyan-500 to-blue-600",
        glow: "shadow-[0_0_12px_rgba(6,182,212,0.6)]",
        border: "border-cyan-500/30",
        text: "text-cyan-400"
      };
    }
    if (type === "legendary") {
      return {
        bar: "bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500",
        glow: "shadow-[0_0_15px_rgba(251,191,36,0.7)]",
        border: "border-amber-400/40",
        text: "text-amber-300"
      };
    }
   
    // Default HP color scaling (Red -> Yellow -> Green)
    if (level < 40) return {
      bar: "bg-gradient-to-r from-emerald-500 to-teal-400",
      glow: "shadow-[0_0_12px_rgba(16,185,129,0.6)]",
      border: "border-emerald-500/30",
      text: "text-emerald-400"
    };
    if (level < 75) return {
      bar: "bg-gradient-to-r from-yellow-600 to-emerald-500",
      glow: "shadow-[0_0_12px_rgba(234,179,8,0.5)]",
      border: "border-yellow-500/30",
      text: "text-yellow-400"
    };
    return {
       bar: "bg-gradient-to-r from-red-700 to-yellow-500",
      glow: "shadow-[0_0_12px_rgba(239,68,68,0.5)]",
      border: "border-yellow-500/30",
      text: "text-red-400"
    };
  };

  const colors = getColorScheme();

  return (
    <div className="w-full max-w-md my-4 font-mono select-none">
      {/* Top Meta Bar: Name, Icon, Rank & Value */}
      <div className="flex justify-between items-center mb-1.5 text-sm tracking-wider">
        <div className="flex items-center gap-2">
          {/* <span className="text-base">{icon}</span> */}
          <span className="font-bold text-xl text-slate-100 uppercase drop-shadow-md">
            {skillName}
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-500 text-white border border-slate-700">
            {rank}
          </span>
        </div>
        <div className={`font-semibold ${colors.text}`}>
          <span>{currentHp}</span>
          <span className="text-white">/{maxHp} KP</span>
        </div>
      </div>

      {/* Outer Health Bar Frame */}
      <div className={`relative h-6 w-full bg-slate-950 rounded-sm p-0.5 border ${colors.border} rounded-full shadow-inner`}>
        
        {/* Sub-grid stripes overlay for retro pixel arcade feel */}
        <div className="absolute rounded-full inset-0 z-20 pointer-events-none bg-[linear-gradient(90deg,transparent_90%,rgba(0,0,0,0.4)_90%)] bg-[size:12px_100%]" />

        {/* Animated Health Bar Fill */}
        <motion.div
          className={`h-full rounded-full ${colors.bar} ${colors.glow} relative transition-all`}
          initial={{ width: "0%" }}
          animate={{ width: `${currentHp}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Top gloss highlight line */}
          {/* <div className="absolute inset-x-0 top-0 h-[30%] bg-white/25 rounded-t-sm" /> */}
        </motion.div>
      </div>
    </div>
  );
}