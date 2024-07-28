import winner from "../undraw_winners_ao2o 2.svg";
import React from "react"

function Results({ score, setGameState, setScore }) {
    return (
        <div className="text-center">
            <img src={winner} alt="" />
            <h2>Results</h2>
            <p>You got <span className="green">{score}</span> correct answer{score === 1 ? null : 's'}.</p>
            <button className="results-button" onClick={() => {
                setScore(0);
                setGameState("playing");
            }
            }>Try again</button>
        </div>
    )
}

export default Results;