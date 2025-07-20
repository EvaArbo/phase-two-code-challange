import React, { useEffect, useState } from "react";
import AddGoal from "./Components/AddGoal.jsx";
import Deposit from "./Components/Deposit.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import GoalList from "./Components/GoalList.jsx";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  const addGoal = (goal) => {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...goal, savedAmount: 0 }),
    })
      .then((res) => res.json())
      .then((newGoal) => setGoals((prev) => [...prev, newGoal]));
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    }).then(() => setGoals((prev) => prev.filter((g) => g.id !== id)));
  };

  const updateGoal = (updatedGoal) => {
    fetch(`http://localhost:3000/goals/${updatedGoal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) =>
        setGoals((prev) =>
          prev.map((goal) => (goal.id === data.id ? data : goal))
        )
      );
  };

  const makeDeposit = (id, amount) => {
    const goal = goals.find((g) => g.id === parseInt(id));
    const newAmount = goal.savedAmount + parseInt(amount);
    updateGoal({ ...goal, savedAmount: newAmount });
  };

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <AddGoal onAdd={addGoal} />
      <Deposit goals={goals} onDeposit={makeDeposit} />
      <Dashboard goals={goals} />
      <GoalList goals={goals} onDelete={deleteGoal} onUpdate={updateGoal} />
    </div>
  );
}

export default App;
