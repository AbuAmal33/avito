import React from 'react';

function Comments(props) {
    return (
        <div className={'comments'}>
            <div>{props.comment.date}</div>
            <div>{props.comment.text}</div>
        </div>
    );
}

export default Comments;