export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Professional virtual assistant working at desk"
    >
      {/* Background gradient rect */}
      <rect width="520" height="580" fill="hsl(120 30% 96%)" />

      {/* Desk surface */}
      <rect x="40" y="360" width="440" height="16" rx="4" fill="hsl(30 25% 82%)" />
      <rect x="60" y="376" width="400" height="8" rx="2" fill="hsl(30 20% 72%)" />

      {/* Desk legs */}
      <rect x="70" y="384" width="14" height="80" rx="3" fill="hsl(30 20% 72%)" />
      <rect x="436" y="384" width="14" height="80" rx="3" fill="hsl(30 20% 72%)" />

      {/* Monitor stand */}
      <rect x="247" y="316" width="26" height="44" rx="3" fill="hsl(220 15% 65%)" />
      <rect x="222" y="354" width="76" height="8" rx="4" fill="hsl(220 15% 60%)" />

      {/* Monitor body */}
      <rect x="120" y="160" width="280" height="158" rx="10" fill="hsl(220 15% 25%)" />
      <rect x="130" y="170" width="260" height="138" rx="6" fill="hsl(210 40% 14%)" />

      {/* Monitor screen content */}
      <rect x="140" y="178" width="240" height="122" rx="4" fill="hsl(155 40% 18%)" />
      {/* Screen: header bar */}
      <rect x="140" y="178" width="240" height="20" rx="4" fill="hsl(155 45% 22%)" />
      <circle cx="155" cy="188" r="4" fill="hsl(0 65% 60%)" />
      <circle cx="169" cy="188" r="4" fill="hsl(45 90% 60%)" />
      <circle cx="183" cy="188" r="4" fill="hsl(140 60% 50%)" />
      {/* Screen: content lines */}
      <rect x="150" y="210" width="140" height="8" rx="3" fill="hsl(155 50% 60%)" opacity="0.8"/>
      <rect x="150" y="226" width="100" height="6" rx="3" fill="hsl(155 30% 50%)" opacity="0.5"/>
      <rect x="150" y="240" width="120" height="6" rx="3" fill="hsl(155 30% 50%)" opacity="0.5"/>
      <rect x="150" y="254" width="80" height="6" rx="3" fill="hsl(155 30% 50%)" opacity="0.4"/>
      {/* Screen: chart-like element */}
      <rect x="300" y="206" width="14" height="40" rx="2" fill="hsl(155 55% 45%)" opacity="0.7"/>
      <rect x="320" y="218" width="14" height="28" rx="2" fill="hsl(155 55% 55%)" opacity="0.7"/>
      <rect x="340" y="212" width="14" height="34" rx="2" fill="hsl(155 55% 50%)" opacity="0.7"/>
      {/* Screen: bottom bar */}
      <rect x="150" y="280" width="220" height="12" rx="3" fill="hsl(155 35% 28%)" opacity="0.9"/>

      {/* Keyboard */}
      <rect x="155" y="350" width="210" height="12" rx="4" fill="hsl(220 15% 70%)" />
      {/* Keyboard rows */}
      {[0,1,2].map((row) => (
        <g key={row}>
          {Array.from({length: 10}).map((_, i) => (
            <rect
              key={i}
              x={162 + i * 19}
              y={352 + row * 4}
              width="15"
              height="3"
              rx="1"
              fill="hsl(220 15% 80%)"
              opacity="0.8"
            />
          ))}
        </g>
      ))}

      {/* Mouse */}
      <rect x="388" y="348" width="30" height="18" rx="9" fill="hsl(220 15% 68%)" />
      <line x1="403" y1="348" x2="403" y2="366" stroke="hsl(220 15% 80%)" strokeWidth="1.5" />

      {/* Notebook */}
      <rect x="68" y="326" width="72" height="32" rx="3" fill="hsl(40 80% 92%)" />
      <rect x="68" y="326" width="6" height="32" rx="3" fill="hsl(150 40% 35%)" />
      <line x1="80" y1="333" x2="132" y2="333" stroke="hsl(30 30% 70%)" strokeWidth="1" opacity="0.6"/>
      <line x1="80" y1="340" x2="128" y2="340" stroke="hsl(30 30% 70%)" strokeWidth="1" opacity="0.6"/>
      <line x1="80" y1="347" x2="120" y2="347" stroke="hsl(30 30% 70%)" strokeWidth="1" opacity="0.6"/>

      {/* Coffee mug */}
      <rect x="398" y="320" width="36" height="42" rx="5" fill="hsl(35 65% 90%)" />
      <path d="M434 332 Q448 332 448 342 Q448 352 434 352" stroke="hsl(35 40% 70%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <rect x="404" y="320" width="24" height="8" rx="2" fill="hsl(155 35% 38%)" />
      {/* Steam */}
      <path d="M410 312 Q412 306 410 300" stroke="hsl(220 15% 80%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M418 314 Q420 307 418 300" stroke="hsl(220 15% 80%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>

      {/* Person: chair back */}
      <rect x="192" y="410" width="136" height="10" rx="5" fill="hsl(30 20% 68%)" />
      <rect x="204" y="420" width="10" height="60" rx="3" fill="hsl(30 20% 65%)" />
      <rect x="306" y="420" width="10" height="60" rx="3" fill="hsl(30 20% 65%)" />

      {/* Person: body */}
      {/* Torso */}
      <rect x="210" y="390" width="100" height="30" rx="8" fill="hsl(155 35% 35%)" />
      {/* Arms down on desk */}
      <path d="M210 400 Q180 410 172 355" stroke="hsl(215 40% 72%)" strokeWidth="20" fill="none" strokeLinecap="round"/>
      <path d="M310 400 Q340 410 350 355" stroke="hsl(215 40% 72%)" strokeWidth="20" fill="none" strokeLinecap="round"/>
      {/* Hands */}
      <ellipse cx="172" cy="352" rx="14" ry="10" fill="hsl(25 60% 78%)" />
      <ellipse cx="352" cy="352" rx="14" ry="10" fill="hsl(25 60% 78%)" />

      {/* Neck */}
      <rect x="247" y="368" width="26" height="26" rx="6" fill="hsl(25 60% 78%)" />

      {/* Head */}
      <ellipse cx="260" cy="348" rx="38" ry="40" fill="hsl(25 60% 78%)" />

      {/* Hair */}
      <path d="M222 330 Q228 296 260 292 Q292 296 298 330 Q290 316 260 318 Q230 316 222 330Z" fill="hsl(20 35% 22%)" />
      <path d="M222 330 Q218 344 222 356 Q220 342 225 335Z" fill="hsl(20 35% 22%)" />
      <path d="M298 330 Q302 344 298 356 Q300 342 295 335Z" fill="hsl(20 35% 22%)" />

      {/* Face: eyes */}
      <ellipse cx="245" cy="344" rx="5" ry="6" fill="hsl(20 30% 18%)" />
      <ellipse cx="275" cy="344" rx="5" ry="6" fill="hsl(20 30% 18%)" />
      <ellipse cx="247" cy="342" rx="2" ry="2" fill="white" />
      <ellipse cx="277" cy="342" rx="2" ry="2" fill="white" />

      {/* Face: smile */}
      <path d="M248 358 Q260 366 272 358" stroke="hsl(20 30% 40%)" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Shirt collar */}
      <path d="M240 394 L260 382 L280 394" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Plant decoration */}
      <rect x="44" y="320" width="22" height="42" rx="4" fill="hsl(155 40% 38%)" />
      <ellipse cx="55" cy="290" rx="22" ry="32" fill="hsl(140 45% 42%)" />
      <ellipse cx="40" cy="300" rx="16" ry="24" fill="hsl(145 40% 38%)" />
      <ellipse cx="70" cy="298" rx="16" ry="22" fill="hsl(150 42% 40%)" />

      {/* Floating elements — notifications / tasks */}
      <rect x="380" y="136" width="100" height="60" rx="10" fill="white" opacity="0.92" />
      <rect x="390" y="148" width="60" height="7" rx="3" fill="hsl(155 45% 38%)" />
      <rect x="390" y="161" width="80" height="5" rx="2" fill="hsl(220 15% 80%)" />
      <rect x="390" y="172" width="60" height="5" rx="2" fill="hsl(220 15% 80%)" />
      <circle cx="466" cy="151" r="8" fill="hsl(155 45% 38%)" />
      <path d="M462 151 L465 154 L470 148" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Second floating card */}
      <rect x="30" y="150" width="88" height="56" rx="10" fill="white" opacity="0.90" />
      <rect x="42" y="163" width="40" height="7" rx="3" fill="hsl(30 70% 60%)" />
      <rect x="42" y="176" width="64" height="5" rx="2" fill="hsl(220 15% 80%)" />
      <rect x="42" y="187" width="50" height="5" rx="2" fill="hsl(220 15% 80%)" />

      {/* Decorative dots */}
      <circle cx="470" cy="80" r="5" fill="hsl(155 45% 38%)" opacity="0.3"/>
      <circle cx="488" cy="96" r="3" fill="hsl(155 45% 38%)" opacity="0.2"/>
      <circle cx="460" cy="100" r="4" fill="hsl(155 45% 38%)" opacity="0.2"/>

      <circle cx="50" cy="80" r="5" fill="hsl(30 70% 60%)" opacity="0.3"/>
      <circle cx="35" cy="96" r="3" fill="hsl(30 70% 60%)" opacity="0.2"/>
    </svg>
  );
}
