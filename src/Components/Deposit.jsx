import React, { useState } from "react";

function Deposit({ goals, onDeposit }) {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedGoal || !amount) {
      alert("Please select a goal and enter an amount.");
      return;
    }

    onDeposit(selectedGoal, parseInt(amount));
    setAmount("");
    setSelectedGoal("");
  };

  return (
    <div className="card">
      <h2>Make a Deposit</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
        >
          <option value="">Select Goal</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;
