import React from "react";
import ExpandedSections from "./ExpandedSections";

let displaySections = [];
const FullMeal = (props) => {

    displaySections = [];
    const stepsList = props.mealInformation[props.specificMeal].steps;
    // console.log(props.mealInformation[props.specificMeal].steps)
    for(let singleStep = 0;singleStep < stepsList.length;singleStep++){
        // console.log(stepsList[singleStep]);
        displaySections.push(<ExpandedSections step={stepsList[singleStep]} key={singleStep} />)
    }

    return (
        <React.Fragment>
            {displaySections}
        </React.Fragment>
    )
}

export default FullMeal;