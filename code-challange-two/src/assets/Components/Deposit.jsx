import { useState, useEffect } from "react";

function Deposit() {
  const [goals, setGoals] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/goals").then(res => res.json()).then(setGoals);
  }, []);

  const handleDeposit = () => {
    const goal = goals.find(g => g.id === selectedId);
    if (!goal) return;

    const newAmount = goal.savedAmount + parseFloat(amount);
    fetch(`http://localhost:3000/goals/${selectedId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: newAmount })
    }).then(() => alert("Deposit successful"));
  };

  return (
    <div>
      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map(goal => <option key={goal.id} value={goal.id}>{goal.name}</option>)}
      </select>
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default Deposit;
