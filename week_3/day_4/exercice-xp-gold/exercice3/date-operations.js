import { format, addDays } from "date-fns";

export function showDateOperations() {
  const now = new Date();
  const future = addDays(now, 5);
  console.log("Current date:", format(now, "yyyy-MM-dd"));
  console.log("Date +5 days:", format(future, "yyyy-MM-dd"));
}