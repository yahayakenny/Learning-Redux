const initialState = {
    account_name: '',
    account_number: '',
}

const UpdateAccountReducer = (state=initialState, action) => {
    switch (action.type){
        case 'UPDATE_ACCOUNT':
            return action.data
        default:
            return state
    }
}

export default UpdateAccountReducer;