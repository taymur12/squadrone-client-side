import { TextField, Button, Box } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const adminHandle = e =>{
        const user = {email}
        fetch('https://fierce-hollows-37330.herokuapp.com/newusers/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            alert('Successfull')
        })
        e.preventDefault()
    }
    return (
        <div style={{ margin:'20px'}}>
            <h2 style={{marginTop:'150px'}}>Make a Admin</h2>
            <Box style={{border:'1px solid lightgray' , padding:'30px', display:'inline-block', margin:'0 auto', marginBottom:'150px'}}>
            <form  onSubmit={adminHandle}>
                <TextField label="Email" type='email' variant="standard" onBlur={handleOnBlur}  />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            </Box>
            
        </div>
    );
};

export default MakeAdmin;