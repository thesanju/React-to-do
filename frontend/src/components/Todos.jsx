import React from 'react';

const todoStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
};

export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div key={todo._id} style={todoStyle}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button
                            onClick={() => {
                                fetch("http://localhost:3123/completed", {
                                    method: "PUT",
                                    body: JSON.stringify({
                                        id: todo._id,
                                    }),
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                })
                                .then(async function (response) {
                                    if (response.ok) {
                                        alert("Todo marked as completed");
                                        // You may want to update your UI state or trigger a re-fetch of the todos here
                                    } else {
                                        alert("Failed to mark todo as completed");
                                    }
                                })
                                .catch((error) => {
                                    console.error("Error:", error);
                                });
                            }}
                        >
                            {todo.completed ? "Completed" : "Mark as Complete"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
