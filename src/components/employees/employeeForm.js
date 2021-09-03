import { useState } from "react"
import { useHistory } from "react-router-dom"



export const EmployeeForm = () => {
    
    const [employee, update] = useState({
        name: "",
        specialty: ""
    });
    const history = useHistory()

    const saveHire = (event) => {
        event.preventDefault()
        const newHire = {
            name: employee.name,
            specialty: employee.specialty

        }

        const fetchOption = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHire)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })

    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Technical Specialty"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.specialty = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveHire} >
                Hire Employee
            </button>
        </form>
    )
}