import ExpensesList from "@/components/ExpensesList";
import { Expenses } from "@/utils/types";
import axios from "axios";

const getExpenses = async () => {
  const res = await axios.get<Expenses[]>("http://localhost:3000/expenses");
  return res.data;
};

const TodoPage = async () => {
  const data = await getExpenses();
  return <ExpensesList expenses={data} />;
};

export default TodoPage;
