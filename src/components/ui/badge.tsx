import React from 'react';

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 text-zinc-600 border border-zinc-200">
      {children}
    </span>
  );
}