import { Button } from "@/components/atoms/ui/button";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Button asChild variant="logo" size="sm">
      <Link href="#">NLEC</Link>
    </Button>
  );
}
