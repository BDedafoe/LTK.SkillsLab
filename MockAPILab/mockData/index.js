import mongoose from "mongoose";

export const loans = [
    {
        loanId: "351351350",
        amount: "2000",
        interest: "4.6",
        borrowers: {
            pariId: "344",
            firstName: "John",
            lastName: "Doe",
            phone: "556-555-5551"
        }
    },
    {
        loanId: "54513565",
        amount: "5062",
        interest: "1.9",
        borrowers: {
            pariId: "234",
            firstName: "Jerry",
            lastName: "Marshal",
            phone: "556-999-5551"
        }
    }
]