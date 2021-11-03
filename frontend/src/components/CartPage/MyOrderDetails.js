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

function createData(orders, status, date, total, view) {
  return { orders, status, date, total, view }
}

const rows = [
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
  createData('1234', 'pending', '15 Jan', 2.0, 'Click'),
]

export default function MyOrderDetails() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Orders</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Date Purchased</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orders}>
              <TableCell component="th" scope="row">
                {row.orders}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.view}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
