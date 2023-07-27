import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [outcome, setOutcome] = useState("");
  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    console.log("useEffect has been triggered");
    handleSurvive();
  }, [dummy]);

  async function handleSurvive() {
    const API = "https://wild-west-xwfg.onrender.com/survive";
    const res = await axios.get(API); // axios made a pinky Promise to give me data
    console.log(res.status);
    setOutcome(res.data); // is asynconrorisuhiuhsdfksjbksjf

    // we need to use res.data here to get the first word of the outcome, because "outcome" isn't finished setting yet
    const firstWord = res.data.replace(/ .*/, ""); // first word of the response
    console.log(firstWord);
  }

  function insultJez() {
    setDummy(dummy + 1);
  }

  return (
    <div className="App">
      {/* <button onClick={handleSurvive}>Brave the Oregon Trail</button> */}
      {/* <button onClick={insultJez}>Increase Dummy: {dummy}</button> */}

      {outcome}
    </div>
  );
}

export default App;
