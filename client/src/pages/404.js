import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function NotFoundPage() {
  return (
    <div className="h-[50vh] flex items-center justify-center">
      <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-[#67595E]">404</div>
        <div className="text-stone-500 font-medium">
          Oops, Couldn't find what you were looking for! 😭
        </div>
        <div className="flex space-x-4 items-center justify-start">
          <Link href="/">
            <div className="bg-[#67595E] px-4 py-1 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
              <MdOutlineKeyboardBackspace />
            </div>
          </Link>
          <div className="text-md font-medium text-stone-500">
            Back to Home Page
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
