import Head from "next/head";
import Image from "next/image";
import CampusSwitch from "../../components/common/CampusSwitch";
import useCampusDetect from "../../hooks/useCampusDetect";
import styled from "@emotion/styled";
import PromotionBanner from "../../components/main/PromotionBanner";

export default function SuwonDY() {
  const { isSuwon, campus, campusName } = useCampusDetect();
  return (
    <div>
      <PromotionBanner isSuwon={isSuwon} />
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <CampusSwitch />
    </div>
  );
}
