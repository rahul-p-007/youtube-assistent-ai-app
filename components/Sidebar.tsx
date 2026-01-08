import { BotMessageSquare, PencilLine, SearchIcon } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-[#101010] text-white p-5">
      <ul className="gap-5 flex lg:flex-col">
        <li className="flex-1">
          <Link
            href="/create-chatbot"
            className="hover:bg-[#24cd5f] flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#00FF00]"
          >
            <i className="hn hn-robot text-5xl lg:text-4xl text-black"></i>

            <div className="hidden md:inline">
              <p className="text-xl text-black font-bold ">Create</p>
              <p className="text-sm  text-black">New ChatBot</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/view-chatbot"
            className="hover:bg-[#24cd5f] flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#00FF00]"
          >
            {/* <PencilLine className="h-6 w-6 lg:h-8 lg:w-8" /> */}
            <i className="hn hn-pencil text-5xl lg:text-4xl text-black"></i>
            <div className="hidden md:inline">
              <p className="text-xl font-blod text-black">Edit</p>
              <p className="text-sm text-black">Chatbots</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={"/review-sessions"}
            className="hover:bg-[#0a4a20] flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#00FF00]"
          >
            {/* <SearchIcon className="h-6 w-6 lg:h-8 lg:w-8" /> */}
            <i className="hn hn-search text-5xl lg:text-4xl text-black"></i>
            <div className="hidden md:inline">
              <p className="text-xl font-blod text-black">View</p>
              <p className="text-sm text-black">Sessions</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
