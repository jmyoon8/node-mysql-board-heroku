import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'




function Customer(props) {


    return (
       <TableRow>
           <TableCell>{props.number}</TableCell>
           <TableCell>{props.id}</TableCell>
           <TableCell><img src={props.img}/></TableCell>
           <TableCell>{props.gender}</TableCell>
           <TableCell>{props.name}</TableCell>
           <TableCell>{props.gender}</TableCell>
           <TableCell>{props.job}</TableCell>
       </TableRow>
    )
}

export default Customer