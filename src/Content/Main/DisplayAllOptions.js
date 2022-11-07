import React, { useState } from "react";
import BriefSection from "./BriefSection";

// let sectionPosition;
let displaySections = [];
const DisplayAllOptions = (props) => {
    if (props.mealInformation.length > 0) {
        displaySections = [];
        for (let specificMeal = 0;specificMeal < props.mealInformation.length;specificMeal++) {
            displaySections.push(<BriefSection mealInfo={props.mealInformation[specificMeal]} heading={props.mealInformation[specificMeal].title} description={props.mealInformation[specificMeal].briefDescription} key={specificMeal} changeDisplay={props.changeDisplay} chooseMeal={props.chooseMeal} thisMeal={specificMeal} />)
        }
    }
    return (
        <React.Fragment>
            {displaySections}
        </React.Fragment>
    )
}

export default DisplayAllOptions;