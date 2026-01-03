"use client";

import React, { useEffect, useRef, useState } from "react";

type ScrollHighlightTextProps = {
  children: string;
  className?: string;
  headstartWords?: number; // Number of words to highlight immediately
};

const ScrollHighlightText: React.FC<ScrollHighlightTextProps> = ({
  children,
  className = "",
  headstartWords = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Split text into letters
  const letters = children.split("");

  // Convert headstart in words to letters
  const headstartLetters = headstartWords * 5; // avg 5 letters per word

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // How much of paragraph is visible in viewport
      const scrolled = (windowHeight - rect.top) / (rect.height + windowHeight);

      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Number of letters to highlight
  const highlightCount = Math.floor(progress * letters.length) + headstartLetters;

  return (
    <div ref={containerRef} className={`inline ${className} leading-relaxed`}>
      {letters.map((letter, i) => {
        const opacity =
          i < highlightCount
            ? 1
            : 0.2 + 0.8 * ((i - highlightCount) / letters.length);

        return (
          <span
            key={i}
            className="transition-colors duration-300"
            style={{ color: `rgba(0,0,0,${opacity})` }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default ScrollHighlightText;
