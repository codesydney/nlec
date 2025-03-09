import { ANNOUNCEMENT } from "@/assets/data";
import AnnouncementModal from "./announcement-modal";

export default function Announcement() {
  const { shouldShow, title, content } = ANNOUNCEMENT;
  return (
    <AnnouncementModal
      shouldShow={shouldShow}
      title={title}
      content={content}
    />
  );
}
