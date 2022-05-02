function Start({setGameState}){
    return (
        <button onClick={()=> setGameState("playing")}>Start Game</button>
    )
}

export default Start;