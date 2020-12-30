import React from 'react';

function Input(props) {
    return (
        <div className={'input'}>
            <div className={'name'}>
                <input placeholder={'Ваше имя'}/>
            </div>
            <div className={'family'}>
                <input placeholder={'Ваша фамилия'}/>
            </div>
            <div className={'btn'}>
                <button>Отправить комментарий</button>
            </div>
        </div>
    );
}

export default Input;