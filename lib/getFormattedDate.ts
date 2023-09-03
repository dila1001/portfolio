export function getFormattedDateLong(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}

export function getFormattedDateShort(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short", // Use 'short' for abbreviated month names
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
}
