import AddData, { Add, Delete, Edit } from "../action/toAction"

const initialState = {
    data: {
        New: [
            {
                Id: 1,
                Heading: 'Enter new Data',
                Title: 'xyz',
                IsDone: false
            },
        ],
        ongoing: [
            {
                Id: 2,
                Heading: 'Complete It',
                Title: 'pqr',
                IsDone: false
            },
        ],
        finished: [
            {
                Id: 3,
                Heading: 'Already Done',
                Title: 'abc',
                IsDone: false
            },
        ]
    }
};

const toReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Add: {
            console.log('payload-->', payload)
            return { data: { ...payload } }
        }
        case Delete: {
            return { data: { ...state.data, ...payload } }
        }
        case Edit: {
            return { data: { ...state.data, ...payload } }
        }
        default:
            return { ...state }
    }
}

export default toReducer