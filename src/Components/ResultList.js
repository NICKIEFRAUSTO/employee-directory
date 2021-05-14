import React from "react";

function ResultList(props) {
  let employees = props.results;
employees=employees.filter((employee)=>employee.name.first.toLowerCase().includes(props.search.toLowerCase())===true ||
employee.name.last.toLowerCase().includes(props.search.toLowerCase())===true);


  let rows=employees.map(employee=>(
    <tr key={employee.phone}>
      <td>{<img alt={employee.name.first} className="img-fluid" src={employee.picture.medium} />}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
    </tr>
  ))
  return (
    <div>
   

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {rows}
  </tbody>
</table> 
</div>
  );
}
export default ResultList;
