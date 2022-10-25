import React from "react";
import ExpandedSections from "./ExpandedSections";
import FullMealOverview from "./FullMealOverview";

let displaySections = [];
const FullMeal = (props) => {

    displaySections = [];
    const stepsList = props.mealInformation[props.specificMeal].steps;
    //console.log(props.mealInformation[props.specificMeal].ingredients)
    for(let singleStep = 0;singleStep < stepsList.length;singleStep++){
        displaySections.push(<ExpandedSections step={stepsList[singleStep]} key={singleStep} />)
    }

    return (
        <React.Fragment>
            <FullMealOverview heading={props.mealInformation[props.specificMeal].title} description={props.mealInformation[props.specificMeal].briefDescription}/>
            {displaySections}
        </React.Fragment>
    )
}

export default FullMeal;