import React from 'react'

const ListEmployeeComponents = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Jiya",
            "lastName": "Patel",
            "email": "jiya.patel@example.com"
        },
        {
            "id": 2,
            "firstName": "Arjun",
            "lastName": "Mehta",
            "email": "arjun.mehta@example.com"
        },
        {
            "id": 3,
            "firstName": "Sneha",
            "lastName": "Sharma",
            "email": "sneha.sharma@example.com"
        },
        {
            "id": 4,
            "firstName": "Rahul",
            "lastName": "Verma",
            "email": "rahul.verma@example.com"
        }
    ]

  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents