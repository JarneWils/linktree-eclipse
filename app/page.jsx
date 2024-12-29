"use client";


// Components
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Tracks from "@/components/Tracks";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center">

            {/*logo*/}
            <div className="-ml-[100px] mt-[50px] xl:-ml-[120px]">
              <Logo />
            </div>

            {/*naam*/}
            <div className="mt-[110px] xl:mt-[130px] -ml-1 justify-center items-center text-4xl xl:text-4xl gothic">
              E C L I P S E
            </div>

            {/*Book Us*/}
            <div className="mt-[25px]">
              <a href="mailto:eclipse.recordsbe@gmail.com?subject=Demo%20Submission&body=Hi%2C%0D%0A%0D%0AI%20am%20an%20artist%20specializing%20in%20%5Bgenre%5D%2C%20and%20I%20would%20love%20to%20share%20my%20latest%20track%20with%20Eclipse%20Records.%0D%0A%0D%0AHere%20is%20a%20link%20to%20my%20demo%3A%0D%0A%0D%0A%5BPrivate%20Soundcloud%20Link%5D.%0D%0A%0D%0AI%20would%20be%20thrilled%20to%20hear%20your%20thoughts.%0D%0A%0D%0ABest%20regards%2C%0D%0A%0D%0A%5Byour%20artist%20name%5D">
                <Button>Send Demo</Button>
              </a>
            </div>


            {/*Socials*/}
            <div>
              <Socials />
            </div>

            {/*Tracks*/}
            <div className="mt-5">
              <Tracks />
            </div>

            <div>
              <BackToTop />
            </div>


          </div>
        </div>
    </section> 
  );
}
