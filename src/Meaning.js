import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function (definition, index) {
                return(
                <div key={index}>
                    <hr/>
                    <div className="definition">
                     <strong>Definition:</strong> {definition.definition}
                     </div>
                     <Examples examples={definition.example} />
                     <Synonyms synonyms={definition.synonyms} />
                     <hr/>
                </div>
                );
            })}
        </div>
    );
}