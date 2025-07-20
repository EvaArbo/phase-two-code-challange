import { useState } from "react";

function AddGoal({ onAdd }) {
  const [goal, setGoal] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...goal, savedAmount: 0, createdAt: new Date().toISOString() })
    })
      .then(res => res.json())
      .then(onAdd);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Goal name" onChange={(e) => setGoal({ ...goal, name: e.target.value })} />
      <input type="number" placeholder="Target amount" onChange={(e) => setGoal({ ...goal, targetAmount: +e.target.value })} />
      <input placeholder="Category" onChange={(e) => setGoal({ ...goal, category: e.target.value })} />
      <input type="date" onChange={(e) => setGoal({ ...goal, deadline: e.target.value })} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoal;
