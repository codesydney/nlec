import Link from "next/link";
import { Button } from "../atoms/ui/button";
import { NavItemProps } from "../organisms/navbar";

export default function NavbarLinks({ items }: { items: NavItemProps }) {
  return items.map((item, i) => (
    <li key={i}>
      <Button asChild variant="link" className="font-medium">
        <Link href={item.href}>{item.label}</Link>
      </Button>
    </li>
  ));
}
