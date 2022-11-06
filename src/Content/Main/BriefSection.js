import React from "react";
const BriefSection = (props) => {
    

    return (
        <section style={{backgroundImage:`url("../../images/mains/curry/curry2.jpg")`}} className=".display" onClick={event =>  {props.chooseMeal(props.thisMeal); props.changeDisplay("fullMeal")}}>
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
            <div>
                <img src={require("../../images/mains/curry/curry0.jpg")} />
            </div>
        </section>
    )
}

export default BriefSection;