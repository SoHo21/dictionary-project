import React from "react";
import "./Examples.css";

export default function Examples(props) {
        if (props.examples) {
        return (
        <ul className="Examples">
            <strong>Example:</strong> {props.examples.map(function (example, index){
                return (
                    <li key={index}>
                       {example}
                    </li>
                )
            })}
        </ul>
        );
    } else {
        return null;
    }
}