import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //보내는 리소스의 타입
      },
      body: JSON.stringify({
        ...word, //기존 데이터에
        isDone: !isDone, //바꿔서 넣어주기
      }),
    }).then(res => {
      if (res.ok) { //응답을 받기, ok라면
        setIsDone(!isDone); //state를 바꿔줌
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      })
      .then(res => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0, //id를 0으로 바꿔줌
          });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE