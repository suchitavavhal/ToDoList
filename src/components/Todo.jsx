import { useState } from "react";
import "./Todo.css";
import { IoAdd } from "react-icons/io5";
import { MdDelete, MdOutlineAutoDelete } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  const [error, setError]= useState('');

  const validateInput=(input)=>{
    
    if(!input.trim()){
      setError('Item Name is required');
    }
    else if (input.length < 4) {
      setError('Item Name must be at least 4 characters long');
    }
    else{
      setError('');
      dispatch(addTodo(inputData), setInputData(""));
    }


  }

  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-5 ">
        <div className="mt-5 text-info">
          <h1>Add You List Here</h1>
        </div>

        <div className="mt-5 d-flex">
          {/* <Form.Control  type="text" placeholder=" text" className="mb-5" style={{ width: '25%' }}/> <button><IoAdd/></button>  */}
          <input
            type="text"
            className="rounded-3 w-100"
            id=""
            // placeholder=" Add Items..."
            value={inputData} 
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            className="ms-1 rounded-3"
        
            onClick={() => validateInput(inputData)}
          >
            <IoAdd />
          </button>
         
        </div>
        <div className="mt-4">{error}</div>
        <div className="mt-5">
          {list.map((element) => {
            return (
              <div
                className="mt-2 border border-dark  rounded-3 fs-6 d-flex justify-content-between"
                key={element.id}
              >
                <div className="me-2">{element.data}</div>
                <button
                  className="ms-1 rounded-3 "
                  title="Delete Item"
                  onClick={() => dispatch(deleteTodo(element.id))}
                >
                  <MdDelete />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <button
            className="ms-1 rounded-3 bg-warning bg-gradient text-white "
            title="Remove All"
            onClick={() => dispatch(removeTodo())}
          >
           <span className="me-2">Remove All</span> <MdOutlineAutoDelete /> 
          </button>
        </div>
      </div>
    </>
  );
};
export default Todo;
