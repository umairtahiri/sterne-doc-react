import React from "react";
import Stack from "@mui/material/Stack";
import BannerImg from "../../assets/Banner.svg";
import UnionImg from "../../assets/Union.svg";

import {
  BannerSection,
  BannerBox,
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
  return <div>hi</div>;
};

export default Banner;

/*


<BannerSection>
      <BannerBox>
        <UnionImage src={UnionImg} alt="UnionImg" />
        <Container>
          {bannerItems.map((item) => (
            <BannerItem title={item?.title} description={item?.description} />
          ))}
          <CustomButton>Angebot einholen</CustomButton>

          <BannerImage src={BannerImg} alt="BannerImg" />
        </Container>
      </BannerBox>
    </BannerSection>

*/
