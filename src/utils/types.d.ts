export type Expenses = {
  id: number;
  filename: string;
  amount: number;
  payed_at: string;
  expense_file_url: string;
  file_size: number;
  label_expense: {
    id: number;
    name: string;
    color: string;
    kind: string;
    enabled: true;
  };
};
