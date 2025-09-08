import type { Group } from "../models/GroupModels";

export const data: Group[] = [
  {
    id: "g1",
    name: "Weekend Trip",
    description: "Trip to the mountains with friends",
    budget: 1000,
    participantList: [
      {
        id: "p1",
        name: "Alice",
        overallPercentageContribution: 40,
        totalAmountPaid: 400,
        totalAmountToPay: 400,
        overallStatus: "settled",
      },
      {
        id: "p2",
        name: "Bob",
        overallPercentageContribution: 35,
        totalAmountPaid: 300,
        totalAmountToPay: 350,
        overallStatus: "owing",
      },
      {
        id: "p3",
        name: "Charlie",
        overallPercentageContribution: 25,
        totalAmountPaid: 300,
        totalAmountToPay: 250,
        overallStatus: "overpaid",
      },
    ],
    expenseList: [
      {
        id: "e1",
        name: "Hotel Booking",
        description: "2 nights at Mountain Inn",
        date: "2025-08-15",
        receipt: "receipts/hotel.pdf",
        amount: 600,
        expenseParticipants: [
          {
            id: "p1",
            amountToPay: 240,
            amountPaid: 200,
            percentageContribution: 40,
            status: "owing",
          },
          {
            id: "p2",
            amountToPay: 210,
            amountPaid: 150,
            percentageContribution: 35,
            status: "owing",
          },
          {
            id: "p3",
            amountToPay: 150,
            amountPaid: 250,
            percentageContribution: 25,
            status: "overpaid",
          },
        ],
      },
      {
        id: "e2",
        name: "Car Rental",
        description: "SUV for the trip",
        date: "2025-08-16",
        receipt: "receipts/car.png",
        amount: 200,
        expenseParticipants: [
          {
            id: "p1",
            amountToPay: 80,
            amountPaid: 200,
            percentageContribution: 40,
            status: "overpaid",
          },
          {
            id: "p2",
            amountToPay: 70,
            amountPaid: 150,
            percentageContribution: 35,
            status: "overpaid",
          },
          {
            id: "p3",
            amountToPay: 50,
            amountPaid: 50,
            percentageContribution: 25,
            status: "settled",
          },
        ],
      },
    ],
    totalExpenses: 800,
    receiptList: [
      { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
      { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
    ],
    imageUrl: "https://example.com/images/trip.jpg",
  },
];
