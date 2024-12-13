

import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';

const AddAutherComponent = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const newAuthor = {
            id: 0, // Assuming the ID is auto-generated by the backend
            name,
            bio
        };

        try {
            await axios.post('https://localhost:7216/api/Authers/Author', newAuthor);
            setLoading(false);
            setSuccess(true);
            setName('');
            setBio('');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>Add New Author</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Author Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </Button>
                {success && <Typography variant="body1" color="primary" style={{ marginTop: '10px' }}>Author added successfully!</Typography>}
                {error && <Typography variant="body1" color="error" style={{ marginTop: '10px' }}>Error: {error}</Typography>}
            </form>
        </Paper>
    );
};

export default AddAutherComponent;
