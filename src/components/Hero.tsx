// import heroImg from "/assets/images/image-mockups.png";
// import heroBg from "/assets/images/bg-intro-desktop.svg";
// import heroBgMobile from "/assets/images/bg-intro-mobile.svg";

const Hero = () => {
  // const isTablet = window.matchMedia("(min-width: 768px)").matches;
  return (
    <section className="relative bg-Very-Light-Gray flex w-full flex-col overflow-hidden lg:flex-row-reverse lg:items-center">
      <div className="image relative"></div>

      <div className="flex flex-col items-center gap-y-6 px-5 text-center  lg:items-start lg:px-33 lg:text-start lg:w-[650px] lg:flex-2">
        <h1 className="text-Dark-Blue font-light mt-10 text-[40px] leading-[48px] lg:text-[50px] lg:leading-[60px]">
          Next generation digital banking
        </h1>
        <p className="text-Grayish-Blue px-2.5 lg:px-0">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="from-Lime-Green to-Bright-Cyan mt-3 mb-20 cursor-pointer rounded-full bg-gradient-to-r px-8 py-3 text-sm text-white hover:opacity-80 md:flex">
          Request Invite
        </button>
      </div>
    </section>
  );
};

export default Hero;
