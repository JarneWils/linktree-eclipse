"use client";

import Link from "next/link";
import { SlSocialSoundcloud, SlSocialSpotify, SlSocialInstagram } from "react-icons/sl";
import { RiTiktokLine } from "react-icons/ri";

const Socials = () => {
    return (
      <div className="flex flex-row gap-6 mt-8">

        <Link href="https://soundcloud.com/eclipse-records-843898867?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">
        <SlSocialSoundcloud className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#FF7700] duration-100"/>
        </Link>
        
        <Link href="" target="_blank">
        <SlSocialSpotify className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#00E052] duration-100"/>
        </Link>

        <Link href="https://www.instagram.com/eclipse.recordsbe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
        <SlSocialInstagram className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#D103FF] duration-100"/>
        </Link>

        <Link href="" target="_blank">
        <RiTiktokLine className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#FF03A2] duration-100"/>
        </Link>

      </div>
    );
  }
  
  export default Socials;