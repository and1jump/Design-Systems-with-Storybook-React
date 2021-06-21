import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";
import { useSpring, animated, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 28px;
  height: 28px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.molasses
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for an account!"
          style={{ width: "17.7rem" }}
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => console.log("You closed the modal!")}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
