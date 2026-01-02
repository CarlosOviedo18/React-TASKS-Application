import {useState} from "react";

function TaskForm() {


const [title, setTitle] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="write your task" type="text" 
            onChange={(e) => setTitle(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
