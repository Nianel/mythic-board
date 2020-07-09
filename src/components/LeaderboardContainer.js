import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {getTime} from "../utils/Utils"
import {useApiRequest} from "../hooks/api-request"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function LeaderboardContainer(props) {
    const {id} = props
    const [results, search] = useApiRequest()
    const classes = useStyles()

    useEffect(()=>{
        search(id)
    }, [id])

    console.log(results)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell align="right">Level</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="center">Members</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results && Array.isArray(results.leading_groups) && results.leading_groups.map((result, index) => (
                        <TableRow key={result.id}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">{result.keystone_level}</TableCell>
                            <TableCell align="right">{getTime(result.duration)}</TableCell>
                            <TableCell align="center">{result.members.map((member) => member.profile.name).join(" - ")}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
