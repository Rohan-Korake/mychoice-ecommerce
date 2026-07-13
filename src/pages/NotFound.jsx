import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="lg:min-h-screen lg:mb-20 flex items-center justify-center bg-[#0a0a0a] px-4 py-12">
      <div className="text-center w-full max-w-2xl">
        {/* Icon */}
        <div className="mt-8 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
          <TriangleAlert className="h-10 w-10 text-[#DAC593]" />
        </div>

        {/* 404 Heading */}
        <h1 className="mt-2 text-6xl font-bold text-[#DAC593] mb-4 tracking-tighter">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-500 max-w-lg mx-auto text-lg font-light">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 text-white bg-[#C97C5D] hover:bg-[#b8962d] transition-all duration-300 rounded-full font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
