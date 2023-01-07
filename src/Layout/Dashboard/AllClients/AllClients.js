import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { TableMainContainer } from '../../../Styles/Index';
import { toast } from 'react-hot-toast';

const AllClients = () => {

    const {data: clients = [], refetch} = useQuery({
        queryKey: ['clients'],
        queryFn: async() => {
            const res = await axios.get(`https://theme-portal-server.vercel.app/allclients`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })

    console.log(clients);

    const handleClientDelete = (id) => {
        console.log(id);
        axios.delete(`https://theme-portal-server.vercel.app/deleteclient/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
        .then(res => {
            refetch();
            toast.success('Client Deleted Successfully')
        })

    }


    return (
        <TableMainContainer>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map((client) => (
                            <TableRow
                                key={client._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {client.name}
                                </TableCell>
                                <TableCell align="right">{client.email}</TableCell>
                                <TableCell align="right">
                                    {
                                        client.verified ?
                                            <>
                                                Verified
                                            </>
                                            :
                                            <>
                                                Not Verified
                                            </>
                                    }
                                </TableCell>
                                <TableCell sx={{textAlign: 'right'}} >
                                    <Button onClick={() => handleClientDelete(client._id)} color='warning' variant='contained' >Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableMainContainer>
    );
};

export default AllClients;