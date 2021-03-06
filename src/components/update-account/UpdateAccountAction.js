import axios from 'axios';

const UpdateAccountAction = (values, id, getToken) => {
    return async (dispatch) => {
        const response = await axios({
            method: 'PUT',
            url: `http://localhost:1337/accounts/${id}`,
            data: values,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        })

        const resData = await response.data

        dispatch({ 
            type: 'UPDATE_ACCOUNT',
            data: resData
        }) 
    }
  
     
}

export default UpdateAccountAction;

