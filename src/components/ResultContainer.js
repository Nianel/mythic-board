import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function ResultContainer(props) {
    const {rows} = props
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell align="right">Level</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Team</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">{row.keystone_level}</TableCell>
                            <TableCell align="right">{row.duration}</TableCell>
                            {/*<TableCell align="right">{row.members}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
