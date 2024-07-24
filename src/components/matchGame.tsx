import React, { useEffect, useState } from "react";
import Card from "./card"



export const MatchGame = (props) =>{
    let { data } = props;
    let [prev, setPrev] = useState(-1)
    let [listCards, setListCards] = useState(data.sort(()=>Math.random()-0.5))
    let [errorCounter, setErrorCounter] = useState(0);
    let [asserts, setAsserts] = useState(0);
    let [disableGame, setDisableGame] = useState(false);
    let [win, setWin] = useState(false);
    let disable = disableGame ? " disableGame " : win ? "hidedashboard" : " ";

    useEffect(()=>{
        if(errorCounter === 3){
            alert("You Lost :( ")
            setDisableGame(true);
        }

        if(asserts === data.length){
            setWin(true)
        }
    }, [errorCounter, asserts]);

    function onSelectCard(index:number){
        if(prev === -1){
            listCards[index].status = "active";
            setListCards([...listCards])
            setPrev(index)
        }else{
            verifyCard(index);
        }
    }

    function verifyCard(secondCard:number){
        if(listCards[secondCard].key=== listCards[prev].key){
            listCards[secondCard].status = "correct"
            listCards[prev].status = "correct"
            setListCards([...listCards])
            setPrev(-1)
            setAsserts(asserts + 2);
        }else {
            listCards[secondCard].status = "wrong"
            listCards[prev].status = "wrong"
            setListCards([...listCards])
            setErrorCounter(errorCounter + 1)
            setTimeout(()=>{
                listCards[secondCard].status = ""
                listCards[prev].status = ""
                setListCards([...listCards])
                setPrev(-1)
            }, 900)
        }
    }

    return (
        <>
            <div className={disable}>
                {listCards.map((item, index)=>{
                    return (
                        <div className="cardmain">
                            <Card key={index} data={item} id={index} onSelectCard={onSelectCard}></Card>
                        </div>
                    );
                })}
                
            </div>
            <div> {win? <span>WINNER!!!!</span> : <span>ERRORS: {errorCounter}</span> } </div>
        </>
    )
}

export default MatchGame;