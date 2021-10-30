import React, { useState, useEffect, useRef } from "react";
import Players from "./Players";
import "./Container.css";

const initialState = {
  players: [
    {
      name: "player 1",
      winner: false,
      score: 0,
      active: true,
      current: 0,
    },
    {
      name: "player 2",
      winner: false,
      active: false,
      score: 0,
      current: 0,
    },
  ],
};

const Container = () => {
  const [state, setState] = useState(initialState);
  const [dice, setDice] = useState(0);
  const [isGameActive, setIsGameAcitve] = useState(true);

  const isInitialMount = useRef(true);

  let currentScorePlayer1 = state.players[0].current;
  let currentScorePlayer2 = state.players[1].current;

  const nextPlayer = () => {
    setState((preState) => {
      return {
        players: preState.players.map((player) => ({
          ...player,
          active: !player.active,
          score: 0,
        })),
      };
    });
    setDice(0);
  };

  useEffect(()=>{
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }else{
    let hasWinner = state.players.find((player)=> player.current >= 20);
        if(hasWinner){
          const players = state.players.map(player=>{
            if(player.active){
              return{
                ...player,
                name: "Winner",
                winner: true,
              }
            }return player;
          })
          setState({players})
          setIsGameAcitve(false);
          setDice(0)
        }else{
          nextPlayer()
        }
      }
  },[currentScorePlayer2,currentScorePlayer1])

  const handleDice = (e) => {
    if (isGameActive) {
      const dice = Math.floor(Math.random() * 6) + 1;
      if (dice !== 1) { 
        setDice(dice);
        setState((preState) => {
          return {
            players: preState.players.map((player) => {
              if (player.active) return { ...player, score: player.score + dice };
              else return {...player}
            }),
          };
        });
      } else {
        nextPlayer();
      }
    }
  };

  const handleHold = (e) => {
    if (isGameActive) {
      const players = state.players.map((player) => {
        if (player.active) {
          return {
            ...player,
            current: player.current + player.score,
          };
        }
        return player;
      });
      setState({ players });
    }
  };
  const handleNewGame = (e) => {
    setState(initialState);
    isInitialMount.current = true;
    setDice(0);
    setIsGameAcitve(true)
  };

  return (
    <div className="container">
      {state.players.map((player, index) => {
        return (
          <Players
            key={index}
            score={player.score}
            current={player.current}
            active={player.active}
            winner={player.winner}
            name={player.name}
          />
        );
      })}
      {dice ? (
        <div className="img-container">
          <img src={`/images/dice-${dice}.png`} alt="dice" />
        </div>
      ) : (
        ""
      )}
      <button className="btn-roll" onClick={() => handleDice()}>
        Roll
      </button>
      <button className="btn-hold" onClick={() => handleHold()}>
        Hold
      </button>
      <button className="btn-new" onClick={() => handleNewGame()}>
        New Game
      </button>
    </div>
  );
};

export default Container;
