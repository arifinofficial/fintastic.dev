// import siteMetadata from "@/data/siteMetadata";
// import headerNavLinks from "@/data/headerNavLinks";
// import Logo from "@/data/logo.svg";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
// import SearchButton from "./SearchButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="Fintastic">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/images/logo.png"
                alt="fintastic"
                width={80}
                height={80}
                priority
              />
            </div>
            {/* <div className="hidden h-6 text-2xl font-semibold sm:block">
              fintastic
            </div> */}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link
          href="/blog"
          className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
        >
          Blog
        </Link>
        <Link
          href="/tags"
          className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
        >
          Tags
        </Link>
        {/* <Link
          href="/"
          className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
        >
          About
        </Link> */}
        {/* <SearchButton /> */}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
