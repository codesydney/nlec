import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/atoms/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/atoms/ui/button";
import NavbarLogo from "@/components/molecules/navbar-logo";
import NavbarLinks from "../molecules/navbar-links";
import Link from "next/link";

export type NavItemProps = {
  href: string;
  label: string;
}[];

export default function Navbar() {
  const NAV_ITEMS: NavItemProps = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#impact", label: "Our Impact" },
    { href: "#join", label: "Join Us" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/95 px-4 py-2 backdrop-blur md:px-8 xl:px-20">
      <section className="flex items-center justify-between">
        <NavbarLogo />
        <ul className="hidden gap-2 md:inline-flex">
          <NavbarLinks items={NAV_ITEMS} />
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-full md:hidden" size="sm">
              <Menu className="h-full" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="inline-flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <li key={i}>
                  <SheetClose asChild>
                    <Button asChild variant="link" className="font-medium">
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  );
}
