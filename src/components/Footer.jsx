export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-slate-900 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700/50 pb-6">
        {/* Logo + Description */}
        <div className="md:max-w-md">
          {/* You can replace this SVG with your actual logo image if you want */}
          {/* <img src="/path-to-logo.png" alt="Aspire Career Education Consultancy" className="h-10" /> */}
          <h2 className="text-xl font-semibold text-white">
            Aspire Career Education Consultancy
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Aspire Career Education Consultancy helps students from Nepal
            pursue quality education in the UK, Australia, USA, Canada, Japan,
            Dubai, and beyond. From counselling to visa processing, we guide
            you at every step of your study abroad journey.
          </p>
        </div>

        {/* Links + Contact */}
        <div className="flex-1 flex items-start md:justify-end gap-16 md:gap-20">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-white text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/study-abroad" className="hover:text-white transition">
                  Study Destination
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="/training-program" className="hover:text-white transition">
                  Training Program
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-5 text-white text-sm uppercase tracking-wide">
              Get in touch
            </h3>
            <div className="text-sm space-y-2">
              <p className="text-gray-300">
                Sukedhara, Kathmandu, Nepal
              </p>
              <p>
                <span className="block">Phone:</span>
                <a href="tel:01-5925762" className="hover:text-white transition">
                  01-5925762
                </a>
                <span className="block">
                  <a
                    href="tel:+9779851352285"
                    className="hover:text-white transition"
                  >
                    +977-9851352285
                  </a>
                </span>
              </p>
              <p>
                <span className="block">Email:</span>
                <a
                  href="mailto:aspire.acec@gmail.com"
                  className="hover:text-white transition"
                >
                  aspire.acec@gmail.com
                </a>
              </p>
              <p>
                <span className="block">Website:</span>
                <a
                  href="https://aspire.edu.np"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  aspire.edu.np
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-500">
        © {new Date().getFullYear()} Aspire Career Education Consultancy. All rights reserved.
      </p>
    </footer>
  );
};
