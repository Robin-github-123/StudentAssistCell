"use client";

import React, { useState } from "react";

type SidebarButton = {
  id: string;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

type SidebarProps = {
  buttons: SidebarButton[];
  className?: string;
};

function SidebarButton({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      title={title}
      aria-label={title}
      onClick={onClick}
      className="group rounded-xl p-2 text-blue-300 transition hover:bg-blue-500/15 hover:text-white"
    >
      <span className="sr-only">{title}</span>
      <span className="block size-6">{children}</span>
    </button>
  );
}

export default function Sidebar({ buttons, className = "" }: SidebarProps) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      {/* Top button: Down arrow to hide menu (visible only when sidebar is visible) */}
      {sidebarVisible && (
        <button
          onClick={() => setSidebarVisible(false)}
          title="Hide menu"
          aria-label="Hide menu"
          className={`fixed right-7 top-24 z-40 rounded-full bg-slate-900/80 p-3 text-blue-400 shadow-lg ring-1 ring-white/10 transition hover:bg-slate-900/90 hover:text-blue-300 ${className}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M12 4.5a.75.75 0 0 1 .75.75v11.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 1.06-1.06l3.72 3.72V5.25A.75.75 0 0 1 12 4.5Z" />
          </svg>
        </button>
      )}

      {/* Vertical rail */}
      {sidebarVisible && (
        <aside className={`fixed right-4 top-1/2 z-40 -translate-y-1/2 ${className}`}>
          <div className="flex flex-col items-center gap-3 rounded-[1.5rem] bg-slate-900/80 p-3 ring-1 ring-white/10 shadow-2xl">
            {buttons.map((button) => (
              <SidebarButton key={button.id} title={button.title} onClick={button.onClick}>
                {button.icon}
              </SidebarButton>
            ))}
          </div>
        </aside>
      )}

      {/* Bottom button: Up arrow to restore menu (visible only when sidebar is hidden) */}
      {!sidebarVisible && (
        <button
          onClick={() => setSidebarVisible(true)}
          title="Show menu"
          aria-label="Show menu"
          className={`fixed bottom-6 right-5 z-40 rounded-full bg-slate-900/80 p-3 text-blue-400 shadow-lg ring-1 ring-white/10 transition hover:bg-slate-900/90 hover:text-blue-300 ${className}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M12 19.5a.75.75 0 0 1-.75-.75V7.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v11.69a.75.75 0 0 1-.75.75Z" />
          </svg>
        </button>
      )}
    </>
  );
}

// Export the SidebarButton type for use in other components
export type { SidebarButton };
