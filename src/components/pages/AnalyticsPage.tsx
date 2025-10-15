import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { Group } from "../../models/GroupModels";
import { getGroups } from "../../services/GroupService";

import SEO from "../SEO";

const COLORS = ["#2563EB", "#22C55E", "#F59E0B", "#EF4444", "#8B5CF6"];

const AnalyticsPage = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [numberOfExpenses, setNumberOfExpenses] = useState<number>(0);
  const [averageExpense, setAverageExpense] = useState<number>(0);

  useEffect(() => {
    const allGroups = getGroups();
    setGroups(allGroups);

    const allExpenses = allGroups.flatMap((g) => g.expenseList);
    const totalExp = allExpenses.reduce((sum, e) => sum + e.amount, 0);
    const avgExp = allGroups.length ? totalExp / allGroups.length : 0;

    setTotalExpenses(totalExp);
    setNumberOfExpenses(allExpenses.length);
    setAverageExpense(avgExp);
  }, []);

  // Chart data
  const expenseData = groups.map((g) => ({
    name: g.name,
    total: g.expenseList.reduce((sum, e) => sum + e.amount, 0),
  }));

  return (
    <div className="w-5/6 mx-auto mt-6">
      <SEO
        title="Analytics"
        description="View expense insights across all your groups and participants"
      />

      <h1 className="text-2xl font-bold mb-4 text-primary-txt">
        Analytics Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-gray-500 text-sm">Total Groups</p>
          <h2 className="text-2xl font-semibold text-primary">
            {groups.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-gray-500 text-sm">Total Expenses</p>
          <h2 className="text-2xl font-semibold text-primary">
            ${totalExpenses.toFixed(2)}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-gray-500 text-sm">Total No. of Expenses</p>
          <h2 className="text-2xl font-semibold text-primary">
            {numberOfExpenses}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-gray-500 text-sm">Average Expense / Group</p>
          <h2 className="text-2xl font-semibold text-primary">
            ${averageExpense.toFixed(2)}
          </h2>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-semibold mb-2">
            Expense Distribution by Group
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="total"
                data={expenseData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {expenseData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-semibold mb-2">
            Total Expenses per Group
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenseData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#2563EB" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
