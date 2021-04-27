import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState (null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001111d1553bb514edd9fe9674747e55eac";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="What are you searching?"/>
            </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
}