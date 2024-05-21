import React from "react";
import BannerImg from "../../assets/Banner.svg";
import UnionImg from "../../assets/Union.svg";
import { Img } from "react-image";

import {
  BannerSection,
  CustomButton,
  ContainerGrid,
  Title,
  Container,
  Description,
  BannerImage,
  UnionImage,
} from "./styles";

type BannerItemPropTypes = {
  title: string;
  description: string;
};

const bannerItems = [
  {
    title: "Negative Bewertungen Schaden Ihren RUF?",
    description: "Löschen auch Sie Ihre Negative Bewertungen mit SterneDoc!",
  },
];

const Banner = () => {
  return (
    <>
      <BannerSection>
        <UnionImage>
          <Img src={UnionImg} alt="UnionImg" />
        </UnionImage>
        <Container>
          <ContainerGrid>
            <Title>Negative Bewertungen Schaden Ihren RUF?</Title>
            <Description>
              Löschen auch Sie Ihre Negative Bewertungen mit SterneDoc!
            </Description>
          </ContainerGrid>
          <a href="#submit-request">
            <CustomButton>Angebot einholen</CustomButton>
          </a>
        </Container>
        <BannerImage>
          <Img src={BannerImg} alt="BannerImg" />
        </BannerImage>
      </BannerSection>
    </>
  );
};

export default Banner;
