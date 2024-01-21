export function formatDate(date: Date): string {
  return date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
}