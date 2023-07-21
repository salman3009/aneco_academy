import './Register.css';
import {alphanumeric,password,email} from '../../helpers/validation.js';
import {registerValidationError} from '../../helpers/constant.js';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Register=()=>{

  const [getForm,setForm]=useState({
    fullName:'',
    lastName:'',
    email:'',
    password:''
  });

  const navigate = useNavigate();

   const [getFormValidation,setFormValidation]=useState({
    fullName:false,
    lastName:false,
    email:false,
    password:false
  });

  const [getGlobalFormCheck,setGlobalFormCheck]=useState(false);

  const onChangeHandler=(event)=>{
     setForm({
       ...getForm,
       [event.target.name]:event.target.value
     })
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    setGlobalFormCheck(true);
    setFormValidation({
      fullName:alphanumeric(getForm.fullName)?false:true,
      lastName:alphanumeric(getForm.lastName)?false:true,
      email:email(getForm.email)?false:true,
      password:password(getForm.password)?false:true
    });
    if(alphanumeric(getForm.fullName) && alphanumeric(getForm.lastName) && email(getForm.email) && password(getForm.password)){
       sessionStorage.setItem("email",getForm.email);
       sessionStorage.setItem("password",getForm.password);
       navigate('login');
    }
 
  }


   return (<div>
        <div className="container">
            <div className="row">
                <div className="col-3">
 
                </div>
                <div className="col-6">
                 <form onSubmit={onSubmitHandler}>
                     <div className="form-group">
                       {/* <label>Full Name {getForm.fullName}</label> */}
                        <label>Full Name</label>
                       <input type="text" onChange={onChangeHandler} className="form-control"  name="fullName"  placeholder="Enter fullName"/>
                      {getGlobalFormCheck && getFormValidation.fullName && <div className="alert alert-danger" role="alert">
  {registerValidationError.fullName}
</div>} 
                     </div>
                     <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" onChange={onChangeHandler} className="form-control"  name="lastName"  placeholder="Enter lastName"/>
             {getGlobalFormCheck && getFormValidation.lastName && <div className="alert alert-danger" role="alert">
  {registerValidationError.lastName}
</div> }                               
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" onChange={onChangeHandler} className="form-control"  name="email"  placeholder="Enter email"/>
                 {getGlobalFormCheck && getFormValidation.email &&   <div className="alert alert-danger" role="alert">
  {registerValidationError.email}
</div>}                          
                      </div>
                     <div className="form-group">
                       <label htmlFor="exampleInputPassword1">Password</label>
                       <input type="password" onChange={onChangeHandler} className="form-control" name="password" placeholder="Password"/>
                   {getGlobalFormCheck && getFormValidation.password && <div className="alert alert-danger" role="alert">
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
export default Register;
