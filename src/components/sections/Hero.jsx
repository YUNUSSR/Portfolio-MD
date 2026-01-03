import profileImg from "../../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="py-10 sm:py-20 flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10"
    >
      {/* Left: Text */}
      <div className="flex flex-col gap-4">
        <p className="text-4xl text-blue-400">Hello, I’m Mohamed Yunus 👋</p>

        <h2 className="text-xl sm:text-4xl font-bold leading-tight">I build full-stack web applications<br></br>and data dashboards using<br></br>
          {" "}
          <span className="text-blue-400">MERN Stack, Power BI, and Tailwind</span>
        </h2>

        <p className="text-slate-400 max-w-xl">
          I am a MERN Stack Developer Trainee and Data-driven Web Developer with hands-on experience in building responsive web applications, RESTful APIs, and interactive Power BI dashboards. I specialize in React, Node.js, MongoDB, Power BI, and SQL, and I enjoy converting business requirements into clean, scalable digital solutions.

        </p>

        <div className="flex gap-3 mt-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-sm font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-md border border-slate-600 hover:border-blue-400 transition text-sm font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-32 h-32 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-700">
        <img
          src={profileImg}
          alt="Yunus profile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
