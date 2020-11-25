import React from 'react'

function Random(props) {
    let randomNumber = Math.floor(Math.random() * props.max) + props.min
    return (
        <div>
            <h1>Random value between {props.min} and {props.max} => {randomNumber}</h1>
        </div>
    )
}

export default Random
