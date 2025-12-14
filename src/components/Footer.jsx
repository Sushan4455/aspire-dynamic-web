// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      {/* Top section */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-400/40 text-sm font-semibold">
                AC
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Aspire Career
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Study • Career • Growth
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md">
              Helping students and professionals move confidently towards their
              dream universities, careers, and global opportunities with
              personalized guidance and practical support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="/about" className="hover:text-emerald-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-emerald-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-emerald-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-emerald-400">
                  Blog / Updates
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-200">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p className="leading-relaxed">
                {/* Replace with your real address */}
                Put your office address here<br />
                (e.g. New Baneshwor, Kathmandu)
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+9770000000000" className="hover:text-emerald-400">
                  +977-0000000000
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@aspire.edu.np"
                  className="hover:text-emerald-400"
                >
                  info@aspire.edu.np
                </a>
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  f
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  ig
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  tt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Aspire Career. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy-policy" className="hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-emerald-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
