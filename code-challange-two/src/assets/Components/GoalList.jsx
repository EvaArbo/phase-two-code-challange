import { useEffect, useState } from "react";

function GoalList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  return (
    <div>
      <h1>All Goals</h1>
      {goals.map(goal => (
        <div key={goal.id}>
          <h2>{goal.name}</h2>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
