import React from "react";
import ExpandedSections from "./ExpandedSections";
import FullMealOverview from "./FullMealOverview";

let displaySections = [];
const FullMeal = (props) => {

    displaySections = [];
    const stepsList = props.mealInformation[props.specificMeal].steps;
    //console.log(props.mealInformation[props.specificMeal].ingredients)
    for(let singleStep = 0;singleStep < stepsList.length;singleStep++){
        // displaySections.push(<ExpandedSections step={stepsList[singleStep]} key={singleStep} />)
        displaySections.push(<li key={singleStep}>- {stepsList[singleStep]}</li>)
    }

    return (
        <React.Fragment>
            <FullMealOverview mealInfo={props.mealInformation[props.specificMeal]} />
            <section>
                <h1>
                    Step-by-Step
                </h1>
                <ul id="stepsList">
                    {displaySections}
                </ul>
            </section>
            <section id="fullMealImages">
                <img src={require(`../../images/mains/Curry/${props.mealInformation[props.specificMeal].images[0]}`)} />
                <img src={require(`../../images/mains/Curry/${props.mealInformation[props.specificMeal].images[1]}`)} />
                <img src={require(`../../images/mains/Curry/${props.mealInformation[props.specificMeal].images[2]}`)} />
            </section>
        </React.Fragment>
    )
}

export default FullMeal;