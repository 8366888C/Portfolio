import Introduction from "@/components/Introduction";
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
      </section>
      <hr />
      <section>
        <h2 className="section-heading">B L O G S</h2>
      </section>
    </>
  );
}
