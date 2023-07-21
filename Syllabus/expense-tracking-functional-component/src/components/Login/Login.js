import './Login.css';
import {useState} from 'react';
import {email,password} from '../../helpers/validation';
import {registerValidationError} from '../../helpers/constant';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import login from '../../service/index';
import axios from 'axios';

const Login=()=>{

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const[getLoginForm,setLoginForm]=useState({
       email:'',
       password:''
     });

     const[getLoginFormValidation,setLoginFormValidation]=useState({
       email:false,
       password:false,
       sessionDetail:false
     });

     const[getLoginGlobalCheck,setLoginGlobalCheck]=useState(false);

     useEffect(()=>{
      console.log("state change");
     },[getLoginFormValidation,getLoginForm])

    //  useEffect(()=>{
    //   console.log("validation change");
    //  },[getLoginFormValidation])

     const onChangeOfState=()=>{
       alert("onChangeofState");
     }

     const onChangeEventHandler=(event)=>{
         setLoginForm({
           ...getLoginForm,
           [event.target.name]:event.target.value
         })
     }

     const onSubmitEventHandler=(event)=>{
            event.preventDefault();
            setLoginGlobalCheck(true);
            setLoginFormValidation({
              sessionDetail:false,
              email:email(getLoginForm.email)?false:true,
              password:password(getLoginForm.password)?false:true
            });
            if(getLoginForm.email && getLoginForm.password){
              let email = sessionStorage.getItem('email');
              let password = sessionStorage.getItem('password');
              if(email!=getLoginForm.email || password!=getLoginForm.password){
                setLoginFormValidation({
                  ...getLoginFormValidation,
                  sessionDetail:true
                })
              }
              else{
                sessionStorage.setItem("login",true);
                axios.post("url",{}).then((response)=>{
                  axios.defaults.headers.common['token'] = response.data;
                })
             
                login.loadSuccess(dispatch,{flag:true,...getLoginForm})
                navigate('/dashboard');
              }
            }
     }

   return (<div>
                 <div className="container">
            <div className="row">
                <div className="col-3">
 
                </div>
                <div className="col-6">
                {getLoginGlobalCheck && getLoginFormValidation.sessionDetail &&   <div className="alert alert-danger" role="alert">
  {registerValidationError.sessionDetails}
</div>}     
                 <form onSubmit={onSubmitEventHandler}>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" onChange={onChangeEventHandler} className="form-control"  name="email"  placeholder="Enter email"/>
                     {getLoginGlobalCheck && getLoginFormValidation.email &&   <div className="alert alert-danger" role="alert">
  {registerValidationError.email}
</div>}                          
                      </div>
                     <div className="form-group">
                       <label>Password</label>
                       <input type="password" onChange={onChangeEventHandler} className="form-control" name="password" placeholder="Password"/>
                       {getLoginGlobalCheck && getLoginFormValidation.password &&   <div className="alert alert-danger" role="alert">
  {registerValidationError.password}
</div>}  
                     </div>
                     <button type="submit" className="btn btn-success">Submit</button>
                   </form>
             </div>
             <div className="col-3">
                    
             </div>
            </div>
        </div>
   </div>)

}
export default Login;
