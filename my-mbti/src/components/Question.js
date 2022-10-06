import styled from "@emotion/styled";
import { Q } from "../data/q";
import { useState } from "react";

function Question(setScore, setPhase) {
  const [step, setStep] = useState(0);

  const a1Handler = () => {
    setStep(step + 1);
  };

  const a2Handler = () => {
    setStep(step + 1);
  };

  const update = (choice) => {
    if (choice === "a1") {
      switch (Q[step].type) {
        case "EI":
          setScore((prev) => ({
            ...prev,
            EI: prev.EI + 1,
          }));
          break;
        case "PJ":
          setScore((prev) => ({
            ...prev,
            PJ: prev.PJ + 1,
          }));
          break;
        case "NS":
          setScore((prev) => ({
            ...prev,
            NS: prev.NS + 1,
          }));
          break;
        case "TF":
          setScore((prev) => ({
            ...prev,
            TF: prev.TF + 1,
          }));
          break;
        default:
      }
    } else {
      switch (Q[step].type) {
        case "EI":
          setScore((prev) => ({
            ...prev,
            EI: prev.EI - 1,
          }));
          break;
        case "PJ":
          setScore((prev) => ({
            ...prev,
            PJ: prev.PJ - 1,
          }));
          break;
        case "NS":
          setScore((prev) => ({
            ...prev,
            NS: prev.NS - 1,
          }));
          break;
        case "TF":
          setScore((prev) => ({
            ...prev,
            TF: prev.TF - 1,
          }));
          break;
        default:
      }
    }

    if (step === Q.length - 1) {
      //setPhase((prev) => prev + 1);
      setPhase(3);
    }
    setStep(step + 1);
  };

  return (
    <Container>
      <Title>{Q[step].title}</Title>
      <ButtonBox>
        <Button onClick={a1Handler}>{Q[step].a1}</Button>
        <p>OR</p>
        <Button onClick={a2Handler}>{Q[step].a2}</Button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  white-space: pre-wrap; //enter
  height: 100vh; //높이
  color: #a5c9ca;
  background-color: #100f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 250px;
  flex-direction: column;
  font-size: 30px;
  font-weight: Bold;
  font-family: "Hahmlet", serif;
`;

const Title = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  gap: 100px;
`;

const Button = styled.button`
  width: 350px;
  height: 100px;
  font-size: 20px;
  border-radius: 10px;
  font-family: "Hahmlet", serif;
  border: transparent;

  cursor: pointer; //커서 번경
  &:hover {
    background-color: #a5c9ca;
  }
`;

export default Question;
