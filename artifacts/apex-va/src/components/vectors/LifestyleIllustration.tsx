export function LifestyleIllustration() {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Entrepreneur enjoying free time with coffee"
    >
      {/* Background */}
      <rect width="480" height="400" fill="hsl(120 30% 96%)" />

      {/* Window / light source top right */}
      <rect x="300" y="0" width="180" height="220" rx="0" fill="hsl(45 80% 95%)" opacity="0.6"/>
      <line x1="390" y1="0" x2="390" y2="220" stroke="hsl(30 20% 70%)" strokeWidth="3"/>
      <line x1="300" y1="110" x2="480" y2="110" stroke="hsl(30 20% 70%)" strokeWidth="3"/>
      {/* Window sill */}
      <rect x="295" y="218" width="185" height="8" rx="2" fill="hsl(30 20% 72%)" />

      {/* Chair / sofa */}
      <rect x="60" y="250" width="280" height="120" rx="20" fill="hsl(155 25% 70%)" />
      <rect x="60" y="220" width="280" height="50" rx="14" fill="hsl(155 28% 76%)" />
      {/* Chair arms */}
      <rect x="48" y="230" width="28" height="100" rx="10" fill="hsl(155 28% 68%)" />
      <rect x="324" y="230" width="28" height="100" rx="10" fill="hsl(155 28% 68%)" />
      {/* Cushion detail */}
      <ellipse cx="200" cy="265" rx="110" ry="16" fill="hsl(155 22% 74%)" opacity="0.6"/>

      {/* Side table */}
      <rect x="360" y="300" width="80" height="8" rx="4" fill="hsl(30 25% 75%)" />
      <rect x="372" y="308" width="10" height="62" rx="3" fill="hsl(30 20% 68%)" />
      <rect x="418" y="308" width="10" height="62" rx="3" fill="hsl(30 20% 68%)" />

      {/* Coffee mug on table */}
      <rect x="378" y="276" width="44" height="28" rx="6" fill="hsl(35 65% 92%)" />
      <path d="M422 283 Q435 283 435 291 Q435 299 422 299" stroke="hsl(35 40% 72%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="382" y="276" width="36" height="8" rx="3" fill="hsl(155 35% 38%)" />
      {/* Steam wisps */}
      <path d="M389 268 Q391 262 389 256" stroke="hsl(220 15% 75%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M398 270 Q400 263 398 256" stroke="hsl(220 15% 75%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>

      {/* Person sitting */}
      {/* Legs */}
      <path d="M140 320 Q145 350 130 370" stroke="hsl(215 40% 58%)" strokeWidth="30" fill="none" strokeLinecap="round"/>
      <path d="M230 320 Q235 350 250 370" stroke="hsl(215 40% 58%)" strokeWidth="30" fill="none" strokeLinecap="round"/>
      {/* Feet */}
      <ellipse cx="128" cy="373" rx="20" ry="10" fill="hsl(20 30% 25%)" />
      <ellipse cx="252" cy="373" rx="20" ry="10" fill="hsl(20 30% 25%)" />

      {/* Body/torso */}
      <rect x="142" y="218" width="100" height="110" rx="20" fill="hsl(38 65% 88%)" />
      {/* Shirt detail */}
      <path d="M185 218 L192 236 L199 218" stroke="hsl(38 45% 72%)" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Left arm: relaxed on chair arm, holding phone */}
      <path d="M142 260 Q110 270 96 265" stroke="hsl(25 60% 76%)" strokeWidth="22" fill="none" strokeLinecap="round"/>
      {/* Phone in left hand */}
      <rect x="78" y="254" width="22" height="36" rx="5" fill="hsl(220 15% 22%)" />
      <rect x="81" y="258" width="16" height="26" rx="2" fill="hsl(210 60% 60%)" />
      {/* Right arm: up, resting on sofa back, relaxed */}
      <path d="M242 250 Q290 230 308 232" stroke="hsl(25 60% 76%)" strokeWidth="22" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="178" y="194" width="28" height="28" rx="7" fill="hsl(25 60% 78%)" />

      {/* Head */}
      <ellipse cx="192" cy="168" rx="44" ry="46" fill="hsl(25 60% 78%)" />

      {/* Hair */}
      <path d="M148 156 Q155 118 192 112 Q229 118 236 156 Q226 136 192 138 Q158 136 148 156Z" fill="hsl(20 35% 22%)" />

      {/* Face: eyes — relaxed/happy, slight squint */}
      <path d="M174 162 Q179 158 184 162" stroke="hsl(20 30% 18%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M200 162 Q205 158 210 162" stroke="hsl(20 30% 18%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Face: smile — big */}
      <path d="M176 176 Q192 190 208 176" stroke="hsl(20 30% 38%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Decorative plant left side */}
      <rect x="18" y="300" width="24" height="70" rx="4" fill="hsl(155 40% 38%)" />
      <ellipse cx="30" cy="268" rx="26" ry="38" fill="hsl(145 45% 42%)" />
      <ellipse cx="12" cy="282" rx="18" ry="26" fill="hsl(140 40% 38%)" />
      <ellipse cx="50" cy="278" rx="20" ry="30" fill="hsl(150 42% 40%)" />
      {/* Pot */}
      <rect x="14" y="366" width="32" height="18" rx="4" fill="hsl(30 45% 58%)" />

      {/* Floating UI elements / notifications showing freedom */}
      {/* Check badge */}
      <rect x="340" y="108" width="100" height="50" rx="10" fill="white" opacity="0.92"/>
      <circle cx="358" cy="133" r="12" fill="hsl(140 55% 50%)" />
      <path d="M352 133 L356 137 L364 127" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="376" y="124" width="52" height="7" rx="3" fill="hsl(220 15% 80%)" />
      <rect x="376" y="137" width="38" height="6" rx="3" fill="hsl(220 15% 85%)" />

      {/* Calendar task completed */}
      <rect x="348" y="168" width="86" height="46" rx="10" fill="white" opacity="0.88"/>
      <rect x="358" y="178" width="18" height="18" rx="3" fill="hsl(155 45% 38%)" />
      <path d="M362 187 L366 191 L372 182" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="382" y="179" width="42" height="6" rx="3" fill="hsl(220 15% 80%)" />
      <rect x="382" y="191" width="32" height="6" rx="3" fill="hsl(220 15% 85%)" />

      {/* Decorative circles */}
      <circle cx="446" cy="52" r="6" fill="hsl(155 45% 38%)" opacity="0.25"/>
      <circle cx="462" cy="68" r="4" fill="hsl(155 45% 38%)" opacity="0.15"/>
      <circle cx="432" cy="66" r="4" fill="hsl(30 70% 60%)" opacity="0.2"/>

      {/* Floor */}
      <rect x="0" y="370" width="480" height="30" rx="0" fill="hsl(30 20% 85%)" opacity="0.5"/>
    </svg>
  );
}
