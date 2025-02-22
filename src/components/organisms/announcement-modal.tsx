import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/ui/button";
import { inter, redHatDisplay } from "@/assets/fonts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/ui/dialog";

interface AnnouncementModalProps {
  shouldShow?: boolean;
  title?: string;
  content?: string;
}

export default function AnnouncementModal({
  shouldShow,
  title,
  content,
}: AnnouncementModalProps) {
  if (!shouldShow) {
    return;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "fixed bottom-0 right-0 mb-4 mr-4 font-bold",
            redHatDisplay.className
          )}
        >
          We have an announcement!
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <section className={cn(inter.className)}>
          <p>{content}</p>
        </section>
      </DialogContent>
    </Dialog>
  );
}
