export interface Participant {
  id: string;
  name: string;
  overallPercentageContribution: number;
  totalAmountPaid: number;
  totalAmountToPay: number;
  overallStatus: "settled" | "owing" | "overpaid";
}

// Expense participant breakdown
export interface ExpenseParticipant {
  id: string;
  amountToPay: number;
  amountPaid: number;
  percentageContribution: number;
  status: "settled" | "owing" | "overpaid";
}

// Expense
export interface Expense {
  id: string;
  name: string;
  description: string;
  date: string;
  receipt: string;
  amount: number;
  expenseParticipants: ExpenseParticipant[];
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
  participantList: Participant[];
  expenseList: Expense[];
  totalExpenses: number;
  receiptList: Receipt[];
  imageUrl: string;
}
