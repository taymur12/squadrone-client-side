import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';


const Review = () => {

    const {user} = useAuth()
    const initialInfo = {name:user.displayName , email: user.email}
    const [reviewInfo, setReviewInfo] = useState(initialInfo)

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...reviewInfo}
        newReview[field] = value
        setReviewInfo(newReview)
    }
    const handleBookingSubmit = e =>{
       
        const ReviewData = {...reviewInfo}
       
        //send  data to server
        fetch('https://fierce-hollows-37330.herokuapp.com/review', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(ReviewData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Review Submit Successfully - Check it out Homepage')
                window.location.reload();

                
            }
        })
       
        e.preventDefault();
    }

    return (
        <div>
            <h2>My Orders</h2>
            <Typography style={{textAlign:'center'}} variant="h4" gutterBottom component="div">
                Review Us
            </Typography>

            <form style={{width:'60%', margin:'0 auto', paddingBottom:'30px'}} onSubmit={handleBookingSubmit}>
                        
                        <TextField
                            
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            placeholder='Name'
                            size="small"
                            name='name'
                            onBlur={handleOnBlur}
                            required
                        />
                    
                        <TextField
                            type='number'
                            sx={{width:'90%', m:1}}
                            id="outlined-size-small"
                            placeholder="Rating"
                            size="small"
                            name='rating'
                            inputProps={{min:0, max: 5}}
                            onBlur={handleOnBlur}
                            required
                        />
                        <TextField
                        type='text'
                        id="outlined-multiline-static"
                        label="Message"
                        rows={4}
                        name='message'
                        placeholder='Review Details Text'
                        onBlur={handleOnBlur}
                        sx={{width:'90%', m:1}}
                    />
                        
                        <Button style={{marginLeft:'10px'}} type='Submit' variant = "contained">Submit</Button>
                    </form>
            
        </div>
    );
};

export default Review;

