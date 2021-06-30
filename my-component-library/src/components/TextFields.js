import React from "react";
import styled from "styled-components";
import { typeScale, primaryFont } from "../utils";

const Input = styled.input`
  width: 100%;
  max-width: 330px;
  height: 52px;
  background-color: ${(props) => props.theme.textFieldBackground};
  border: 1px solid ${(props) => props.theme.primaryColor};
  padding-left: 8px;
  font-family: ${primaryFont};
  border-radius: 2px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helper};
  margin-bottom: 8px;
`;

export const EmailInput = ({ label, placeholder }) => (
  <div>
    <Label htmlFor="email">{label}</Label>
    <Input id="email" type="email" placeholder={placeholder} />
  </div>
);

export const PasswordInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="password">{label}</Label>
    <Input id="password" type="password" placeholder={placeholder} />
  </div>
);
