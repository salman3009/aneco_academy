import './Table.css';
import {useEffect,useState} from 'react';
import Modal from '../../UI/Modal/Modal';
import axios from 'axios';
import getResponse from '../../../mockResponse/getExpense.json';
import Filter from '../Filter/Filter';
const Table=()=>{

    const[getList,setList]=useState([]);
    const[getModal,setModal]=useState(false);
    const[getModalIndex,setModalIndex]=useState(-1);
    const[getModalObject,setModalObject]=useState({});
    const[getId,setId]=useState(-1);

    useEffect(()=>{
        console.log(getResponse);
        getExpenseTracker();
    },[])

    const getExpenseTracker=()=>{
        axios.get('http://localhost:3000/expense').then(
            (response)=>{
                 console.log(response.data);
               setList(response.data);
              //setList(getResponse);
            }
        ).catch((error)=>{
                console.log("error",error); 
        })
    }

    const onDeleteHandler=(index,id)=>{
        axios.delete('http://localhost:3000/expense/'+id).then(()=>{
            getExpenseTracker();
        }).catch(()=>{

        })
       
    }

    const onEditHandler=(index,id)=>{
        setModal(true);
        let obj = getList[index];
        setModalObject({...obj});
        setModalIndex(index);
        setId(id);
    }

    const onCloseModal=(props)=>{
        axios.patch('http://localhost:3000/expense/'+getId,props).then(()=>{
            setModal(false);
            getExpenseTracker();
        }).catch((error)=>{
          console.log(error);
        })
      
    }

    const onSearchHandler=(input)=>{
     let list = getList.filter((obj)=>{
          return obj.expenseName === input;
     });
     setList([...list]);
    }


   return (<div>
           <Filter onClear={getExpenseTracker} onSearch={onSearchHandler}/>
         <div className="container">
            <div className="row">
                <div className="col-12">
                    {getModal && <Modal modalList={getModalObject} onClose={onCloseModal}/>}
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Expense Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           getList.map((obj,index)=>{
                               return (
                                 
<tr key={index}>
                            <td>{obj.expenseName}</td>
                            <td>{obj.amount}</td>
                            <td>{obj.date}</td>
                            <td><i  data-toggle="modal" onClick={()=>{onEditHandler(index,obj.id)}} data-target="#exampleModal" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i onClick={()=>{onDeleteHandler(index,obj.id)}} className="fa fa-trash" aria-hidden="true"></i></td>
                        </tr>
                                  

                       
                               )

                           }) 
                        }
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
   </div>)

}
export default Table;
