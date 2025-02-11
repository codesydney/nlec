import { redHatDisplay } from "@/assets/fonts";
import { Button } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Button
      asChild
      variant="logo"
      size="sm"
      className={cn("font-bold", redHatDisplay.className)}
    >
      <Link href="#">NLEC</Link>
    </Button>
  );
}
