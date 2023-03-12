import React from 'react';
import quotes from "./quotes.json";
import ResetTimer from "./ResetTimer";



const ResetTimerContainer = (props) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let quote=quotes[getRandomInt(50)]


    return (
       <>
        <ResetTimer title={props.title} description={props.description} deadline={props.deadline} quote={quote}/>
       </>
    );
};

export default ResetTimerContainer;