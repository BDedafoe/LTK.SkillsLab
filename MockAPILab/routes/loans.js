import express from 'express';
import { getAllLoans, getLoan, addLoan, updateLoan, deleteBorrower, deleteLoan } from '../controllers/loans.js';

const router = express.Router();

router.get('/loans', getAllLoans);
router.get('/loans/:id', getLoan);
router.post('/loans', addLoan);
router.patch('/loans/:id', updateLoan);
router.delete('/loans/:id', deleteLoan);
router.delete('/loans/:id', deleteBorrower);

export default router;