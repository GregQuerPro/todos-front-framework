function TaskListValidated({taskListValidated,onRestoreTask}) {

    return (
        <>
            <ul>
                {taskListValidated.map((taskValidated, index) => (
                    <li key={index}>
                        <div className="task-card">
                            <h3>{taskValidated}</h3>
                            <div>
                                <button onClick={() => onRestoreTask(taskValidated, index)}>Restaurer</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TaskListValidated

