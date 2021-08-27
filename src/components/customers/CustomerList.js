import React, { useState, useEffect } from "react"

export const CustomerList = () => {


    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)

                })


        },
        []
    )

    return (
        <>
           

            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    })
            }
        </>
    )
}