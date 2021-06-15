import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <>
    <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
      Hello world
    </PrimaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
      Goodbye world
    </SecondaryButton>
    <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
      Hey world
    </TertiaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
