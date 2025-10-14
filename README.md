# 💰 Expense Splitter

**Expense Splitter** is a web application built with **React + Vite + TypeScript** that helps users track shared expenses within groups.  
It allows users to create groups, add participants, record expenses, and automatically calculate each participant’s share.  
The app also supports **localStorage persistence**, ensuring your data stays available even after refreshing the page.


## 🌐 Live Demo

<p align="left">
  🔗 <a href="https://expense-splitter-blue.vercel.app/" target="_blank" rel="noopener noreferrer">View Live Demo</a>
</p>


## 🚀 Features

- 👥 Create and manage groups
- 🧾 Add, edit, and delete expenses
- 💵 View expense summaries per participant
- 💾 Data persistence with **localStorage**
- 🧩 Modular architecture using **TypeScript interfaces**
- ⚙️ **React Router DOM** for navigation
- 🧠 **React Helmet** for SEO optimization


## 🏗️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Routing:** React Router DOM
- **SEO:** React Helmet
- **State Management:** useState, useEffect
- **Storage:** LocalStorage API
- **Styling:** CSS / Bootstrap / TailwindCSS (if applicable)


## 📂 Project Structure

```
src/
│
├── components/   # Reusable UI components
├── pages/        # Route-based pages
├── models/       # TypeScript interfaces & types
├── services/     # Business logic & data persistence (CRUD + localStorage)
├── data/         # Default seed data
├── routes/       # App routing setup
├── App.tsx       # Root component
├── main.tsx      # Entry point
└── index.css     # Global styles
```


## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/expense-splitter.git
   cd expense-splitter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

## 🧠 How It Works

1. Create a new group and add participants.
2. Record expenses for each participant.
3. The app automatically calculates totals and balances.
4. All data is stored in **localStorage**, so it persists across sessions.


## 🧩 Example Use Case 

1. Create a group called **"Weekend Trip"**.
2. Add participants -- e.g., _Alice, Bob, and Carol_
3. Log expenses such as _hotel, food, fuel_
4. Instantly view how much each person owes or should be reimbursed


## 🌐 Future Improvements

- 🪙 Add currency selection
- ☁️ Sync with backend or cloud storage
- 📊 Add summary charts or reports


## 🧰 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

