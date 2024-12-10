import { FinanceFlow } from "./components/finance-flow/FinanceFlow";
import './App.css'
import { Transactions } from "./components/transactions/Transactions";
import ManageExpense from "./shared/manage-expense/ManageExpense";
function App() {
  return (
    <div>
      <ManageExpense />
      <FinanceFlow />
      <Transactions />
    </div>
  );
}

export default App;
