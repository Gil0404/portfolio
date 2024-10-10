import type { Metadata } from "next";
// import bg from "@/app/img/jigsaw.svg";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gilbert Garcia",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-Fredoka overflow-x-hidden "
        // style={{
        //   backgroundImage: `url('${bg.src}')`,
        //   // backgroundRepeat: "no-repeat",
        //   // backgroundSize: "cover",

        //   aspectRatio: "initial",
        // }}
      >
        {children}
      </body>
    </html>
  );
}
