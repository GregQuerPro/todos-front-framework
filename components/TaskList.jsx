function TaskList({taskList, onDeleteTask, onValidateTask}) {
    
    return (
        <>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>
                        <div className="task-card">
                            <h3>{task}</h3>
                            <div>
                                <button onClick={() => onDeleteTask(index)}>Supprimer</button>
                                <button onClick={() => onValidateTask(index)}>Valider</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList;