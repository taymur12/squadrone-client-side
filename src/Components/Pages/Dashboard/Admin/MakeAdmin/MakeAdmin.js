import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const adminHandle = e =>{
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make a Admin</h2>
            <form onSubmit={adminHandle}>
                <TextField label="Email" type='email' variant="standard" onBlur={handleOnBlur}  />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;