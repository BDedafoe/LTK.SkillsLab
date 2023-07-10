import Loan from '../models/Loan.js';

export const getAllLoans = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await Loan.findById(id);
        res.status(200).json(loan);
    } catch (err) {
        res.status(err.status).json({ message: err.message });
    }
};

export const getLoan = async (req, res) => {
    const id = parseInt(req.params.id);
    const loan = loans.find((loan) => loan.id === id);

    if (loan) {
        res.json(loan);
    } else {
        restart.status(404).json({ message: err.message });
    }
};

export const addLoan = (req, res) => {
    const loan = req.body;
    loans.push(loan);

    res.status(201).json(loan)
};

export const updateLoan = (req, res) => {
    const id = parseInt(req.params.id);
    const loan = loans.find((loan) => loan.id === id);

    if(!loan) {
        res.status(404).json({ message: err.message });
    } else {
        loan.amount = req.body.amount;
        loan.interest = req.body.interest;

        res.json(loan);
    }
};
    
export const deleteLoan = (req, res) => {
    const id = parseInt(req.params.id);
    const loanIndex = loans.findIndex((loan) => loan.id === id);

    if (loanIndex !== -1) {
        res.status(404).json({ error: 'Loan not found' });
    } else {
        const deleteLoan = loans.splice(loanIndex, 1);
        res.json(deleteLoan[0]);
    };
};

export const deleteBorrower = (req, res) => {
    const id = (req.params.id);
    const loanIndex = loans.findIndex((loan) => loan.id === id);

    if (loanIndex !== -1) {
        res.status(404).json({ error: 'Borrower not found' });
    } else {
        const deleteBorrower = loans.splice(loanIndex, 1);
        res.json(deleteBorrower[0]);
    };
};


