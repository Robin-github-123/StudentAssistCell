"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  active?: "home" | string;
};

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="rounded-xl p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
    >
      <span className="block size-5">{children}</span>
    </Link>
  );
}

export default function NavBar({ active = "home" }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
        <Image
          src="/ksulogo.png"
          alt="KSU Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
          <span className="text-lg font-semibold text-cyan-300">KSU</span>
          <span className="text-lg font-semibold text-white">Student Assist Cell</span>
        </Link>

        <nav className="flex items-center gap-3">
          {/* Home pill */}
          <Link
            href="/"
            className={
              active === "home"
                ? "rounded-full bg-blue-600/90 px-4 py-1.5 text-white shadow-md ring-1 ring-white/10"
                : "rounded-full px-4 py-1.5 text-white/80 hover:text-white hover:bg-white/10"
            }
          >
            Home
          </Link>

          {/* Icons row */}
          <div className="ml-1 flex items-center gap-3 text-white/90">
            {/* Home icon */}
            <IconButton href="/" label="Home">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M11.47 2.97a.75.75 0 0 1 1.06 0l8.25 8.25a.75.75 0 1 1-1.06 1.06L20 11.56V19.5A2.25 2.25 0 0 1 17.75 21.75h-2.5a.25.25 0 0 1-.25-.25v-5a2.75 2.75 0 0 0-5.5 0v5a.25.25 0 0 1-.25.25h-2.5A2.25 2.25 0 0 1 4 19.5v-7.94l-.72.72a.75.75 0 1 1-1.06-1.06l8.25-8.25Z" />
              </svg>
            </IconButton>
            {/* Book */}
            <IconButton href="#" label="General info">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5A2.25 2.25 0 0 1 19.5 5.25v13.5a.75.75 0 0 1-1.2.6l-1.8-1.35-1.8 1.35a.75.75 0 0 1-.9 0L12 18l-1.8 1.35a.75.75 0 0 1-.9 0L7.5 18l-1.8 1.35a.75.75 0 0 1-1.2-.6V5.25Z" />
              </svg>
            </IconButton>
            {/* Open book */}
            <IconButton href="#" label="Study">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 6.75c-1.768-1.228-3.88-1.5-6-.75a.75.75 0 0 0-.5.71v9.03a.75.75 0 0 0 1.01.71c1.86-.62 3.71-.42 5.49.59.47.27 1.03.27 1.5 0 1.78-1.01 3.63-1.21 5.49-.59a.75.75 0 0 0 1.01-.71V6.71a.75.75 0 0 0-.5-.71c-2.12-.75-4.23-.48-6 .75Z" />
              </svg>
            </IconButton>
            {/* Document */}
            <IconButton href="#" label="Documents">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M19.5 3.75h-9A2.25 2.25 0 0 0 8.25 6v12A2.25 2.25 0 0 0 10.5 20.25h9A2.25 2.25 0 0 0 21.75 18V6A2.25 2.25 0 0 0 19.5 3.75Z" />
                <path d="M3.75 6.75A.75.75 0 0 1 4.5 6h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0 3A.75.75 0 0 1 4.5 9h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" />
              </svg>
            </IconButton>
            {/* List */}
            <IconButton href="#" label="List">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
              </svg>
            </IconButton>
            {/* Graduate */}
            <IconButton href="#" label="Allotment">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                <path d="M1.5 20.25a9 9 0 1 1 21 0v.75H1.5v-.75Z" />
              </svg>
            </IconButton>
            {/* Cap */}
            <IconButton href="#" label="Academics">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 3 1.5 9l10.5 6 9-5.143V18h1.5V9L12 3Z" />
              </svg>
            </IconButton>
            {/* Info */}
            <IconButton href="#" label="Info">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm.75 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 10.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75V15h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V10.5Z" />
              </svg>
            </IconButton>
            {/* Calendar */}
            <IconButton href="#" label="Calendar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M6.75 3.75a.75.75 0 0 1 .75.75V6h9V4.5a.75.75 0 0 1 1.5 0V6h.75A2.25 2.25 0 0 1 21 8.25v9A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25v-9A2.25 2.25 0 0 1 5.25 6H6V4.5a.75.75 0 0 1 .75-.75Z" />
              </svg>
            </IconButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
