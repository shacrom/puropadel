export function formatDateTable(date: Date): string {
  return date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
}

export function convertToDate(dateString: string) {
  // Divide la cadena en partes
  const parts = dateString.split('-');

  // Extrae el día, mes y año
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Resta 1 porque los meses en JavaScript van de 0-11
  const year = parseInt(parts[2], 10);

  // Crea un nuevo objeto Date
  return new Date(year, month, day);
}