import { makeStyles } from "@mui/styles";
import React from "react";
import useWindowPosition from "../hook/useWindowPosition";
import places from "../static/places";
import ImageCard from "./ImageCard";


const useStyles = makeStyles( ({theme}) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

}));

export default function PlaceToVisit() {
    const classes = useStyles();
    
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root} id="place-to-visit"
            sx={{ display: { xs: 'none', md: 'block' },
                flexDirection: 'row'}} >
            <ImageCard place={places[0]} checked={checked} />
            <ImageCard place={places[1]} checked={checked} />
        </div>
    )
}