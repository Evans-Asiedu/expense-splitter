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
            name: "Ama",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p2",
            name: "John",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p3",
            name: "Ben",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
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
            name: "Ama",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p2",
            name: "John",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p3",
            name: "Ben",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
        ],
      },
    ],
    totalExpenses: 800,
    receiptList: [
      { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
      { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
    ],
    imageUrl:
      "https://cdn.usegalileo.ai/sdxl10/3a4bc566-a2f9-40bb-b275-3a348f14e5f6.png",
  },

  {
    id: "g2",
    name: "Anniversay Celebration",
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
            name: "Ama",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p2",
            name: "John",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p3",
            name: "Ben",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
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
            name: "Ama",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p2",
            name: "John",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p3",
            name: "Ben",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
        ],
      },
    ],
    totalExpenses: 800,
    receiptList: [
      { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
      { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
    ],
    imageUrl:
      "https://cdn.usegalileo.ai/stability/de34bada-e604-4bdb-b117-f72b392821a0.png",
  },

  {
    id: "g3",
    name: "Mountain Exploration",
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
            name: "Ama",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p2",
            name: "John",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p3",
            name: "Ben",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
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
            name: "Ama",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p2",
            name: "John",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
          {
            id: "p3",
            name: "Ben",
            contribution: "600",
            weight: 40,
            avatarUrl:
              "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
          },
        ],
      },
    ],
    totalExpenses: 800,
    receiptList: [
      { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
      { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
    ],
    imageUrl:
      "https://cdn.usegalileo.ai/stability/ee2b6b86-f13f-487a-b26d-6ef178ea9929.png",
  },
];
