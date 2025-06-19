import { Button, Grid, Typography } from "@mui/material";
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid 
                className="text-center mt-10"
                container
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 6,
                    px: { xs: 2, md: 4 },
                    minHeight: "300px",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                    boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography 
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            fontSize: "1.3rem",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                            background: "linear-gradient(45deg, #ffffff, #e0e0e0)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 3,
                            textAlign: "center"
                        }}
                    >
                        About Us
                    </Typography>
                    
                    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Button 
                            sx={{ 
                                color: "#e0e0e0", 
                                textTransform: "none",
                                fontSize: "0.95rem",
                                fontWeight: 400,
                                py: 1.5,
                                px: 3,
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: "#ffffff",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)"
                                }
                            }}
                        >
                            About Us
                        </Button>
                        
                        <Button 
                            sx={{ 
                                color: "#e0e0e0", 
                                textTransform: "none",
                                fontSize: "0.95rem",
                                fontWeight: 400,
                                py: 1.5,
                                px: 3,
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: "#ffffff",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)"
                                }
                            }}
                        >
                            Blogs
                        </Button>
                        
                        <Button 
                            sx={{ 
                                color: "#e0e0e0", 
                                textTransform: "none",
                                fontSize: "0.95rem",
                                fontWeight: 400,
                                py: 1.5,
                                px: 3,
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: "#ffffff",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)"
                                }
                            }}
                        >
                            Contacts
                        </Button>
                    </div>
                </Grid>
                <Grid className='pt-20 align-center' item xs={12}>
                    <Typography 
                        variant="body2"
                        sx={{
                            color: "#e0e0e0",
                            fontSize: "0.875rem",
                            fontWeight: 300,
                            mt: 2
                        }}
                    >
                        © {new Date().getFullYear()} ShopBuzz. All rights reserved.
                    </Typography>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;