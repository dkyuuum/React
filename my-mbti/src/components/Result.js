import styled from "@emotion/styled";

function Result({ score }) {
  const mbti = `${score.EI < 0 ? "I" : "E"}${score.NS < 0 ? "N" : "S"}${
    score.TF < 0 ? "T" : "F"
  }${score.PJ < 0 ? "P" : "J"}`;

  console.log(mbti);
  return (
    <Container>
      {Result.map((obj, i) => {
        if (obj.type === mbti) {
          return <div>{obj.exp}</div>;
        }
      })}
      <Text>{mbti}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Press Start 2P";
  font-size: 50px;
`;

export default Result;
