export default function Contact() {
  return (
    <div>
      <h1 className="text-center text-white underline text-3xl hover:tracking-wider hover:text-sky-400 ">
        Connect with me on!
      </h1>
      <div className="object-center grid grid-cols-2 ">
        <div className="relative lg:left-[360px] md:left-[300px] grid grid-cols-4">
         <a href="https://www.linkedin.com/in/jayant-dubey-308371239/">
          <img
            className="object-fill h-10 hover:h-11"
            src="https://img.icons8.com/color/344/linkedin-circled--v1.png"
            alt="oops"
          />
          </a>
          <a>
          <img
            className="object-fill h-10 hover:h-12"
            src="https://img.icons8.com/color/344/youtube-play.png"
            alt="oops"
          />
          </a>
          <a href="https://github.com/ryuk-jayant">
          <img
            className="object-fill h-10 hover:h-12"
            src="https://img.icons8.com/bubbles/344/github.png"
            alt="oops"
          />
          </a>
          <a>
          <img
            className="object-fill h-10 hover:h-12"
            src="https://img.icons8.com/fluency/344/discord-new-logo.png"
            alt="oops"
          />
          </a>
        </div>
      </div>
      <p className="text-white hover:font-bold">Hope to see you!!</p>
    </div>
  );
}
