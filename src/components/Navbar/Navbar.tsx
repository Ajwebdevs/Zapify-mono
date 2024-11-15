import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import IMAGES from "@/assets/images";


const Navbar: React.FC = () => {
  return (
    <>
    <nav className="fixed top-0 pb-10 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-4 bg-transparent z-10 w-full dark:bg-black">
      <div className="flex items-center">
        <img src={IMAGES.logo} alt="Zapify Logo" className="h-8 w-auto" />
        {/* <span className="text-2xl font-bold">Zapify</span> */}
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button
          variant="default"
          className="bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          Get Started Free
        </Button>
      </div>
    </nav>

    </>
  );
};

export default Navbar;