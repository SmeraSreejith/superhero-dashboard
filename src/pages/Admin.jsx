import React from 'react'
import Login from '../components/Login'

function Admin() {
  return (
    <>
    <h3 className='text-center mt-5 mb-5 home'>Superhero Login</h3>
    <div>
     <h1 className='text-white'><hr /></h1>
    </div>
   <div className='row'>
    <div className="col-md-1"></div>
      <div className="col-md-5 mt-4">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/01/19/ed/0119edabaec157987b2bb654fa5f3f87.gif" alt="no image" width={'70%'} height={'100%'}/>
      </div>
      <div className="col-md-5">
      <Login/>
      </div>
      <div className="col-md-1"></div>
   </div>
    </>
  )
}

export default Admin