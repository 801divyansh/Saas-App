"use client";
import Link from "next/link"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar flex items-center px-4 py-2 fixed top-0 ">
      {/* Left: Logo */}
      <Link href="/" className="flex-shrink-0">
        <div className="flex items-center gap-2.5 cursor-pointer text-2xl font-bold select-none">
          <span className="text-black">EduBuddy</span>
          <span
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-x 3s ease-in-out infinite',
            }}
          >
            AI
          </span>
        </div>
      </Link>

      <div className="flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavItems />
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Open menu"
            >
              {/* Hamburger icon */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h20M4 14h20M4 21h20" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex lg:ml-5 ">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 flex flex-col p-4 md:hidden">
          <NavItems mobile />
          <div className="flex flex-col gap-2 mt-4">
            <SignedOut>
              <SignInButton>
                <Button className="w-full">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
