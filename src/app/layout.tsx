import { Open_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import HeaderNew from "@/app/components/Layout/HeaderNew";
import FooterNew from "@/app/components/Layout/FooterNew";
import ScrollToTop from "@/app/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import TopAnnouncementBar from "@/app/components/Home/TopAnnouncementBar";
import WhatsAppModal from "@/app/components/Layout/WhatsAppModal";

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
});
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    variable: "--font-roboto-slab",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body className={`${openSans.variable} ${robotoSlab.variable} font-body bg-white text-gray-900 antialiased`}>
                <style>{`:root{--banner-url: url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/banner/background.png'); --newsletter-url: url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/newsletter/hands.svg');}`}</style>
                <Aoscompo>
                    <TopAnnouncementBar />
                    <HeaderNew />
                    {children}
                    <FooterNew />
                    <WhatsAppModal />
                </Aoscompo>
                <ScrollToTop />
            </body>
        </html>
    );
}
