import React from 'react';

function Modal(props) {
    return (
        <div className={'image'}>
            <img src={props.modal.url} />
        </div>
    );
}

export default Modal;