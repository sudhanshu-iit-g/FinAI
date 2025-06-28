import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm transition-all duration-300 ease-in-out"> 
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href = "/">
          <Image
            src="/logo.png"
            alt="FinAI Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
            />
        </Link>
        <header className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                <Button variant="outline"> 
                  <LayoutDashboard size={18}/>
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>

              <Link href="/transaction/create">
                <Button className={"flex items-center gap-2"}> 
                  <PenBox size={18}/>
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline" className="hidden sm:inline-flex"> Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                  }
                }}/>
            </SignedIn>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Header