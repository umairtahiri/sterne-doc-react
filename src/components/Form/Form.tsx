import React from "react";

import {
  CustomButton,
  FormContainer,
  Row,
  FormLabel,
  StyledInput,
} from "./styles";
import { useFormik } from "formik";
import * as yup from "yup";

type FormValues = {
  phone: string;
  name: string;
  email: string;
  news: string;
};

export const Form = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name ist erforderlich"),
    email: yup
      .string()
      .email("Ungültige E-mail Adresse")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        "Ungültige E-mail Adresse"
      )
      .required("E-Mail ist erforderlich"),
    phone: yup.string().required("Telefonnummer ist erforderlich"),
    news: yup.string(),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      phone: "",
      name: "",
      email: "",
      news: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let payload = { ...values };
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
      <FormContainer id="form">
        <Row>
          <FormLabel>Name des Unternehmens:</FormLabel>
          <StyledInput fullWidth />
        </Row>
        <Row>
          <FormLabel>E-Mail Adresse:</FormLabel>
          <StyledInput fullWidth />
        </Row>
        <Row>
          <FormLabel>Telefonnummer:</FormLabel>
          <StyledInput fullWidth />
        </Row>
        <Row>
          <FormLabel>Nachricht:</FormLabel>
          <StyledInput type="text" multiline rows={4} fullWidth />
        </Row>
        <CustomButton type="submit">Submit</CustomButton>
      </FormContainer>
    </form>
  );
};
