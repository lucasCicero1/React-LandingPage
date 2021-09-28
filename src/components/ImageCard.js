import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: '#000000a3',
        margin: '20px',
    },
    media: {
        height: 440,
        backgroundColor: '#000000a3',
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: '#fff',
    },
});

export default function ImageCard({ place, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                className={classes.root} >
                <CardMedia
                    className={classes.media}
                    image={place.imageUrl}
                    title="Contemplative Reptile"

                />
                <CardContent className={classes.bg}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {place.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        className={classes.desc}
                    >
                        {place.description}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}
