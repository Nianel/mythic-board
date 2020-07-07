import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import LeaderboardContainer from "./LeaderboardContainer";

const images = [
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/03/Header.jpg',
        title: "Atal'Dazar",
        width: '8%',
        id: 'ataldazar',
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/05/Freehold-1.jpg',
        title: 'Freehold',
        width: '8%',
        id: 'freehold',
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/05/Kings-Rest.jpg',
        title: "King's Rest",
        width: '8%',
        id: 'kings-rest'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/05/Shrine-of-the-Storm.jpg',
        title: 'Shrine of the Storm',
        width: '8%',
        id: 'shrine-of-the-storm'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/05/Siege-of-Boralus.jpg',
        title: 'Siege of Boralus',
        width: '8%',
        id: 'siege-of-boralus'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/05/Temple-of-Sethraliss.jpg',
        title: 'Temple of Sethraliss',
        width: '8%',
        id: 'temple-of-sethraliss'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/05/The-MOTHERLODE-1.jpg',
        title: 'The MOTHERLODE!!',
        width: '8%',
        id: 'the-motherlode'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/06/Underrot.jpg',
        title: 'The Underrot',
        width: '8%',
        id: 'the-underrot'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/03/Header-1.jpg',
        title: 'Tol Dagor',
        width: '8%',
        id: 'tol-dagor'
    },
    {
        url: 'https://www.mistyteahouse.com/wp-content/uploads/2018/04/Waycrest-Manor.jpg',
        title: 'Waycrest Manor',
        width: '8%',
        id: 'waycrest-manor'
    },
    {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Operation: Mechagon - Junkyard',
        width: '8%',
        id: 'operation-mechagon-junkyard'
    },
    {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Operation: Mechagon - Workshop',
        width: '8%',
        id: 'operation-mechagon-workshop'
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 150,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}))

export default function LeaderboardButton(props) {
    const classes = useStyles()
    const {handleClick} = props

    return (
        <Router>
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                        value={image.id}
                        onClick={handleClick}
                    >
                        <Link to={`/leaderboard/${image.id}`}>
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}

                            />
                            <span className={classes.imageBackdrop}/>
                            <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                              {image.title} <span className={classes.imageMarked}/>
                            </Typography>
                          </span>
                        </Link>
                    </ButtonBase>
                ))}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/leaderboard/ataldazar">
                        <LeaderboardContainer key={"ataldazar"} id="ataldazar"/>
                    </Route>
                    <Route path="/leaderboard/freehold">
                        <LeaderboardContainer key={"freehold"} id="freehold"/>
                    </Route>
                    <Route path="/leaderboard/kings-rest">
                        <LeaderboardContainer key={"kings-rest"} id="kings-rest"/>
                    </Route>
                    <Route path="/leaderboard/shrine-of-the-storm">
                        <LeaderboardContainer key={"shrine-of-the-storm"} id="shrine-of-the-storm"/>
                    </Route>
                    <Route path="/leaderboard/siege-of-boralus">
                        <LeaderboardContainer key={"siege-of-boralus"} id="siege-of-boralus"/>
                    </Route>
                    <Route path="/leaderboard/temple-of-sethraliss">
                        <LeaderboardContainer key={"temple-of-sethraliss"} id="temple-of-sethraliss"/>
                    </Route>
                    <Route path="/leaderboard/the-motherlode">
                        <LeaderboardContainer key={"the-motherlode"} id="the-motherlode"/>
                    </Route>
                    <Route path="/leaderboard/the-underrot">
                        <LeaderboardContainer key={"the-underrot"} id="the-underrot"/>
                    </Route>
                    <Route path="/leaderboard/tol-dagor">
                        <LeaderboardContainer key={"tol-dagor"} id="tol-dagor"/>
                    </Route>
                    <Route path="/leaderboard/waycrest-manor">
                        <LeaderboardContainer key={"waycrest-manor"} id="waycrest-manor"/>
                    </Route>
                    <Route path="/leaderboard/operation-mechagon-junkyard">
                        <LeaderboardContainer key={"operation-mechagon-junkyard"} id="operation-mechagon-junkyard"/>
                    </Route>
                    <Route path="/leaderboard/operation-mechagon-workshop">
                        <LeaderboardContainer key={"operation-mechagon-workshop"} id="operation-mechagon-workshop"/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}