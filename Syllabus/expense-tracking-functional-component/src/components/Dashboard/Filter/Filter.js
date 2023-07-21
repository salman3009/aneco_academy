import './Filter.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
const Filter=(props)=>{

  const [getSearch,setSearch]=useState("");

  const onFilterSearch=(event)=>{
       event.preventDefault();
       props.onSearch(getSearch);
  }
  const onClearHandler=(event)=>{
          event.preventDefault();
          setSearch('');
          props.onClear();
  }
   return (<div>
         <div className="container">
            <div className="row">
                <div className="col-6">
                 <form>
                     <div className="form-group">
                       <label>Expense Name</label>
                       <input type="text" value={getSearch} onChange={(event)=>{setSearch(event.target.value)}} className="form-control"  name="expenseName"  placeholder="Enter expenseName"/>
                     </div>
                     <button type="submit" onClick={onFilterSearch} className="btn btn-success">search</button>
                     <button type="submit" onClick={onClearHandler} className="btn btn-success">clear</button>
                   </form>
             </div>
             <div className="col-2">
                    
             </div>
             <div className="col-1">
             <button type="submit" className="btn btn-success"><Link to="/expense">Add Expense</Link></button>
             </div>
            </div>

            
        </div>
   </div>)

}
export default Filter;
