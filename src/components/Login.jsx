import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { loginApi} from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()
    const handleLogin = async()=>{
        
        const{email,password} = userDetails

        if(!email || !password){
            toast.info('Please fill the form completely')
        }
        else{
         const result =   await loginApi({email,password})
         console.log(result);

         if(result.status==200){
            toast.success('Login successfull')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token",result.data.token)
            setUserDetails({
                email:"",
                password:""
            })
            
            setTimeout(()=>{
                navigate('/grievance') 
            },2000)
         }
         else{
            toast.error(result.status.data)
         }
        }
     }
  return (
    <>

<div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
                <div className="container">
                    <div className='bg-secondary p-3 mt-2 rounded'>
                        <Row>
                            <Col md={12}>
                                <form className='mt-4'>
                                    <div className="mb-3">
                                        <input type="text" placeholder='Email' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder='Password' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                       
                                            <div>
                                                <button type='button' className='btn btn-danger w-100 mb-3' onClick={handleLogin}>Login</button>
                                               
                                            </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>

                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={2000} />
            </div>

    </>
  )
}

export default Login