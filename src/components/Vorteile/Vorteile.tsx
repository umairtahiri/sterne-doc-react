import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { Img } from "react-image";
import Phone from "../../assets/Phone.svg";
import markImg from "../../assets/mark-icon.svg";

import {
  VorteileSection,
  Title,
  ItemTitle,
  Description,
  BoxLeft,
  BoxRight,
  PhoneImage,
  ItemContainer,
  VorteileContainer,
} from "./styles";

type VorteileItemPropTypes = {
  title: string;
  description: string;
  markImg: string;
};

const vorteileItemsRight = [
  {
    title: "Vertrauensbildung",
    description:
      "Kunden vertrauen Online-Bewertungen nahezu ebenso stark wie persönlichen Empfehlungen.",
    markImg: markImg,
  },

  {
    title: "Kundeneinfluss",
    description:
      "Bevor sie ein neues Geschäft betreten, prüfen acht von zehn Kunden die Google-Bewertungen.",
    markImg: markImg,
  },

  {
    title: "Kundentreue",
    description:
      "Unternehmen mit hohen Bewertungen weisen eine gesteigerte Kundentreue und eine höhere Wiederkaufsrate auf.",
    markImg: markImg,
  },
];

const vorteileItemsLeft = [
  {
    title: "Bessere Sichtbarkeit",
    description:
      "Höhere Bewertungen können die Online-Sichtbarkeit verbessern und auch Ihre Rangfolge bei Google",
    markImg: markImg,
  },

  {
    title: "Verbesserter Ruf",
    description:
      "Unternehmen mit hohen Bewertungen genießen üblicherweise eine größere Kundentreue und eine höhere Wiederkaufsrate.",
    markImg: markImg,
  },

  {
    title: "Kundentreue",
    description:
      "Ein gesteigerter Ruf resultiert aus positiven Bewertungen und trägt dazu bei, das Ansehen eines Unternehmens zu steigern und eine größere Kundenanzahl anzuziehen.",
    markImg: markImg,
  },
];

const VorteileItem = ({
  title,
  description,
  markImg,
}: VorteileItemPropTypes) => {
  return (
    <ItemContainer>
      <Img src={markImg} alt="mark" />
      <Box>
        <ItemTitle>{title}</ItemTitle>
        <Description>{description}</Description>
      </Box>
    </ItemContainer>
  );
};

const Vorteile = () => {
  return (
    <VorteileSection>
      <Title>Vorteile</Title>
      <VorteileContainer>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <PhoneImage src={Phone} alt="iPhone15" />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
            <BoxLeft>
              {vorteileItemsLeft.map((item, index) => (
                <VorteileItem
                  key={index}
                  title={item.title}
                  markImg={item.markImg}
                  description={item.description}
                />
              ))}
            </BoxLeft>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
            <BoxRight>
              {vorteileItemsRight.map((item, index) => (
                <VorteileItem
                  key={index}
                  title={item.title}
                  markImg={item.markImg}
                  description={item.description}
                />
              ))}
            </BoxRight>
          </Grid>
        </Grid>
      </VorteileContainer>
    </VorteileSection>
  );
};

export default Vorteile;
