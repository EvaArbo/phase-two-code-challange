import React from "react";

function Dashboard({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce(
    (sum, goal) => sum + Number(goal.savedAmount || 0),
    0
  );
  const completed = goals.filter(
    (g) => Number(g.savedAmount) >= Number(g.targetAmount)
  ).length;

  return (
    <div className="dashboard card">
      <h2>📊 Overview</h2>
      <p><strong>Total Goals:</strong> {totalGoals}</p>
      <p><strong>Total Saved:</strong> ${totalSaved}</p>
      <p><strong>Goals Completed:</strong> {completed}</p>
    </div>
  );
}

export default Dashboard;
