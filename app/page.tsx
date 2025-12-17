import About from "@/components/Introduction";
import { Metadata } from "next";

// !description
export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Rahul's portfolio site",
};

// !main function
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <About />
    </div>
  );
}
