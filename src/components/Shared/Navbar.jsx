"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { 
  Menu, 
  HeartHandshake, 
  User, 
  LogOut, 
  Settings, 
  LayoutDashboard,
  ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession(); // Session Check

  const isActive = (path) => pathname === path;

  // First letter of the name to show
  const getInitials = (name) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between transition-all duration-300">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <HeartHandshake className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
            TrustCare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group ${
                isActive(link.href) ? "text-primary" : "text-slate-600"
              }`}
            >
              {link.name}
              {/* Active/Hover Indicator Line */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.href) ? "w-full" : ""}`}></span>
            </Link>
          ))}
        </div>

        {/* Right Side: Auth Buttons or Profile Dropdown */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            // ============ LOGGED IN VIEW ============
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full focus:ring-0 ring-offset-0 hover:bg-transparent">
                  <Avatar className="h-10 w-10 border-2 border-primary/20 cursor-pointer hover:border-primary transition-colors">
                    <AvatarImage src={session.user?.image} alt={session.user?.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      {getInitials(session.user?.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard">
                    <DropdownMenuItem className="cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                </Link>
                <Link href="/profile">
                    <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                    className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                    onClick={() => signOut({ callbackUrl: '/login' })}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // ============ LOGGED OUT VIEW ============
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-primary hover:bg-primary/5 font-semibold">Log in</Button>
              </Link>
              <Link href="/register">
                <Button className="shadow-lg shadow-primary/25 font-bold rounded-sm px-6">
                    Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center gap-4">
             {/* Show Avatar on Mobile too if logged in */}
             {session && (
                <Link href="/dashboard">
                    <Avatar className="h-8 w-8 border border-slate-200">
                        <AvatarImage src={session.user?.image} />
                        <AvatarFallback className="text-xs">{getInitials(session.user?.name)}</AvatarFallback>
                    </Avatar>
                </Link>
             )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left border-b pb-4 mb-4">
                    <SheetTitle className="flex items-center gap-2">
                        <HeartHandshake className="h-6 w-6 text-primary" />
                        TrustCare
                    </SheetTitle>
                </SheetHeader>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-lg font-medium px-2 py-1 rounded-md transition-colors ${
                        isActive(link.href) ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                
                <hr className="my-2 border-slate-100" />
                
                {session ? (
                    <div className="space-y-3">
                        <SheetClose asChild>
                            <Link href="/dashboard" className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:text-primary">
                                <LayoutDashboard size={20} /> Dashboard
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                             <button 
                                onClick={() => signOut()} 
                                className="flex items-center gap-3 px-2 py-2 text-red-500 w-full text-left"
                            >
                                <LogOut size={20} /> Logout
                            </button>
                        </SheetClose>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 mt-4">
                        <SheetClose asChild>
                        <Link href="/login">
                            <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200">Log in</Button>
                        </Link>
                        </SheetClose>
                        <SheetClose asChild>
                        <Link href="/register">
                            <Button className="w-full h-12 rounded-xl font-bold shadow-lg shadow-primary/20">Sign Up</Button>
                        </Link>
                        </SheetClose>
                    </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;