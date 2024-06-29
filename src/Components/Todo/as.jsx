import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([{
        task: "",
        priority: "",
        assignTo: "",
        checkList: [{
            isChecked: false,
            value: ""
        }],
        dueDate: "",
        currentStatus: 'Todo',
    }]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newTodos = [...todos];
        newTodos[index][name] = value;
        setTodos(newTodos);
    };

    const handleCheckListChange = (todoIndex, checkIndex, event) => {
        const { name, value, checked, type } = event.target;
        const newTodos = [...todos];
        newTodos[todoIndex].checkList[checkIndex][name] = type === "checkbox" ? checked : value;
        setTodos(newTodos);
    };

    return (
        <div className="App">
            {todos.map((todo, index) => (
                <div key={index} className="todo">
                    <input
                        type="text"
                        name="task"
                        value={todo.task}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Task"
                    />
                    <input
                        type="text"
                        name="priority"
                        value={todo.priority}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Priority"
                    />
                    <input
                        type="text"
                        name="assignTo"
                        value={todo.assignTo}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Assign To"
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={todo.dueDate}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <div>
                        {todo.checkList.map((check, checkIndex) => (
                            <div key={checkIndex} className="checkList">
                                <input
                                    type="checkbox"
                                    name="isChecked"
                                    checked={check.isChecked}
                                    onChange={(event) => handleCheckListChange(index, checkIndex, event)}
                                />
                                <input
                                    type="text"
                                    name="value"
                                    value={check.value}
                                    onChange={(event) => handleCheckListChange(index, checkIndex, event)}
                                    placeholder="Checklist Item"
                                />
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        name="currentStatus"
                        value={todo.currentStatus}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Current Status"
                    />
                </div>
            ))}
        </div>
    );
}

export default App;
