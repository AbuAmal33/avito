import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {
    const photos = useSelector(state => state.photos.items);

    return (
        <div className={'container'}>
            <div className={'text'}>
                <h1>TEST APP</h1>
            </div>
            <ul className={'photos'}>
                {photos.map(photo => {
                    return <Photo key={photo.id} photo={photo}/>
                })}
            </ul>
        </div>
    );
}

export default Photos;