import { Button } from "@/components/ui/button";
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
      <div className="flex items-center gap-3">
        <h1>Hello</h1>
        <Button variant="outline" size="icon-sm">
          +
        </Button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        recusandae iusto excepturi! Consequuntur deleniti, saepe ipsum, eos
        eligendi quo minus culpa cum officiis dolor eaque blanditiis. Facilis
        obcaecati eius distinctio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        recusandae iusto excepturi! Consequuntur deleniti, saepe ipsum, eos
        eligendi quo minus culpa cum officiis dolor eaque blanditiis. Facilis
        obcaecati eius distinctio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        recusandae iusto excepturi! Consequuntur deleniti, saepe ipsum, eos
        eligendi quo minus culpa cum officiis dolor eaque blanditiis. Facilis
        obcaecati eius distinctio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        recusandae iusto excepturi! Consequuntur deleniti, saepe ipsum, eos
        eligendi quo minus culpa cum officiis dolor eaque blanditiis. Facilis
        obcaecati eius distinctio.
      </p>
    </div>
  );
}
