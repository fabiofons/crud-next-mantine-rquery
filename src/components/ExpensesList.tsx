"use client";

import { Expenses } from "@/utils/types";
import { expensesSchema } from "@/utils/validationSchema";
import {
  Button,
  ComboboxItem,
  Container,
  FileInput,
  Modal,
  NumberInput,
  Select,
  Table,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

type Props = {
  expenses: Expenses[];
};

const ExpensesList = ({ expenses }: Props) => {
  const [opened, { open, close }] = useDisclosure(true);

  const form = useForm({
    validate: zodResolver(expensesSchema),
    initialValues: {
      filename: "",
      amount: 0,
      payed_at: "",
      expense_file_url: "",
      label_expense: {
        name: "eeeee",
      },
    },
  });

  const editExpense = (expense: Expenses) => {
    console.log(expense);
    open();
    form.setInitialValues(expense);
    form.setValues(expense);
  };
  const rows = expenses.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.filename}</Table.Td>
      <Table.Td>{element.amount}</Table.Td>
      <Table.Td>{element.payed_at}</Table.Td>
      <Table.Td>{element.label_expense.name}</Table.Td>
      <Table.Td>
        <Button variant="outline" onClick={open}>
          {element.id}
        </Button>
        <Button onClick={() => editExpense(element)}>Edit</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Container>
        <h1>Expenses</h1>
        <Table.ScrollContainer minWidth={500}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Receipt Name</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Payed at</Table.Th>
                <Table.Th>Label</Table.Th>
                <Table.Th>Label</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Container>
      <Modal title="New receipt" opened={opened} onClose={close} centered>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            label="Name"
            withAsterisk
            placeholder="Placeholder"
            {...form.getInputProps("filename")}
          />
          <NumberInput
            label="Amount"
            withAsterisk
            placeholder="Placeholder"
            {...form.getInputProps("amount")}
          />
          {/* <DatePickerInput
            label="Date"
            withAsterisk
            placeholder="Placeholder"
            {...form.getInputProps("payed_at")}
          /> */}
          <FileInput
            placeholder="Drag and drop"
            label="File"
            {...form.getInputProps("expense_file_url")}
          />
          <Select
            label="Select"
            placeholder="Select one"
            data={labelsData}
            {...form.getInputProps("label_expense.id")}
          />
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </>
  );
};

const labelsData = [
  {
    value: "6",
    label: "Food/Groceries Insurance",
  },
  {
    value: "7",
    label: "Giving",
  },
  {
    value: "5",
    label: "Housing/Rent",
  },
  {
    value: "4",
    label: "Medical",
  },
  {
    value: "11",
    label: "Miscellaneous",
  },
  {
    value: "10",
    label: "Personal Care Recreation",
  },
  {
    value: "9",
    label: "Pets",
  },
  {
    value: "1",
    label: "test1",
  },
  {
    value: "2",
    label: "test2",
  },
  {
    value: "3",
    label: "Transportation",
  },
  {
    value: "8",
    label: "Utilities",
  },
];

export default ExpensesList;
