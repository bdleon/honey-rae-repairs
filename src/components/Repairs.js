import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const Repairs = () => {
    return (
        <>
            <h1>Honey Rae's Shop</h1>

            <h2>Customer List</h2>
            <CustomerList />

            <h2>Employees List</h2>
            <EmployeeList />

            <h2>Ticket List</h2>
            <TicketList />

           
        </>
    )
}
