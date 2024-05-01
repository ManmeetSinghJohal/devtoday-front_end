export function timeDifference(dateValue: Date): string {
  const now: number = Date.now();
  const differenceInMs: number = now - dateValue.getTime();
  const second: number = 1000;
  const minute: number = 60 * second;
  const hour: number = 60 * minute;
  const day: number = 24 * hour;
  const week: number = 7 * day;
  const month: number = 30 * day;
  const year: number = 365 * day;

  const timeUnits = [
    { unit: "year", duration: year },
    { unit: "month", duration: month },
    { unit: "week", duration: week },
    { unit: "day", duration: day },
    { unit: "hour", duration: hour },
    { unit: "minute", duration: minute },
    { unit: "second", duration: second },
  ];

  for (const { unit, duration } of timeUnits) {
    if (Math.abs(differenceInMs) >= duration) {
      const time = Math.floor(Math.abs(differenceInMs) / duration);
      const plural = time !== 1 ? "s" : "";
      const direction = differenceInMs < 0 ? "in" : "ago";
      if (direction === "in") {
        return `${direction} ${time} ${unit}${plural}`;
      } else {
        return `${time} ${unit}${plural} ${direction}`;
      }
    }
  }

  return "just now";
}
