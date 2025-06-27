import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Address submitted");
        const data = new FormData(e.target);

        console.log(data);
    }
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
                            height: '500px',
                            overflowY: 'auto',
                            backgroundColor: '#fff',
                            minWidth: 0
                        }}
                    >
                        <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
                            <AddressCard />
                            <Button
                                sx={{ 
                                    mt: 2, 
                                    bgcolor: "rgb(145, 85, 253)",
                                    '&:hover': {
                                        bgcolor: "rgb(135, 75, 243)"
                                    },
                                    borderRadius: '6px',
                                    textTransform: 'none',
                                    fontWeight: 600
                                }}
                                size="large"
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
                            p: 4,
                            backgroundColor: '#fff',
                            height: 'fit-content',
                            minWidth: 0
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
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