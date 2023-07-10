import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
    {
        loanId: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        interest: {
            type: Number,
            required: true,
        },
        borrowers: [{
            pariId: {
                type: Number,
                required: true,
            },
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
            }
        }]
    });

    const Loan = mongoose.model('Loan', loanSchema);
    export default Loan;