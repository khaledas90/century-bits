"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TiktokLogoIcon, XLogoIcon } from "@phosphor-icons/react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050315] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
              <Link href="/" className="inline-block mb-4">
                <span className="text-xl font-bold">
                  <span className="text-white/50">Century</span>
                  <span className="text-white">bits</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Build the future with AI-powered tools and components designed
                for modern developers.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-gray-500 text-sm hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              © 2026 Century bits. All rights reserved.
            </motion.p>
            <div className="flex items-center gap-4">
              {[
                { icon: <XLogoIcon size={20} />, href: "#" },
                { icon: <FacebookLogoIcon size={20} />, href: "#" },
                { icon: <TiktokLogoIcon size={20} />, href: "#" },
                { icon: <InstagramLogoIcon size={20} />, href: "#" },
                { icon: <LinkedinLogoIcon size={20} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-gray-600 hover:text-purple-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}