import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Link } from '@tanstack/react-router';
import Navbar from '../Navbar/Navbar';
import IMAGES from '@/assets/images';
const LandingPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen pt-20 flex flex-row font-inter dark:bg-black bg-[#FAF6F3]">
      <div className="flex flex-col justify-center items-center w-1/2 p-8 md:p-12 space-y-6">
        <div className="space-y-4 w-full max-w-xs">
          <Button className="flex items-center justify-center w-full bg-[#1A8DFC] text-white rounded-full py-3 gap-2 hover:bg-blue-700 transition">
            <FaFacebook size={20} />
            Connect with Facebook
          </Button>
          <Button className="flex items-center justify-center w-full bg-gradient-to-r from-[#F87753] to-[#B33FA8] text-white rounded-full py-3 gap-2 hover:opacity-90 transition">
            <FaInstagram size={20} />
            Connect with Instagram
          </Button>
        </div>
   
        <div className="text-sm text-[#7C8B9D]">
          New to Zapify?{' '}
          <Link to="/dashboard" className="text-[#1A8DFC] hover:underline">
            Sign up
          </Link>
        </div>
        <div className="text-sm text-[#1A8DFC] mt-10">
          <Link to=".." className="hover:underline">
            Terms & Conditions
          </Link>{' '}
          |{' '}
          <Link to=".." className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>

 
      <div className="flex flex-col justify-center items-center w-1/2 p-8 md:p-12 text-center">
        {/* Image */}
        <div
          className="w-80 h-80 bg-cover bg-center mb-6"
          style={{ backgroundImage: `url(${IMAGES.HeroImage})` }}
        />
        <h1 className="text-3xl md:text-4xl font-bold dark:text-slate-50 text-gray-900">
          Welcome Back to Zapify!
        </h1>
        <p className="text-lg text-[#7C8B9D] mt-2 opacity-30 dark:text-slate-50">Sign In to Zapify</p>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
