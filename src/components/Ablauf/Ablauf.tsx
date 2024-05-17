import React from "react";
import { Stack, Box, Grid } from "@mui/material";

import Frame01 from "../../assets/Frame-01.svg";
import Frame02 from "../../assets/Frame-02.svg";
import Frame03 from "../../assets/Frame-03.svg";
import Star from "../../assets/Star.svg";
import {
  AblaufSection,
  AblaufContainer,
  ItemContainer,
  Title,
  ItemTitle,
  Description,
  CountImage,
  StarImage,
} from "./styles";

type AblaufItemPropTypes = {
  title: string;
  description: string;
  countImg: string;
};

const ablaufItems = [
  {
    title: "Erstkontakt",
    description:
      "Sie können uns jederzeit per Telefon, E-Mail oder WhatsApp kontaktieren. Unser Service steht Ihnen rund um die Uhr zur Verfügung",
    countImg: Frame01,
  },
  {
    title: "Analyse & Strategie",
    description:
      "Unser erfahrenes Team analysiert Ihre Situation und entwickelt eine individuelle Strategie, um die negative Bewertung zu entfernen.",
    countImg: Frame02,
  },
  {
    title: "Umsetzung & Erfolg",
    description:
      "Wir setzen die entwickelte Strategie um, und Sie zahlen nur im Erfolgsfall.",
    countImg: Frame03,
  },
];

const AblaufItem = ({ title, description, countImg }: AblaufItemPropTypes) => {
  return (
    <ItemContainer columnGap={2}>
      <CountImage width={100} src={countImg} alt="Frame-01" />
      <Box>
        <ItemTitle>{title}</ItemTitle>
        <Description>{description}</Description>
      </Box>
    </ItemContainer>
  );
};

const Ablauf = () => {
  return (
    <AblaufSection>
      <AblaufContainer>
        <Title>Ablauf</Title>
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          justifyContent="space-between"
          columnGap={2}
        >
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {ablaufItems.map((item, index) => (
              <AblaufItem
                key={index}
                title={item?.title}
                description={item?.description}
                countImg={item?.countImg}
              />
            ))}
          </Grid>

          <StarImage src={Star} height={450} alt="Star" />
        </Grid>
      </AblaufContainer>
    </AblaufSection>
  );
};

export default Ablauf;
