import React from "react";
import Form from "../Form";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Frame1811 from "../../assets/Badge.svg";
import Frame1812 from "../../assets/Hand.svg";
import Frame1813 from "../../assets/Bag.svg";

import {
  RemoveNegativeSection,
  Title,
  ItemDetail,
  WelcomeNote,
  IconImage,
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
    <RemoveNegativeSection id="submit-request">
      <Grid container columnSpacing={4} xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Title>Connect to Remove Negative Review</Title>
          <WelcomeNote>
            Welcome to Healthcare Removal Star Review, your premier destination
            for cutting-edge healthcare removal services and stellar customer
            experiences. We're dedicated to providing you with top-notch
            solutions for all your healthcare removal.
          </WelcomeNote>
          {removeItems.map((item) => (
            <RemoveItem itemDetail={item?.itemDetail} iconImg={item.iconImg} />
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} justifyContent="center">
          <Form />
        </Grid>
      </Grid>
    </RemoveNegativeSection>
  );
};

export default RemoveNegative;
