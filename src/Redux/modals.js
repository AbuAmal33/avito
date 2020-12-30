
const initialState = {
    items: [],
    comments: [],
    opened: null,
    loading: false,
    loadingComments: false
}

const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'modals/load/start':
            return {
                ...state,
                opened: action.payload,
                loading: true
            }
        case 'modals/load/success':
            return {
                ...state,
                items: action.payload,
                comments: action.payload.comments,
                loading: false
            }
        case 'close/modal':
            return {
                ...state,
                opened: null
            }
        default:
            return state;
    }
}

export default modalsReducer;