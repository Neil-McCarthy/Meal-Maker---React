import React, { useState } from "react";
import BriefSection from "./BriefSection";

// let sectionPosition;
let displaySections = [];
const DisplayAllOptions = (props) => {
    const [output, setOutput] = useState("ello guv");
    if (props.mealInformation.length > 0) {
        displaySections = [];
        for (let specificMeal = 0;specificMeal < props.mealInformation.length;specificMeal++) {
            displaySections.push(<BriefSection heading={props.mealInformation[specificMeal].title} description={props.mealInformation[specificMeal].briefDescription} />)
        }
    }
    return (
        <React.Fragment>
            {displaySections}
        </React.Fragment>
    )
}

export default DisplayAllOptions;