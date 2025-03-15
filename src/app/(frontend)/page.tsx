import Title from "@/components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Layer Caker Home Page</Title>
      <hr />
      <Link href={"/posts"}>Posts index &rarr;</Link>
    </section>
  );
}
