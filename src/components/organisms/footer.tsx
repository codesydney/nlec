import Link from "next/link";
import { Button } from "../atoms/ui/button";
import { cn } from "@/lib/utils";
import { redHatDisplay } from "@/assets/fonts";

export default function Footer() {
  return (
    <footer
      className={cn(
        "w-full bg-nlec-orange p-4 text-center text-white",
        redHatDisplay.className
      )}
    >
      <p>
        Website developed by{" "}
        <Button
          asChild
          variant="link"
          className="p-0 text-white underline hover:text-white"
        >
          <Link href="https://www.code.sydney/">Code.Sydney</Link>
        </Button>
        . Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}
