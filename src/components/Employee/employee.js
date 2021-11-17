import React, { Component } from 'react'
import './employee.css'
class Contact extends Component {
  render () {
    return (
      <div className='container'>
        <br />
        <br />
        <br />
        <br />
        <h1>Employee</h1>

        <br />
        <table class='table table-bordered table-hover'>
          <thead>
            <tr>
              <th scope='col'>Client Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone Number</th>
              <th scope='col'>Equipment</th>
              <th scope='col'>Message</th>
              <th scope='col'>Date</th>
              <th scope='col'>Its Solved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Contact
