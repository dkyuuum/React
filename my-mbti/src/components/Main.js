import styled from "@emotion/styled";

function Main({ setPhase }) {
  const onButtonClick = () => {
    setPhase(2);
  };

  return (
    <Container>
      <H1>My TEST</H1>
      <Button onClick={onButtonClick}>Start!</Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh; //높이
  background-color: #100f0f; //배경색
  text-align: center; //텍스트 정렬
  color: #e7f6f2; //글자색
  display: flex; //flex..
  gap: 50px; //..
  flex-direction: column; //..
  justify-content: center; //중앙 정렬1
  align-items: center; //중앙 정렬 2
  //font-family: "Hahmlet", serif;
  font-family: "Press start 2P"; //폰트 종류
`;

// const Box = styled.div`
//   background-color: #fff;
//   padding-bottom: 100px;
//   border-radius: 20px; //모서리 곡률
//   outline: 1px solid black;
//   font-size: 20px;
// `;

const H1 = styled.h1`
  margin: 0; //주변 마진
  padding: 100px 200px 200px;
  text-shadow: 1px 1px 3px #000;
`;

const Button = styled.button`
  all: unset; //초기화
  background-color: #100f0f;
  width: 200px;
  height: 50px;
  border-radius: 10px; //모서리 곡률
  text-shadow: 1px 1px #000;
  border: 1px solid #e7f6f2;
  //font-size: 25px;

  cursor: pointer; //커서 번경
  &:hover {
    //마우스가 요소 위에 올라갔을 때
    transform: scale(1.1); //전체 비율 1.1배
    background-color: #a5c9ca;
    color: #395b64;
    text-shadow: 1px 1px #000;
  }
`;

export default Main;

//ff7473 빨
//ffc952 노
//47b8e0 파
//34314c 회
