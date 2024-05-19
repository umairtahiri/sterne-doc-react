import React from "react";
import Stack from "@mui/material/Stack";
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

const BannerItem = ({ title, description }: BannerItemPropTypes) => {
  return (
    <Stack>
      <ContainerGrid>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContainerGrid>
    </Stack>
  );
};

const Banner = () => {
  return (
    <>
      <BannerSection>
        <UnionImage>
          <Img src={UnionImg} alt="UnionImg" />
        </UnionImage>
        <Container>
          {bannerItems.map((item) => (
            <BannerItem title={item?.title} description={item?.description} />
          ))}
          <CustomButton>Angebot einholen</CustomButton>
        </Container>
        <BannerImage>
          <Img src={BannerImg} alt="BannerImg" />
        </BannerImage>
      </BannerSection>
    </>
  );
};

export default Banner;
