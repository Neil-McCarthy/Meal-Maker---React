import React from "react";



const BriefSection = (props) => {
    
    let backgroundImageDisplay = require("../../images/mains/curry/curry0.jpg");
    if (props.mealInfo.images != undefined) {
        backgroundImageDisplay = require(`../../images/mains/${props.mealInfo.id}/${props.mealInfo.images[props.mealInfo.images.length - 1]}`);
    }

    return (
        <section className=".display" onClick={event =>  {props.chooseMeal(props.thisMeal); props.changeDisplay("fullMeal")}}>
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
            <div>
                <img src={backgroundImageDisplay} />
            </div>
        </section>
    )
}

export default BriefSection;