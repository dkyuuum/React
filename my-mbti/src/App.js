import styled from "@emotion/styled";
import { useState } from "react";
import Main from "./components/Main";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [phase, setPhase] = useState(1);
  const [score, setScore] = useState({
    EI: 0,
    PJ: 0,
    NS: 0,
    TF: 0,
  });
  return (
    <div className="App">
      {phase === 1 && <Main setPhase={setPhase} />}
      {phase === 2 && <Question setPhase={setPhase} />}
      {phase === 3 && <Result score={score}></Result>}
    </div>
  );
}

export default App;
