import { useState } from "react"

function TaskAdd({onAddTask}) {

  const [text, setText] = useState('');

  const handleAddTask = (e) => {
    if (e.key === 'Enter') {
      setText('');
      onAddTask(text)
    }
  }

  return (
    <>
      <input type="text" value={text} placeholder="Ajouter une tâche" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => handleAddTask(e)}/>
    </>
  )
}

export default TaskAdd
