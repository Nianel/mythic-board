import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import LeaderboardButton from "./LeaderboardButton"
import ButtonBases from "./test"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

export default function FirstPageButton() {
    const classes = useStyles()

    return (
        <Router>
            <div className={classes.root}>
                    <Link to="/">
                        <IconButton aria-label="home" disabled color="primary">
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Link to="/leaderboard">
                        <Button variant="outlined" color="primary">
                            Mythic Dungeon Leaderboard
                        </Button>
                    </Link>
                    <Link to="/statistics">
                        <Button variant="outlined" color="primary">
                            Mythic Dungeon Statistics
                        </Button>
                    </Link>
                <Link to="/routes">
                    <Button variant="outlined" color="primary">
                        Mythic Dungeon Routes
                    </Button>
                </Link>
                <Link to="/weakauras">
                    <Button variant="outlined" color="primary">
                        Mythic Dungeon WeakAuras
                    </Button>
                </Link>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/leaderboard">
                        <LeaderboardButton/>
                    </Route>
                    <Route path="/statistics">
                        <ButtonBases />
                    </Route>
                    <Route path="/routes">
                        <Users />
                    </Route>
                    <Route path="/weakauras">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>
}


function Users() {
    return <h2>Users</h2>
}