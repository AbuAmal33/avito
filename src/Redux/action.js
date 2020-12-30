export const loadPhotos = () => {
    return dispatch => {
        dispatch({
            type: 'photos/load/start'
        });

        fetch('https://boiling-refuge-66454.herokuapp.com/images/')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type:'photos/load/success',
                    payload: json
                })
            })
    }
}

export const loadModals = (id) => {
    return dispatch => {
        dispatch({
            type: 'modals/load/start',
            payload: id
        });

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type:'modals/load/success',
                    payload: json
                })
            })
    }
}

export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'close/modal'
        });
    };
}