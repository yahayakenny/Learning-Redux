import React, {useState} from 'react';
import UpdateAccountAction from './UpdateAccountAction';
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'

const UpdateAccountForm = () => {
    let {id} = useParams();
    let dispatch = useDispatch()
    
    const getToken = useSelector(state => state.auth.token);
    const populateAccounts = useSelector(state => state.populateAccounts);

    let account = {
        account_name: populateAccounts.account_name,
        account_number: populateAccounts.account_number,
    }

    const [values, setValues] = useState(account);
 
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateAccountAction(values, id, getToken))
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <div>Update account</div>
                <div>Id: {id}</div>
                <label>Account Name
                    <input type = 'text' onChange = {handleChange} value = {values.account_name} name = 'account_name'/>
                </label>
                <label>Account Number
                    <input type = 'number' onChange = {handleChange} value = {values.account_number} name = 'account_number'/>
                </label> 
                <button>Submit</button>
            </form>
        </div>
        
)}

export default UpdateAccountForm;