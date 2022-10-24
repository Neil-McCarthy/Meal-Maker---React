import React from "react";

const BriefSection = (props) => {


    return (
        <section className=".display">
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
        </section>
    )
}

export default BriefSection;