import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
 import Image from "next/image";
import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
import ProductGrid from "@/components/ProductGrid";
export const GET = handleAuth();

export default function Home() {
  return (
    <div className="">
      <Container className="py-10">
       <HomeBanner/>
       <ProductGrid/>
      </Container>
    </div>
  );
}
