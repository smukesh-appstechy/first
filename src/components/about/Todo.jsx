import React, { useState } from "react";

const Todo = () => {
              let [todolist, settodolist] = useState([]);
            
              let saveToDoList = (event) => {
                event.preventDefault();
                let toname = event.target.toname.value;
                if (!todolist.includes(toname)) {
                  let finaltodo = [...todolist, toname];
                  settodolist(finaltodo);
                } else {
                  alert("This text added already");
                }
                event.target.reset();
              };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNmuber={index}
        todolist={todolist}
        settodolist={settodolist}
      
      />
    );
  });
       

  return (
    <>
      <div className="container m-auto py-10 text-center ">
        <form className="text-center" onSubmit={saveToDoList}>
          <input className="border mr-2 p-2" name="toname" type="text" />
          <button className="border bg-red-400 p-2">Save</button>
        </form>

        <div className="mt-4 text-center">
          <ul className="flex justify-center items-center flex-col">{list}</ul>
        </div>
      </div>
    </>
  );
};

export default Todo;

function ToDoListItems({ value, indexNmuber, todolist, settodolist}) {
  let [complete, setComplete] = useState(false);
  let deleteRow = () => {
    let finaldata = todolist.filter((v, i) => i != indexNmuber);
    settodolist(finaldata);
  };
   
    let donelist = () =>{
        setComplete(!complete);
    }

  return (
    <li onClick={donelist} className={(complete) ? "flex w-auto gap-2 items-cente line-through" : "flex w-auto gap-2 items-cente"}>
      {value}
      <span onClick={deleteRow} className="border rounded-md p-1 px-4">
        &times;
      </span>
    </li>
  );
}
