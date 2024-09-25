import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-primary m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-quaternary"
          >
            {/* <Image
              src={
                "https://dcdn.mitiendanube.com/stores/004/155/320/themes/common/logo-1213684924-1705949203-6ac99d2baf962531c0a740e066c0b0fe1705949203-320-0.webp"
              }
              width={200}
              height={200}
              className="h-8"
              alt="Flowbite Logo"
            /> */}MoviAir
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer

