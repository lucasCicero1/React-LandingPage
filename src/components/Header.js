import React from "react";
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        color: '#fff',
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
    },
    colorText: {
        color: '#5aff3d',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '4em',
    },
    goDown: {
        color: '#5aff3d',
    },
}));

export default function Header() {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} color="transparent" elevation={0}>
                <Toolbar className={classes.appbarWrapper}>

                    <h1 className={classes.appbarTitle}>
                        My<span className={classes.colorText}>Island.</span>
                    </h1>

                    <IconButton>
                        <SortIcon className={classes.icon} style={{ fontSize: '1.5em', }} />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapseHeigth={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> My <span className={classes.colorText}>Island.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton >
                            <ExpandMoreIcon className={classes.goDown} style={{ fontSize: '3em', }} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>

        </div>
    )
}