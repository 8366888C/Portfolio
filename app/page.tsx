import Introduction from "@/components/Introduction";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";

// !description
export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Rahul's portfolio site",
};

// !main function
export default function Home() {
  return (
    <>
      <section>
        <Introduction />
      </section>
      <hr />
      <section>
        <h2 className="section-heading">P R O J E C T S</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2"></div>
      </section>
      <hr />
      <section>
        <h2 className="section-heading">B L O G S</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  );
}
