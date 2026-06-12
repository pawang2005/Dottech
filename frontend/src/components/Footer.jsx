import { Link } from "react-router-dom";
import { contactDetails, googleFormLink } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            DotTech Academy
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Practical computer education with a future-ready focus on Generative
            AI and emerging digital skills.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link to="/courses" className="hover:text-white">
              Courses
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a
              href={googleFormLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Contact
          </p>
          <p className="mt-4 text-sm text-slate-300">{contactDetails.phone}</p>
          <p className="mt-4 text-sm text-slate-300">{contactDetails.email}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
            {contactDetails.address}
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        © {new Date().getFullYear()} DotTech Academy. All rights reserved.
      </div>
    </footer>
  );
}
