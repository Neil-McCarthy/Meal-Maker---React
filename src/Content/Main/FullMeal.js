import React from "react";
import ExpandedSections from "./ExpandedSections";
import FullMealOverview from "./FullMealOverview";

let displaySections = [];
let displayImages = [];
const FullMeal = (props) => {

    displaySections = [];
    displayImages = [];
    const stepsList = props.mealInformation[props.specificMeal].steps;
    //console.log(props.mealInformation[props.specificMeal].ingredients)
    for (let singleStep = 0;singleStep < stepsList.length;singleStep++) {
        // displaySections.push(<ExpandedSections step={stepsList[singleStep]} key={singleStep} />)
        displaySections.push(<li key={singleStep}>- {stepsList[singleStep]}</li>)
    }
    if (props.mealInformation[props.specificMeal].images != undefined) {
        for (let singleImage = 0;singleImage < props.mealInformation[props.specificMeal].images.length;singleImage++) {
            displayImages.push(<img src={require(`../../images/mains/${props.mealInformation[props.specificMeal].id}/${props.mealInformation[props.specificMeal].images[singleImage]}`)} />)
        }
    } else {
        displayImages.push(<img src={require(`../../images/mains/curry/curry0.jpg`)} />);
        displayImages.push(<img src={require(`../../images/mains/curry/curry1.jpg`)} />);
        displayImages.push(<img src={require(`../../images/mains/curry/curry2.jpg`)} />);
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
                {displayImages}
            </section>
        </React.Fragment>
    )
}

export default FullMeal;