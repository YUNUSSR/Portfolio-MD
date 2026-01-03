import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-10 space-y-6"
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-semibold">Contact</h3>
      <p className="text-slate-400 text-sm max-w-5xl">
        If you’d like to talk about opportunities, projects, or collaborations,
        feel free to reach out. I’m open to roles related to data analytics,
        business intelligence, and tech-enabled operations.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Contact details */}
        <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40 space-y-2 text-sm">
          <p>
            <span className="text-slate-400">Email:</span>{" "}
            <a
              href="mailto:yourmail@example.com"
              className="text-blue-400 hover:underline"
            >
              mohamedyunusams@gmail.com
            </a>
          </p>
          <p>
            <span className="text-slate-400">Phone:</span>{" "}
            <a
              href="tel:+910000000000"
              className="text-blue-400 hover:underline"
            >
              +91-81486-41486
            </a>
          </p>
          <p className="text-slate-400">
            Location: Bengaluru, India
          </p>
        </div>

        {/* Social links */}
        <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40 space-y-2 text-sm">
          <p className="text-slate-300 font-medium">Find me online</p>
          <ul className="space-y-1 text-sm">
            <li>
              <a
              href="https://github.com/YUNUSSR"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-2"
              >
              <FaGithub className="text-base" />
              GitHub
            </a>
          </li>
          <li>
              <a
              href="https://www.linkedin.com/in/mohamed-yunus-sr/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-2"
              >
              <FaLinkedin className="text-base" />
              LinkedIn
            </a>
          </li>
          <li>
              <a
              href="https://www.instagram.com/md_.d._yunus?igsh=MmhqcXFvcW5yeGVt"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-2"
              >
              <FaInstagram className="text-base" />
              Instagram
            </a>
          </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
