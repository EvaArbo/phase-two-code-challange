import React, { useState } from "react";

function GoalList({ goals, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (goal) => {
    setEditingId(goal.id);
    setFormData({ ...goal });
  };

  const handleSave = () => {
    onUpdate(formData);
    setEditingId(null);
  };

  const daysLeft = (deadline) => {
    const now = new Date();
    const due = new Date(deadline);
    const diff = (due - now) / (1000 * 3600 * 24);
    return Math.ceil(diff);
  };

  return (
    <div>
      <h2>All Goals</h2>
      {goals.map((goal) => {
        const isEditing = editingId === goal.id;
        const progress = (goal.savedAmount / goal.targetAmount) * 100;
        const daysRemaining = daysLeft(goal.deadline);
        const isOverdue = daysRemaining < 0 && goal.savedAmount < goal.targetAmount;
        const isWarning = daysRemaining <= 30 && daysRemaining >= 0 && goal.savedAmount < goal.targetAmount;

        return (
          <div key={goal.id} className="goal-card">
            {isEditing ? (
              <>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="number"
                  value={formData.targetAmount}
                  onChange={(e) => setFormData({ ...formData, targetAmount: parseFloat(e.target.value) })}
                />
                <input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h3>{goal.name}</h3>
                <p>Category: {goal.category}</p>
                <p>Target: ${goal.targetAmount}</p>
                <p>Saved: ${goal.savedAmount}</p>
                <p>Remaining: ${goal.targetAmount - goal.savedAmount}</p>
                <p>
                  Deadline: {goal.deadline} -{" "}
                  {isOverdue ? (
                    <span className="overdue">Overdue</span>
                  ) : isWarning ? (
                    <span className="warning">{daysRemaining} days left</span>
                  ) : (
                    `${daysRemaining} days left`
                  )}
                </p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
                <button onClick={() => handleEdit(goal)}>Edit</button>
                <button onClick={() => onDelete(goal.id)}>Delete</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GoalList;
