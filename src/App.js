import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./Quiz";

function App() {
    const [start, setStart] = useState(false);

    const vanStart = () => {
        console.log("Start de quiz!")
        setStart(true);
    }

    if (start === true) {
        return (
            <div className="App">
                <Quiz />
            </div>
        );
    } else {
        return (
            <div className="App">
                <div role="dialog" className="intro">
                    <div className="introText">
                        <h1>
                            Welkom bij de <span className="title">Stadjers Quiz! &#x1F44B; </span>
                        </h1>
                        <span className="sub-title">
                            Beantwoord 25 vragen over Stad Groningen en laat zien dat jij een kenner bent.
                        </span>
                    </div>
                    <div className="introStart" onClick={() => vanStart()}>
                        <div className="start">START &#128073;</div>
                    </div>

                    <div className="deelMe">
                        Deel deze quiz vooral: <a href="https://stadjers-quiz.nl">stadjers-quiz.nl</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
