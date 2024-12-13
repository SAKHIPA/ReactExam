import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AutherComponent = () => {
    const [authers, setAuthers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://localhost:7216/api/Authers')
            .then(response => {
                setAuthers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Typography variant="h4" gutterBottom>Authors List</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Author ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Author Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Bio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authers.map(auth => (
                            <TableRow key={auth.id}>
                                <TableCell>{auth.id}</TableCell>
                                <TableCell>{auth.name}</TableCell>
                                <TableCell>{auth.bio}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AutherComponent;

