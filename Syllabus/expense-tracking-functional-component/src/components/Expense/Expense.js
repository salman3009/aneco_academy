import './Expense.css';
import {useState} from 'react';
import {alphanumeric} from '../../helpers/validation';
import {expenseValidationError} from '../../helpers/constant';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const Expense=()=>{

  const navigate = useNavigate();
    
  const[getExpenseForm,setExpenseForm]=useState({
      expenseName:'',
      amount:'',
      paidBy:'cash',
      date:''
     });

     const[getExpenseFormValidation,setExpenseFormValidation]=useState({
      expenseName:false,
       amount:false,
       paidBy:false,
       date:false
     });

     const[getExpenseGlobalCheck,setExpenseGlobalCheck]=useState(false);

     useEffect(()=>{
       if(getExpenseForm.expenseName && getExpenseForm.amount && getExpenseForm.date && !getExpenseFormValidation.amount && !getExpenseFormValidation.paidBy && !getExpenseFormValidation.expenseName && !getExpenseFormValidation.date){
          axios.post("http://localhost:3000/expense",getExpenseForm).then(
            ()=>{
              navigate('/dashboard');       
            }
          ).catch(()=>{
            navigate('/'); 
          })   
       }
     },[getExpenseGlobalCheck]);

     const onChangeEventHandler=(event)=>{
      setExpenseForm({
        ...getExpenseForm,
        [event.target.name]:event.target.value
      })
  }

  const onSubmitEventHandler=(event)=>{
    event.preventDefault();
    setExpenseGlobalCheck(true);
    setExpenseFormValidation({
      expenseName:alphanumeric(getExpenseForm.expenseName)?false:true,
      amount:(getExpenseForm.amount && getExpenseForm.amount.length>0)?false:true,
      paidBy:(getExpenseForm.paidBy && getExpenseForm.paidBy.length>0)?false:true,
      date:(getExpenseForm.date && getExpenseForm.date.length>0)?false:true,
    });
 
    }


   return (<div>
           <div className="container">
            <div className="row">
                <div className="col-6">
                 <form  onSubmit={onSubmitEventHandler}>
                     <div className="form-group">
                       <label>Expense Name</label>
                       <input type="text" onChange={onChangeEventHandler} className="form-control"  name="expenseName"  placeholder="Enter expenseName"/>
                       {getExpenseGlobalCheck && getExpenseFormValidation.expenseName &&   (<div className="alert alert-danger" role="alert">
  {expenseValidationError.expenseName}
                     </div>)}
                     </div>
                     <div className="form-group">
                        <label>Amount</label>
                        <input type="number" onChange={onChangeEventHandler}  className="form-control"  name="amount"  placeholder="Enter amount"/>
                        {getExpenseGlobalCheck && getExpenseFormValidation.expenseName &&   (<div className="alert alert-danger" role="alert">
  {expenseValidationError.amount}
                     </div>)}
                      </div>
                      <div className="form-group">
                        <label>Paid By</label>
                        <select onChange={onChangeEventHandler} className="form-control" name="paidBy" id="exampleFormControlSelect1">
                          <option value="cash">Cash</option>
                          <option value="card">Card</option>
                          <option value="upi">UPI</option>
                        </select>
                        {getExpenseGlobalCheck && getExpenseFormValidation.expenseName &&   (<div className="alert alert-danger" role="alert">
  {expenseValidationError.paidBy}
                     </div>)}
                      </div>
                     <div className="form-group">
                       <label>Expense Date</label>
                       <input type="date" onChange={onChangeEventHandler} className="form-control" name="date" placeholder="date" required/>
                       {getExpenseGlobalCheck && getExpenseFormValidation.expenseName &&   (<div className="alert alert-danger" role="alert">
  {expenseValidationError.date}
                     </div>)}
                     </div>
                     <button type="submit" className="btn btn-success">Add</button>
                   </form>
             </div>
             <div className="col-3">
                    
             </div>
            </div>
        </div>
   </div>)

}
export default Expense;
