# 💰 Expense Splitter

An intuitive web application built with **React + Vite + TypeScript** that helps users easily split expenses among group members.  
The app allows users to create groups, add participants, log shared expenses, and view how much each member owes or is owed — all with a clean, responsive interface.

---

## 🚀 Features

- 👥 Create and manage groups  
- 🧾 Add, edit, and delete expenses per group  
- 💸 Automatically calculate how much each participant owes  
- 💾 Data persistence using **localStorage**  
- 🧭 Smooth client-side navigation with **React Router DOM**  
- 🌐 SEO optimization with **React Helmet**  
- ⚡️ Fast and lightweight build powered by **Vite**

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Routing | [React Router DOM](https://reactrouter.com/) |
| SEO | [React Helmet](https://www.npmjs.com/package/react-helmet) |
| State & Data | React Hooks + Local Storage |
| Styling | CSS / TailwindCSS *(if used)* |
| Build Tool | Vite |

---

## 📂 Folder Structure

src/
│
├── components/ # Reusable UI components
├── pages/ # Route-based pages
├── models/ # TypeScript interfaces & types
├── services/ # Business logic & data persistence (CRUD + localStorage)
├── data/ # Default seed data
├── routes/ # App routing setup
├── App.tsx # Root component
├── main.tsx # Entry point
└── index.css # Global styles

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/expense-splitter.git
cd expense-splitter

### 2. Install dependencies
npm install

### 3. Start the development server
npm run dev

### 4. Open in your browser
Visit: http://localhost:5173


🧮 Example Use Case

Create a group called “Weekend Trip”

Add participants — e.g., Alice, Bob, and Carol

Log expenses such as hotel, food, fuel

Instantly view how much each person owes or should be reimbursed.


🧠 Code Highlights

Clean and modular TypeScript structure

CRUD operations for groups and expenses

Auto-save and restore state from localStorage

SEO-friendly meta tags managed with React Helmet


📈 Future Improvements

🪙 Add currency selection

☁️ Sync with backend or cloud storage

📊 Add summary charts or reports

📱 Improve mobile UI with animations



