import { z } from "zod";

export const expensesSchema = z.object({
  filename: z
    .string()
    .min(2, { message: "Name should have at least 2 letters" }),
  amount: z.number(),
  payed_at: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  expense_file_url: z
    .instanceof(File, { message: "this is not a file" })
    .or(z.string()),
  // expense_file_url:
  //   "http://backend-staging.ppt.koombea.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzRCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a8a031e3197d488d9da1519908a5a486552d443/fwdfwdfwfw",
  label_expense: z.object({
    name: z.string(),
  }),
});
