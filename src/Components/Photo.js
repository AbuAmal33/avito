import React from 'react';
import {Link} from "react-router-dom";

function Photo(props) {
    return (
        <li>
            <Link to={`/${props.photo.id}`}>
                <img src={props.photo.url}/>
            </Link>
        </li>
    )
}

export default Photo;