function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
        <span>© {new Date().getFullYear()} Mohamed Yunus SR. All rights reserved.</span>
        <span>Built with React, Vite & Tailwind CSS</span>
      </div>
    </footer>
  );
}

export default Footer;
