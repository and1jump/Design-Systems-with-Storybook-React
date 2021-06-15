import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
  background: none;
  color: ${defaultTheme.status.warningColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.warningColorHover};
    outline: 3px solid ${defaultTheme.status.warningColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${defaultTheme.status.warningColorActive};
  }
`,
  primaryButtonWarning: () => `
  background-color: ${defaultTheme.status.warningColor};
  color: ${defaultTheme.textColorInverted};
`,
  secondaryButtonWarning: () => `
  border: 2px solid ${defaultTheme.status.warningColor};
`,
  error: () => `
  background: none;
  color: ${defaultTheme.status.errorColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.errorColorHover};
    outline: 3px solid ${defaultTheme.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${defaultTheme.status.errorColorActive};
  }
`,
  primaryButtonError: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.textColorInverted};
`,
  secondaryButtonError: () => `
  border: 2px solid ${defaultTheme.status.warningColor};
`,
  success: () => `
  background: none;
  color: ${defaultTheme.status.successColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.successColorHover};
    outline: 3px solid ${defaultTheme.status.successColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${defaultTheme.status.successColorActive};
  }
`,
  primaryButtonSuccess: () => `
  background-color: ${defaultTheme.status.successColor};
  color: ${defaultTheme.textColorInverted};
`,
  secondaryButtonSuccess: () => `
  border: 2px solid ${defaultTheme.status.warningColor};
`
};

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

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  border-radius: 5px;

  &:disabled {
    border: 2px solid ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
  border-radius: 5px;

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;
