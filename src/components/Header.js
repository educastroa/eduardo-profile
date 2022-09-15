import profile from "../images/profile-picture.png";




export default function Header() {
  return (
    <header id="home" className="bg-header bg-cover relative bg-cover bg-center bg-no-repeat py-8">
      <div class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
    <div class="flex flex-col items-center justify-center lg:flex-row">
      <div class="rounded-full border-8 border-primary shadow-xl">
        <img src={profile} class="h-48 rounded-full sm:h-56" alt="author"/>
      </div>
      <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h1 class="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
          Hello I'm Eduardo Castro!
        </h1>
        <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
          <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
            <p class="font-body text-lg uppercase text-white">Let's connect</p>
            <div class="hidden sm:block">
              <i class="bx bx-chevron-right text-3xl text-yellow"></i>
            </div>
          </div>
          <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
            <a href="/">
              <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </header>
    
  );
}