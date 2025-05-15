"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-[95%] top-5 max-w-screen-xl mx-auto bg-white shadow-md rounded-2xl relative z-10 mt-4 md:mt-8 px-4 py-4">

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center relative">
        {/* Left: Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="mr-2"></span>
          <Link href="/" className="hover:underline">easy.esl</Link>
        </div>

        {/* Center: Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-[#111827]">
          <Link href="/library" className="hover:underline">Library</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </nav>

        {/* Right: User Actions */}
        <div className="flex items-center space-x-3">
        <SignedIn>
            <UserNameDisplay />
          </SignedIn>

          <SignedOut>
            <Link href="/login">
              <button className="px-3 py-1 rounded-xl bg-[#e5e7eb] text-[#111827] text-sm hover:bg-[#d1d5db] transition">
                Log in
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-3 py-1 rounded-xl bg-black text-white text-sm hover:bg-[#374151] transition">
                Sign up
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>


      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="mr-2">Ⓟ</span>
          <Link href="/" className="hover:underline">easy.esl</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#111827] focus:outline-none"
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="/library" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Library</Link>
          <Link href="/blog" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/changelog" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Changelog</Link>

          {/* User Actions for Mobile */}
          <div className="flex items-center space-x-3">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 rounded-full border-2 border-[#7c3aed] hover:scale-110 transition-transform",
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <Link href="/login">
                <button className="px-3 py-1 rounded-xl bg-[#e5e7eb] text-[#111827] text-sm hover:bg-[#d1d5db] transition">
                  Log in
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-3 py-1 rounded-xl bg-black text-white text-sm hover:bg-[#374151] transition">
                  Sign up
                </button>
              </Link>
            </SignedOut>
          </div>
        </nav>
      )}
    </header>
  );
}
const UserNameDisplay = () => {
  const { user } = useUser();

  return (
    <div className="px-3 py-1 rounded-xl bg-[#e0f2fe] text-[#0c4a6e] text-sm font-semibold">
      {user?.firstName} {user?.lastName}
    </div>
  );
};