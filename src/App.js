import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg-1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <CssBaseline />
       <Header />
       <PlaceToVisit />
    </div>
  );
}