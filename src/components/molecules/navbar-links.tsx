import Link from "next/link";
import { Button } from "../atoms/ui/button";

export default function NavbarLinks({
  items,
}: {
  items: {
    href: string;
    label: string;
  }[];
}) {
  return items.map((item, i) => (
    <li key={i}>
      <Button asChild variant="link" className="font-medium">
        <Link href={item.href}>{item.label}</Link>
      </Button>
    </li>
  ));
}
