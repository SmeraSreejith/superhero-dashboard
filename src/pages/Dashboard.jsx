import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function Dashboard() {

  
  return (
    <>
    <h3 className='text-center mt-5 mb-5 home'>Superhero Dashboard</h3>
    <div>
      <Header/>
    </div>
  
    <div className="row mt-5 d-flex align-items-center">
          <div className="col-md-2"></div>
          <div className="col-md-4 d-flex">
            <input type="text" placeholder='Grievance' className='form-control bg-light'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginTop: '12px', marginLeft: '-30px' }} flip='horizontal' className='text-secondary' />
          </div>
          <div className="col-md-4 mt-5 p-5">
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Grievance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
    </>
  )
}

export default Dashboard