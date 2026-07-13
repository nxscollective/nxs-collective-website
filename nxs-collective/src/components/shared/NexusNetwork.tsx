/**
 * Decorative "nexus" network — a central node connected to three outer
 * nodes (Physiotherapy / Sports Therapy / Personal Training), rendered as
 * a faint line-and-node graphic. Purely decorative (aria-hidden) and
 * absolutely positioned by the parent; it never affects layout.
 */
export default function NexusNetwork({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className="nexus-line" strokeWidth="1">
        <line x1="400" y1="300" x2="140" y2="120" />
        <line x1="400" y1="300" x2="660" y2="120" />
        <line x1="400" y1="300" x2="400" y2="520" />
        <line x1="140" y1="120" x2="660" y2="120" strokeOpacity="0.25" />
        <line x1="140" y1="120" x2="400" y2="520" strokeOpacity="0.25" />
        <line x1="660" y1="120" x2="400" y2="520" strokeOpacity="0.25" />
      </g>

      {/* Fine grid dots along the connecting lines, biomechanics-style */}
      <g fill="#7C8794" fillOpacity="0.35">
        <circle cx="270" cy="210" r="2" />
        <circle cx="530" cy="210" r="2" />
        <circle cx="400" cy="410" r="2" />
      </g>

      {/* Central node */}
      <circle cx="400" cy="300" r="7" fill="#BCA687" />
      <circle
        cx="400"
        cy="300"
        r="16"
        stroke="#BCA687"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {/* Outer nodes */}
      <circle cx="140" cy="120" r="5" fill="#C9CDD3" />
      <circle cx="660" cy="120" r="5" fill="#C9CDD3" />
      <circle cx="400" cy="520" r="5" fill="#C9CDD3" />
    </svg>
  );
}
