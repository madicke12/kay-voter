import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../../../components/Sidebar";

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
    <div className="flex h-[100vh]">
      <Sidebar/>
      <div >{children}</div>
    </div>
  );
}
