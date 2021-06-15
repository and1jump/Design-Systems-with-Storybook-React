import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  transition: background-color 0.2 linear, color 0.2s liner;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 2px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
    border-radius: 5px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
  border-radius: 5px;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  border-radius: 5px;

  &:disabled {
    border: 2px solid ${defaultTheme.disabled};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
  border-radius: 5px;
`;

export default PrimaryButton;
