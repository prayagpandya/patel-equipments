'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  className = '',
  onClick,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
