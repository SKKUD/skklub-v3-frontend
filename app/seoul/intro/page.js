"use client";
import IntroBanner from "@/app/components/intro/IntroBanner";
import IntroLayout from "@/app/layouts/intro/IntroLayout";
import IntroSection from "@/app/components/intro/IntroSection";
import DepartmentSection from "@/app/components/intro/DepartmentSection";
import Footer from "@/app/components/common/Footer";
import CampusSwitch from "@/app/components/common/CampusSwitch/CampusSwitch";
import { INTRO_DUMMY_DATA } from "@/utils/constants";

export default function SeoulDY() {
  return (
    <>
      <IntroBanner name={INTRO_DUMMY_DATA.name} />
      <IntroLayout>
        <IntroSection data={INTRO_DUMMY_DATA} />
      </IntroLayout>
      <IntroLayout color="#222525">
        <DepartmentSection data={INTRO_DUMMY_DATA} />
      </IntroLayout>
      <Footer />
      <CampusSwitch />
    </>
  );
}
