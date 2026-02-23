import { useState } from "react";
import ImageCard from "./ImageCard";
import './styles/CardContainer.css'

function CardContainer({prompts}) {

    return(
        <div className="CardContainer">
            {prompts.map((animal) => {
                return <ImageCard key={animal} prompt={animal}/>
            })}
        </div>
    )

}

export default CardContainer;
