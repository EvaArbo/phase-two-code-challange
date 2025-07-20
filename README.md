# 💰 Smart Goal Planner

A responsive and interactive financial planning application built with **React** and **json-server**. The Smart Goal Planner allows users to set, manage, and track progress toward their savings goals in a clean and user-friendly dashboard.


## 🚀 Features

### ✅ Full CRUD for Financial Goals
- **Create** savings goals with category, target amount, and deadline
- **Read** and view all existing goals in a beautiful card layout
- **Update** goals in-place (edit name, target, category, deadline)
- **Delete** unwanted goals with a single click

### 💸 Deposit Functionality
- Make deposits towards individual savings goals
- Dynamically updates saved amount and calculates remaining balance

### 📊 Progress Tracking
- Real-time goal progress with visual progress bars
- Warnings when a deadline is close
- Overdue status for goals past the deadline and not yet reached

### 📈 Dashboard Overview
- Total goals
- Total saved across all goals
- Number of goals completed


## 🧠 Tech Stack

| Technology   | Purpose                          |
|--------------|----------------------------------|
| React        | UI Framework                     |
| Vite         | Lightning-fast build tool        |
| json-server  | Mock backend API (localhost:3000)|
| CSS          | Styling and visual components    |


## 📂 Project Structure

Smart-Goal-Planner/
├── public/
├── src/
│ ├── Components/
│ │ ├── AddGoal.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Deposit.jsx
│ │ ├── GoalList.jsx
│ ├── App.jsx
│ ├── App.css
├── db.json # mock data for json-server
├── package.json



## 🛠 Setup Instructions

### 1. Clone the repository

git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
2. Install dependencies

npm install
3. Start json-server

npx json-server --watch db.json --port 3000
4. Start the React app
In a separate terminal:


npm run dev
Now visit: http://localhost:5173

🎯 Future Improvements
Add user authentication

Enable goal prioritization or sorting

Introduce visual analytics (charts/graphs)

Add monthly auto-deposit reminders or notifications

🤝 Contributing
If you'd like to contribute:

Fork the repo

Create a new branch

Commit your changes

Open a pull request

📄 License
This project is licensed under the MIT License.

📬 Contact
Built with ❤️ by Evaline
