import React from "react";
import Dashboard from "./components/Dashboard";
import AddGoal from "./components/AddGoal";
import Deposit from "./components/Deposit";
import GoalList from "./components/GoalList";

function App() {
  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <AddGoal onAdd={(newGoal) => console.log("Goal added:", newGoal)} />
      <Deposit />
      <Dashboard />
      <GoalList />
    </div>
  );
}

export default App;
