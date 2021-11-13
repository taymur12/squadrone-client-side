
import { Typography, Box ,Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://fierce-hollows-37330.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const deleteBtnHandler = id =>{
        const url =`https://fierce-hollows-37330.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'Delete'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('Order has been deleted successfully', window.location.reload(false))
            }
        })
    }
   
    return (
        <div>
            
            
            <Typography sx={{margin:'30px '}} variant="h6" gutterBottom component="div">
                My Orders
            </Typography>
            <h2 style={{textAlign:'center'}}>Manage All Orders</h2>

        <Box sx={{marginBottom:'80px'}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell sx={{fontSize:'18px'}}>Product Name</TableCell>
                <TableCell sx={{fontSize:'18px'}} align="right">Price</TableCell>
                  <TableCell sx={{fontSize:'18px'}} align="right">Email</TableCell>
                <TableCell sx={{fontSize:'18px'}} align="right">Address</TableCell>
                <TableCell sx={{fontSize:'18px'}} align="right">Delete Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right"><Button onClick={()=>deleteBtnHandler(row._id)} >Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>




            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                
                            </TableRow>
                        </TableHead>
           
            </Table>
                </TableContainer>
        </div>
    );
};

export default ManageAllOrder;