import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../../../components/Sidebar";
import Nav from "../../../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav/>
      <div >{children}</div>
    </div>
  );
}
