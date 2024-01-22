import React, { useState } from "react";

const inputStyle = {
    padding: 10,
    margin: 10,
};

const buttonStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={inputStyle}
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                style={inputStyle}
                placeholder="Description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button
                style={buttonStyle}
                onClick={() => {
                    fetch("http://localhost:3123/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "content-type": "application/json",
                        },
                    })
                        .then(async function (res) {
                            const json = await res.json();
                            alert("Todo added");
                            // You may want to reset the form or update the UI state here
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                            alert("Failed to add todo");
                        });
                }}
            >
                Add Todo
            </button>
        </div>
    );
}
