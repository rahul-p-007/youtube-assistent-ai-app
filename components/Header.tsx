"use client";

import Link from "next/link";
import Avatar from "./Avatar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

function UserName() {
  const { user } = useUser();

  return (
    <span className="text-white text-sm font-medium">
      {user?.firstName + " " + user?.lastName || user?.username || "User"}
    </span>
  );
}

function Header() {
  return (
    <header className="bg-[#101010] shadow-sm flex justify-between p-5">
      <Link href="/" className="flex items-center text-4xl font-thin">
        <Avatar seed="Support Agent" />
        <div className="space-y-1 text-white">
          <h1>ChatTLy</h1>
          <h2 className="text-sm">AI powered chat app</h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <div className="flex items-center gap-2">
            {/* White username */}
            <UserName />

            {/* Clerk avatar + menu */}
            <UserButton
              appearance={{
                variables: {
                  colorTextPrimary: "#ffffff",
                  colorTextSecondary: "#e5e7eb",
                  colorBackground: "#0b0b0b",
                  colorInputBackground: "#ffffff",
                  colorNeutral: "#9ca3af",
                },
                elements: {
                  userButtonOuterIdentifier: "text-white",

                  userButtonTrigger: "text-white",
                  userButtonTriggerText: "text-white",

                  userButtonPopoverCard: "bg-[#0b0b0b] border border-white/10",
                  userButtonPopoverFooter: "hidden",
                  userButtonPopoverActionButton: "text-white hover:bg-white/10",
                  userButtonPopoverActionButtonText: "text-white",
                },
              }}
            />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button className="text-white">Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
