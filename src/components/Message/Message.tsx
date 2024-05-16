import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import infoIcon from "../../assets/info-icon.svg";
import {
  MessageSection,
  InfoBox,
  Title,
  Description,
  IconImage,
} from "./styles";

const Message = () => {
  return (
    <MessageSection>
      <InfoBox>
        <Stack direction="row" columnGap={2}>
          <IconImage src={infoIcon} alt="Frame239" />
          <Box>
            <Title>
              Sternehero prüft nicht den Inhalt einer Bewertung und bietet keine
              Rechtsdienstleistung/Rechtsberatung an.
            </Title>
            <Description>
              Die Dienstleistung beschränkt sich konkret auf die Weiterleitung
              Ihrer Beschwerde an das Bewertungsportal als reine Botenleistung
              mit dem Ziel die Echtheit der Bewertung überprüfen zu lassen. Das
              Bewertungsportal leitet sodann das Prüfverfahren ein und
              entscheidet im eigenen Ermessen über die Löschung der Bewertung.
              Sollten Sie an einer Rechtsberatung interessiert sein oder gar
              juristische Möglichkeiten in Betracht ziehen, so wenden Sie sich
              bitte an einen zugelassenen Anwalt
            </Description>
          </Box>
        </Stack>
      </InfoBox>
    </MessageSection>
  );
};

export default Message;
