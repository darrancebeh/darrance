import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
}

export function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6 text-zinc-400">
      <Icon className="w-4 h-4" />
      <span className="text-xs font-mono uppercase tracking-widest">{title}</span>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-200 to-transparent"></div>
    </div>
  );
}