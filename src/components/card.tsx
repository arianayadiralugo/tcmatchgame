import React from "react";

export const Card = (props:any) => {
    //destructuring props
    const { data: {status, name}, id } = props;
    const itemClass = status ? " active " + status :" ";

    return (
        // returning value to the parent using props.selectCard()
        <div className={"card" + itemClass} onClick={()=>props.onSelectCard(id)}>
            {name}  
        </div>
    )
}

export default Card;