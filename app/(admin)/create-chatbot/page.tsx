import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Jersey_10 } from "next/font/google";

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: ["400"],
});
function CreateChatbot() {
  return (
    <div
      className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-[#00FF00] p-10 rounded-md m-10
    "
    >
      <Avatar seed="create-chatbot" size={100} className="rounded-md" />
      <div>
        <h1
          className={`text-3xl lg:text-5xl font-semibold ${jersey.className}`}
        >
          Create
        </h1>
        <h2 className="text-sm ">
          Create a new chatbot to assist you in your conversation with your
          customer.
        </h2>
        <form className="flex flex-col md:flex-row gap-2 mt-5">
          <Input
            placeholder="Chatbot name..."
            type="text"
            required
            className="
    max-w-lg
    border-2 border-black
    rounded-md
    px-4 py-2
    focus:outline-none
    focus:border-[#000200]
  "
          />

          <Button>Create Chatbot</Button>
        </form>
      </div>
    </div>
  );
}
export default CreateChatbot;
