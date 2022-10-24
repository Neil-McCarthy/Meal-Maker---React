import React from "react";

const BriefSection = (props) => {


    return (
        <section className=".display" onClick={event =>  {props.chooseMeal(props.thisMeal); props.changeDisplay("full meal")}}>
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
        </section>
    )
}

export default BriefSection;