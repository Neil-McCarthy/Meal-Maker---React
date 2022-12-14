import React from "react";


const Section = (props) => {
    return(
        <section className={props.sectionPosition}>
            <h1>
                {props.heading}
            </h1>
            <p>
                {props.paragraph}
            </p>
        </section>
    );
}

export default Section;