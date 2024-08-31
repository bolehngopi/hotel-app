import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm dark:bg-black dark:text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Left section with Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Center section with Search */}
            {/* <div className="flex-1 md:flex-none">
              <OtherComponent />
            </div> */}

            {/* Right section */}
            <div className="flex items-center">
              <Search />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
