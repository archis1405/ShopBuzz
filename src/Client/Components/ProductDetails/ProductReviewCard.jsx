import React from "react";
import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
    return(
        <div>
            <Grid container spacing={2} gap={3}>

                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{ width:56 , height:56 , bgcolor:"#9155fd" }}>
                            A 
                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Archisman</p>
                            <p className="opacity-70">June 26 ,2025</p>
                        </div>
                    </div>

                    <Rating value={3.5} name="half-rating" precision={0.5}  readOnly/>
                    <p>
                        Value for money Product  
                    </p>
                    
                </Grid>

            </Grid>
        </div>
    )
}

export default ProductReviewCard;