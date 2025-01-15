import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Container className="py-10">
       <HomeBanner/>
      </Container>
    </div>
  );
}
