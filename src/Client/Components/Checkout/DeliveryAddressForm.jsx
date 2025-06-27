import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        
        // You can also validate the form here
        const requiredFields = ['firstName', 'lastName', 'address', 'city', 'state', 'zipCode', 'phoneNumber'];
        const missingFields = requiredFields.filter(field => !formData[field].trim());
        
        if (missingFields.length > 0) {
            console.log('Missing required fields:', missingFields);
            alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
            return;
        }
        
        console.log('All fields completed. Ready to deliver!');
        // Here you would typically send the data to your backend
    };

    const handleAddressCardDeliver = () => {
        console.log('Delivering to selected address from AddressCard');
        console.log('Current Form Data:', formData);
        // Handle delivery to the selected address from AddressCard
        // You might want to get the selected address data from AddressCard component
    };

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Grid container spacing={3} sx={{ alignItems: 'flex-start' }}>
                
                {/* Left: Address Selector */}
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box 
                        sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            height: { 
                                xs: '300px',  // Mobile: smaller height
                                sm: '400px',  // Tablet: medium height
                                md: '500px',  // Desktop: full height
                                lg: '550px'   // Large screens: even taller
                            },
                            overflowY: 'auto',
                            backgroundColor: '#fff',
                            minWidth: 0,
                            display: 'flex',
                            width:"100%",
                        }}
                    >
                        <Box sx={{ 
                            p: { xs: 2, sm: 2.5, md: 3 }, 
                            borderBottom: '1px solid #e0e0e0' 
                        }}>
                            <AddressCard />
                            <Button
                                onClick={handleAddressCardDeliver}
                                sx={{ 
                                    mt: { xs: 1.5, sm: 2 }, 
                                    bgcolor: "rgb(145, 85, 253)",
                                    '&:hover': {
                                        bgcolor: "rgb(135, 75, 243)"
                                    },
                                    borderRadius: '6px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: { xs: '14px', sm: '16px' },
                                    py: { xs: 1, sm: 1.5 }
                                }}
                                size={window.innerWidth < 600 ? "medium" : "large"}
                                variant="contained"
                                fullWidth
                            >
                                DELIVER HERE
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Right: Form */}
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box 
                        sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            p: { xs: 2, sm: 3, md: 4 },
                            backgroundColor: '#fff',
                            height: 'fit-content',
                            minWidth: 0
                        }}
                    >
                        <form onSubmit={handleFormSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="family-name"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        multiline
                                        rows={3}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="address-level2"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="address-level1"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zipCode"
                                        name="zipCode"
                                        label="Zip / Postal code"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="postal-code"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        fullWidth
                                        autoComplete="tel"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '6px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        sx={{
                                            mt: 2,
                                            bgcolor: "rgb(145, 85, 253)",
                                            '&:hover': {
                                                bgcolor: "rgb(135, 75, 243)"
                                            },
                                            py: 1.5,
                                            fontWeight: 600,
                                            borderRadius: '6px',
                                            textTransform: 'none',
                                            fontSize: '16px'
                                        }}
                                        size="large"
                                        variant="contained"
                                        fullWidth
                                    >
                                        DELIVER HERE
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DeliveryAddressForm;