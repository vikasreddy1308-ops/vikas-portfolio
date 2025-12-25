import { Github, Linkedin, Mail, Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* IDENTITY */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100">
              Vikas Reddy Meka
            </h3>
            <p className="text-slate-400 mt-1">
              Computer Science Undergraduate · IIT Patna
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-5">
            <FooterLink
              href="https://github.com/vikasreddy1308-ops"
              label="GitHub"
              icon={<Github size={18} />}
            />
            <FooterLink
              href="https://www.linkedin.com/in/vikas-reddy-b6ab8b397"
              label="LinkedIn"
              icon={<Linkedin size={18} />}
            />
            <FooterLink
              href="https://codeforces.com/profile/vikasreddy1308"
              label="Codeforces"
              icon={<Trophy size={18} />}
            />
            <FooterLink
              href="mailto:vikasreddy1308@gmail.com"
              label="Email"
              icon={<Mail size={18} />}
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Vikas Reddy Meka. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

function FooterLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
    >
      {icon}
    </a>
  );
}

export default Footer;
