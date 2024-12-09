'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, isActive = false, onClick }) => {
  return (
    <Link 
      href={href} 
      className={`block py-2 px-4 hover:text-yellow-400 transition-colors ${isActive ? 'text-yellow-400' : ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white">
    <div className="container mx-auto px-4 lg:px-20">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg md:text-xl lg:text-2xl font-bold">
          <Link href="/">
            <h1>Foodtuck</h1>
          </Link>
        </div>
  
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <NavItem href="/" isActive>Home</NavItem>
          <NavItem href="/Menu">Menu</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/pages">Pages</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/shop">Shop</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </nav>
  
        {/* Icons and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-white hover:text-yellow-400">
            <Search size={20} />
          </button>
          <button aria-label="User profile" className="text-white hover:text-yellow-400">
            <User size={20} />
          </button>
          <button aria-label="Shopping cart" className="text-white hover:text-yellow-400">
            <ShoppingCart size={20} />
          </button>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white hover:text-yellow-400"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
  
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:flex lg:hidden bg-black border-t border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <NavItem href="/" isActive onClick={toggleMenu}>Home</NavItem>
            <NavItem href="/Menu" onClick={toggleMenu}>Menu</NavItem>
            <NavItem href="/blog" onClick={toggleMenu}>Blog</NavItem>
            <NavItem href="/pages" onClick={toggleMenu}>Pages</NavItem>
            <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
            <NavItem href="/shop" onClick={toggleMenu}>Shop</NavItem>
            <NavItem href="/contact" onClick={toggleMenu}>Contact</NavItem>
          </div>
        </nav>
      )}
    </div>
  </header>
  
  )
}

export default Header
