
// import heroImg from "/assets/images/image-mockups.png";
// import heroBg from "/assets/images/bg-intro-desktop.svg";
// import heroBgMobile from "/assets/images/bg-intro-mobile.svg";

const Hero = () => {
  // const isTablet = window.matchMedia("(min-width: 768px)").matches;
  return (
    <section className="hero z-40 w-full overflow-hidden">
      <div className="relative ">
        
      </div>

      <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="from-Lime-Green to-Bright-Cyan hidden cursor-pointer rounded-full bg-gradient-to-r px-8 py-3 font-bold text-white hover:opacity-80 md:flex">
          Request Invite
        </button>
      </div>
    </section>
  );
};

export default Hero;
