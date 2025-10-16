export interface Participant {
  id: string;
  name: string;
  overallPercentageContribution: string;
  totalAmountPaid: number;
  totalAmountToPay: number;
  overallStatus: "settled" | "owing" | "overpaid";
}

// Expense participant breakdown
export interface ExpenseParticipant {
  id: string;
  name: string;
  avatarUrl: string;
  weight: number;
  contribution: string;
}

// Expense
export interface Expense {
  id: string;
  name: string;
  amount: number;
  description: string;
  expenseParticipants: ExpenseParticipant[];
  date: string;
  receipt: string;
  // groupId: string;
}

// Receipt
export interface Receipt {
  id: string;
  name: string;
  amount: number;
  expenseId: string;
}

// Group
export interface Group {
  id: string;
  name: string;
  description: string;
  budget: number;
  totalExpenses: number;
  expensesCount: number;
  imageUrl: string;
  participants: Participant[];
  expenses: Expense[];
  receipts: Receipt[];
}
