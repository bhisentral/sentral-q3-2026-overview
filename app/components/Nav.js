"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#network", label: "Network" },
  { href: "#partners", label: "Partners" },
  { href: "#leadership", label: "Leadership" },
  { href: "#dial", label: "Value Creation" },
  { href: "#track-record", label: "Track Record" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <span className="nav-logo">SEN+RAL</span>
      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
