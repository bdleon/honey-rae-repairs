import React, { useState, useEffect } from "react"

export const EmployeesList = () => {


    const [employees, setEmployee] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployee(employeeArray)

                })


        },
        []
    )

    return (
        <>
           

            {
                employees.map(
                    (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                    })
            }
        </>
    )
}
