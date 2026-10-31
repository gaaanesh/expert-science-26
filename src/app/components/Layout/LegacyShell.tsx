"use client";
import { usePathname } from "next/navigation";
import HeaderNew from "./HeaderNew";
import FooterNew from "./FooterNew";
import WhatsAppModal from "./WhatsAppModal";
import TopAnnouncementBar from "../Home/TopAnnouncementBar";
// Keep unrelated template routes unchanged while the homepage gets its own shell.
export default function LegacyShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}</>;
  return (
    <>
      <TopAnnouncementBar />
      <HeaderNew />
      {children}
      <FooterNew />
      <WhatsAppModal />
    </>
  );
}
