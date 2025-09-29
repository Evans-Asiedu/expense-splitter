import type { Group } from "../models/GroupModels";

// export const data: Group[] = [
//   {
//     id: "g1",
//     name: "Weekend Trip",
//     description: "Trip to the mountains with friends",
//     budget: 1000,
//     participantList: [
//       {
//         id: "p1",
//         name: "Alice",
//         overallPercentageContribution: 40,
//         totalAmountPaid: 400,
//         totalAmountToPay: 400,
//         overallStatus: "settled",
//       },
//       {
//         id: "p2",
//         name: "Bob",
//         overallPercentageContribution: 35,
//         totalAmountPaid: 300,
//         totalAmountToPay: 350,
//         overallStatus: "owing",
//       },
//       {
//         id: "p3",
//         name: "Charlie",
//         overallPercentageContribution: 25,
//         totalAmountPaid: 300,
//         totalAmountToPay: 250,
//         overallStatus: "overpaid",
//       },
//     ],
//     expenseList: [
//       {
//         id: "e1",
//         name: "Hotel Booking",
//         description: "2 nights at Mountain Inn",
//         date: "2025-08-15",
//         receipt: "receipts/hotel.pdf",
//         amount: 600,
//         expenseParticipants: [
//           {
//             id: "p1",
//             name: "Ama",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p2",
//             name: "John",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p3",
//             name: "Ben",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//         ],
//       },
//       {
//         id: "e2",
//         name: "Car Rental",
//         description: "SUV for the trip",
//         date: "2025-08-16",
//         receipt: "receipts/car.png",
//         amount: 200,
//         expenseParticipants: [
//           {
//             id: "p1",
//             name: "Ama",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p2",
//             name: "John",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p3",
//             name: "Ben",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//         ],
//       },
//     ],
//     totalExpenses: 800,
//     receiptList: [
//       { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
//       { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
//     ],
//     imageUrl:
//       "https://cdn.usegalileo.ai/sdxl10/3a4bc566-a2f9-40bb-b275-3a348f14e5f6.png",
//   },

//   {
//     id: "g2",
//     name: "Anniversay Celebration",
//     description: "Trip to the mountains with friends",
//     budget: 1000,
//     participantList: [
//       {
//         id: "p1",
//         name: "Alice",
//         overallPercentageContribution: 40,
//         totalAmountPaid: 400,
//         totalAmountToPay: 400,
//         overallStatus: "settled",
//       },
//       {
//         id: "p2",
//         name: "Bob",
//         overallPercentageContribution: 35,
//         totalAmountPaid: 300,
//         totalAmountToPay: 350,
//         overallStatus: "owing",
//       },
//       {
//         id: "p3",
//         name: "Charlie",
//         overallPercentageContribution: 25,
//         totalAmountPaid: 300,
//         totalAmountToPay: 250,
//         overallStatus: "overpaid",
//       },
//     ],
//     expenseList: [
//       {
//         id: "e1",
//         name: "Hotel Booking",
//         description: "2 nights at Mountain Inn",
//         date: "2025-08-15",
//         receipt: "receipts/hotel.pdf",
//         amount: 600,
//         expenseParticipants: [
//           {
//             id: "p1",
//             name: "Ama",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p2",
//             name: "John",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p3",
//             name: "Ben",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//         ],
//       },
//       {
//         id: "e2",
//         name: "Car Rental",
//         description: "SUV for the trip",
//         date: "2025-08-16",
//         receipt: "receipts/car.png",
//         amount: 200,
//         expenseParticipants: [
//           {
//             id: "p1",
//             name: "Ama",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p2",
//             name: "John",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p3",
//             name: "Ben",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//         ],
//       },
//     ],
//     totalExpenses: 800,
//     receiptList: [
//       { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
//       { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
//     ],
//     imageUrl:
//       "https://cdn.usegalileo.ai/stability/de34bada-e604-4bdb-b117-f72b392821a0.png",
//   },

//   {
//     id: "g3",
//     name: "Mountain Exploration",
//     description: "Trip to the mountains with friends",
//     budget: 1000,
//     participantList: [
//       {
//         id: "p1",
//         name: "Alice",
//         overallPercentageContribution: 40,
//         totalAmountPaid: 400,
//         totalAmountToPay: 400,
//         overallStatus: "settled",
//       },
//       {
//         id: "p2",
//         name: "Bob",
//         overallPercentageContribution: 35,
//         totalAmountPaid: 300,
//         totalAmountToPay: 350,
//         overallStatus: "owing",
//       },
//       {
//         id: "p3",
//         name: "Charlie",
//         overallPercentageContribution: 25,
//         totalAmountPaid: 300,
//         totalAmountToPay: 250,
//         overallStatus: "overpaid",
//       },
//     ],
//     expenseList: [
//       {
//         id: "e1",
//         name: "Hotel Booking",
//         description: "2 nights at Mountain Inn",
//         date: "2025-08-15",
//         receipt: "receipts/hotel.pdf",
//         amount: 600,
//         expenseParticipants: [
//           {
//             id: "p1",
//             name: "Ama",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p2",
//             name: "John",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p3",
//             name: "Ben",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//         ],
//       },
//       {
//         id: "e2",
//         name: "Car Rental",
//         description: "SUV for the trip",
//         date: "2025-08-16",
//         receipt: "receipts/car.png",
//         amount: 200,
//         expenseParticipants: [
//           {
//             id: "p1",
//             name: "Ama",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p2",
//             name: "John",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//           {
//             id: "p3",
//             name: "Ben",
//             contribution: "600",
//             weight: 40,
//             avatarUrl:
//               "https://cdn.usegalileo.ai/stability/e995b051-eff4-4ba3-964c-7ebd7b82b9dc.png",
//           },
//         ],
//       },
//     ],
//     totalExpenses: 800,
//     receiptList: [
//       { id: "r1", name: "Hotel Receipt", amount: 600, expenseId: "e1" },
//       { id: "r2", name: "Car Rental Receipt", amount: 200, expenseId: "e2" },
//     ],
//     imageUrl:
//       "https://cdn.usegalileo.ai/stability/ee2b6b86-f13f-487a-b26d-6ef178ea9929.png",
//   },
// ];

export const data: Group[] = [
  {
    id: "group-1",
    name: "Weekend Getaway",
    description: "Trip to the mountains with friends",
    budget: 2000.0,
    totalExpenses: 650.0,
    expensesCount: 3,
    imageUrl: "https://example.com/images/weekend-getaway.jpg",
    participantList: [
      {
        id: "p1",
        name: "Alice Johnson",
        overallPercentageContribution: "40%",
        totalAmountPaid: 260.0,
        totalAmountToPay: 260.0,
        overallStatus: "settled",
      },
      {
        id: "p2",
        name: "Bob Smith",
        overallPercentageContribution: "35%",
        totalAmountPaid: 180.0,
        totalAmountToPay: 227.5,
        overallStatus: "owing",
      },
      {
        id: "p3",
        name: "Charlie Kim",
        overallPercentageContribution: "25%",
        totalAmountPaid: 210.0,
        totalAmountToPay: 162.5,
        overallStatus: "overpaid",
      },
    ],
    expenseList: [
      {
        id: "e1",
        name: "Cab Ride",
        amount: 120.0,
        description: "Taxi fare from city to cabin",
        date: "2025-09-20",
        receipt: "receipt-1",
        // groupId: "group-1",
        expenseParticipants: [
          {
            id: "p1",
            name: "Alice Johnson",
            avatarUrl: "https://example.com/avatars/alice.jpg",
            weight: 12,
            contribution: "40",
          },
          {
            id: "p2",
            name: "Bob Smith",
            avatarUrl: "https://example.com/avatars/bob.jpg",
            weight: 14,
            contribution: "35",
          },
          {
            id: "p3",
            name: "Charlie Kim",
            avatarUrl: "https://example.com/avatars/charlie.jpg",
            weight: 12,
            contribution: "25",
          },
        ],
      },
      {
        id: "e2",
        name: "Groceries",
        amount: 200.0,
        description: "Food and drinks for the weekend",
        date: "2025-09-21",
        receipt: "receipt-2",
        // groupId: "group-1",
        expenseParticipants: [
          {
            id: "p1",
            name: "Alice Johnson",
            avatarUrl: "https://example.com/avatars/alice.jpg",
            weight: 2,
            contribution: "40%",
          },
          {
            id: "p2",
            name: "Bob Smith",
            avatarUrl: "https://example.com/avatars/bob.jpg",
            weight: 2,
            contribution: "35%",
          },
          {
            id: "p3",
            name: "Charlie Kim",
            avatarUrl: "https://example.com/avatars/charlie.jpg",
            weight: 1,
            contribution: "25%",
          },
        ],
      },
      {
        id: "e3",
        name: "Cabin Rental",
        amount: 330.0,
        description: "Two-night stay at the mountain cabin",
        date: "2025-09-22",
        receipt: "receipt-3",
        // groupId: "group-1",
        expenseParticipants: [
          {
            id: "p1",
            name: "Alice Johnson",
            avatarUrl: "https://example.com/avatars/alice.jpg",
            weight: 2,
            contribution: "40%",
          },
          {
            id: "p2",
            name: "Bob Smith",
            avatarUrl: "https://example.com/avatars/bob.jpg",
            weight: 1,
            contribution: "35%",
          },
          {
            id: "p3",
            name: "Charlie Kim",
            avatarUrl: "https://example.com/avatars/charlie.jpg",
            weight: 1,
            contribution: "25%",
          },
        ],
      },
    ],
    receiptList: [
      {
        id: "receipt-1",
        name: "Cab Ride Receipt",
        amount: 120.0,
        expenseId: "e1",
      },
      {
        id: "receipt-2",
        name: "Groceries Receipt",
        amount: 200.0,
        expenseId: "e2",
      },
      {
        id: "receipt-3",
        name: "Cabin Rental Receipt",
        amount: 330.0,
        expenseId: "e3",
      },
    ],
  },
];
