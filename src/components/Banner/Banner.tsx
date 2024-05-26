import React from "react";
import BannerImg from "../../assets/Banner.svg";
import UnionImg from "../../assets/Union.svg";
import { Img } from "react-image";
import { Link } from "react-router-dom";

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
          <Link to="#submit-request">
            <CustomButton>Angebot einholen</CustomButton>
          </Link>
        </Container>
        <BannerImage>
          <Img src={BannerImg} alt="BannerImg" />
        </BannerImage>
      </BannerSection>
    </>
  );
};

export default Banner;
