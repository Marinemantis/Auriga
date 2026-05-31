export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-3">
              <span
                className="font-cormorant text-2xl font-semibold text-[#F5F0E8]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Auriga
              </span>
              <span
                className="font-cormorant text-2xl font-light text-[#C8903A]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ventures
              </span>
            </div>
            <p
              className="text-[#F5F0E8]/35 text-sm italic font-cormorant"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Beyond Travel. We Curate Dreams.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Destinations", href: "#destinations" },
                { label: "Philosophy", href: "#philosophy" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F5F0E8]/45 hover:text-[#C8903A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Follow Us
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/aurigaventures/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 border border-[#222222] flex items-center justify-center text-[#F5F0E8]/40 hover:border-[#C8903A]/50 hover:text-[#C8903A] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/AurigaVentures/61576182084718/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 border border-[#222222] flex items-center justify-center text-[#F5F0E8]/40 hover:border-[#C8903A]/50 hover:text-[#C8903A] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/auriga-ventures-b04192362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 border border-[#222222] flex items-center justify-center text-[#F5F0E8]/40 hover:border-[#C8903A]/50 hover:text-[#C8903A] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-xs text-[#F5F0E8]/25"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            © {currentYear} Auriga Ventures. Gilgit, Pakistan.
          </p>
          <p
            className="text-xs text-[#F5F0E8]/20"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Unique. Different. Daring.
          </p>
        </div>
      </div>
    </footer>
  );
}
