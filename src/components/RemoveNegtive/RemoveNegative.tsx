import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import Frame1811 from "../../assets/Badge.svg";
import Frame1812 from "../../assets/Hand.svg";
import Frame1813 from "../../assets/Bag.svg";
import Frame207 from "../../assets/Frame207.svg";

import {
  RemoveNegativeSection,
  Title,
  ItemDetail,
  WelcomeNote,
  ImageFrame,
  IconImage,
  ImageContainer,
} from "./styles";

type RemoveItemPropTypes = {
  itemDetail: string;
  iconImg: string;
};

const removeItems = [
  {
    itemDetail:
      "Benefit from top-tier expertise in healthcare removal services tailored to your needs",
    iconImg: Frame1811,
  },

  {
    itemDetail:
      "Experience a hassle-free removal process with our efficient and professional team.",
    iconImg: Frame1812,
  },

  {
    itemDetail:
      "Join our satisfied customers and discover why our reviews consistently rate us as a standout in the industry",
    iconImg: Frame1813,
  },
];

const RemoveItem = ({ itemDetail, iconImg }: RemoveItemPropTypes) => {
  return (
    <Stack direction="row" alignItems="center">
      <IconImage src={iconImg} alt="iconImg" />
      <ItemDetail>{itemDetail}</ItemDetail>
    </Stack>
  );
};

const RemoveNegative = () => {
  return (
    <ImageContainer>
      <RemoveNegativeSection>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
          alignContent="center"
        >
          <Grid container xs={12} sm={12} md={12} lg={6}>
            <Title>Connect to Remove Negative Review</Title>
            <WelcomeNote>
              Welcome to Healthcare Removal Star Review, your premier
              destination for cutting-edge healthcare removal services and
              stellar customer experiences. We're dedicated to providing you
              with top-notch solutions for all your healthcare removal.
            </WelcomeNote>
            {removeItems.map((item) => (
              <RemoveItem
                itemDetail={item?.itemDetail}
                iconImg={item.iconImg}
              />
            ))}
          </Grid>
          <Grid container xs={12} sm={12} md={12} lg={6}>
            <ImageFrame src={Frame207} height={550} alt="Star" />
          </Grid>
        </Stack>
      </RemoveNegativeSection>
    </ImageContainer>
  );
};

export default RemoveNegative;
