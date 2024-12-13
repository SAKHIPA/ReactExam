

import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://localhost:7216/api/Cntegory')
            .then(response => {
                setCategories(response.data);
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
            <Typography variant="h4" component="h1" gutterBottom>Categories List</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Category ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Category Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{category.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CategoryComponent;
