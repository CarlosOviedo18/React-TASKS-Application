

function TaskList({tasks}) {


    if(tasks.length === 0){
        return <h1>There not tasks yet</h1>
    }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
