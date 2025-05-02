"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const menuItems = {
    Company: [
      { name: "Metabank inc.", path: "/metabank" },
      { name: "Team", path: "/team" },
      { name: "Technology", path: "/technology" },
      { name: "Location", path: "/location" },
      { name: "News", path: "/news" },
    ],
    Product: [
      { name: "Meta Vision", path: "/meta-vision" },
      { name: "Meta 360", path: "/meta-360" },
      { name: "Meta Pano", path: "/meta-pano" },
      { name: "Meta Action", path: "/meta-action" },
      { name: "Meta Eye", path: "/meta-eye" },
      { name: "Meta Capture", path: "/meta-capture" },
    ],
    Service: [
      { name: "Real Meta", path: "/real-meta" },
      { name: "Metaverse Shopping Mall", path: "/metaverse-shopping-mall" },
      { name: "Metaverse Museum", path: "/metaverse-museum" },
      { name: "Interaction Content", path: "/interaction-content" },
    ],
    Business: [
      { name: "Shopping / Retail", path: "/shopping-retail" },
      { name: "Museum", path: "/museum" },
      { name: "Real Estate", path: "/real-estate" },
      {
        name: "Architecture, Construction, Engineering",
        path: "/architecture-construction-engineering",
      },
      { name: "Insurance", path: "/insurance" },
      { name: "Facility Management", path: "/facility-management" },
    ],
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* 로고 */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              {scrolled ? (
                <Image
                  src="/Layout/logo-dark.svg"
                  alt="MetaBank3D 로고"
                  width={150}
                  height={50}
                />
              ) : (
                <Image
                  src="/Layout/logo-light.svg"
                  alt="MetaBank3D 로고"
                  width={150}
                  height={50}
                />
              )}
            </Link>
          </motion.div>

          {/* 데스크톱 네비게이션 */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-sm lg:text-base ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {Object.entries(menuItems).map(([title, items]) => (
              <div
                key={title}
                className="relative group"
                onMouseEnter={() => setActiveMenu(title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1"
                >
                  {title}
                  <ChevronDown size={16} />
                </motion.button>

                <AnimatePresence>
                  {activeMenu === title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg py-2"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          {/* 추가 로고 */}
          <div className="hidden md:flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact">
                {scrolled ? (
                  <Image
                    src="/Layout/vision_logo.svg"
                    alt="MetaBank3D 로고"
                    width={150}
                    height={50}
                  />
                ) : (
                  <Image
                    src="/Layout/vision_logo_white.svg"
                    alt="MetaBank3D 로고"
                    width={150}
                    height={50}
                  />
                )}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact">
                {scrolled ? (
                  <Image
                    src="/Layout/metabank360_dark.png"
                    alt="MetaBank360 로고"
                    width={150}
                    height={50}
                  />
                ) : (
                  <Image
                    src="/Layout/metabank360.svg"
                    alt="MetaBank360 로고"
                    width={150}
                    height={50}
                  />
                )}
              </Link>
            </motion.div>
          </div>
          {/* 모바일 메뉴 버튼 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4 z-50"
            >
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-lg p-4">
                <div className="flex flex-col space-y-4">
                  {Object.entries(menuItems).map(([title, items]) => (
                    <div key={title} className="space-y-2">
                      <button
                        className="flex items-center justify-between w-full text-gray-900 dark:text-white text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() =>
                          setActiveMenu(activeMenu === title ? null : title)
                        }
                      >
                        <span>{title}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            activeMenu === title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeMenu === title && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="pl-4 space-y-2 border-l-2 border-blue-500/30 dark:border-blue-400/30"
                          >
                            {items.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
