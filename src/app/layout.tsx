import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["300", "400", "600", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sereni",
  description: "Atenção plena",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSerif.className} bg-[#FFF7ED]`}>
        <div className="flex justify-center min-h-[100vh] h-full items-start py-5">
          <div className="w-full max-w-[430px] min-h-[calc(100vh-48px)] h-full rounded-3xl overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
