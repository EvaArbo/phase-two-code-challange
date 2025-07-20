import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Dashboard() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals").then(res => res.json()).then(setGoals);
  }, []);

  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const goalsCompleted = goals.filter(g => g.savedAmount >= g.targetAmount);
  const today = dayjs();

  return (
    <div>
      <h1>Overview</h1>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {goalsCompleted.length}</p>
      {goals.map(goal => {
        const deadline = dayjs(goal.deadline);
        const daysLeft = deadline.diff(today, 'day');
        const isOverdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
        const isWarning = daysLeft < 30 && goal.savedAmount < goal.targetAmount;
        return (
          <div key={goal.id}>
            <h3>{goal.name}</h3>
            <p>{daysLeft} days left</p>
            {isOverdue && <p style={{ color: "red" }}>Overdue</p>}
            {isWarning && !isOverdue && <p style={{ color: "orange" }}>Deadline soon</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
