"use client"
import Image from "next/image";
import Button from "../Button/Button";

/* IMAGEN PARA EL HERO

https://Image.freepik.com/vector-gratis/smartphone-diseno-plano-diferentes-perspectivas_52683-52558.jpg?t=st=1725113219~exp=1725116819~hmac=faf7776c0f505c8034b733eb3c1497eff54c1b5c7b3ef6263d29132d091521aa&w=900 */
const Hero = () => {
  return (
    // <div classNameName="h-[50vh] bg-secondary text-quaternary flex flex-col justify-center items-center gap-2 mb-5">
    //   <h1>Hero</h1>
    //   <Button variant="tertiary" classNameName="" onClick={()=>console.log("Click")
    //   }>Ir a los productos</Button>
    // </div>
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://dcdn.mitiendanube.com/stores/004/155/320/themes/toluca/2-slide-1710506116880-28543866-2490c4b79f2a797b32592f6bdaf69b761710506118-1920-1920.webp"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://dcdn.mitiendanube.com/stores/004/155/320/themes/toluca/2-slide-1709035251322-5441401069-63fb825374de9f2973086bcb992407211709035254-1920-1920.webp"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://dcdn.mitiendanube.com/stores/004/155/320/themes/toluca/2-slide-1709035251323-1388511865-ba5e27b627ff4b58df80411ebcf16e101709035257-1920-1920.webp"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://dcdn.mitiendanube.com/stores/004/155/320/themes/toluca/2-slide-1709035251322-7632235272-610afc96e9cfac754f72864550d340f61709035252-1920-1920.webp"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
      {/* -- Slider controls -- */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Hero;
