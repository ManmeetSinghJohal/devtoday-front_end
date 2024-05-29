export function timeDifference(date: string): string {
  const dateValue = new Date(date);
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

export function getMeetDayInfo(meetDay: string): {
  month: string;
  day: number;
} {
  const dateValue = new Date(meetDay);
  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex: number = dateValue.getMonth();
  const day: number = dateValue.getDate();

  const month: string = monthNames[monthIndex];

  return { month, day };
}

export const likePost = async (postId: string, userId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3005/api/post/${postId}/like`,
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likerId: userId }),
      },
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const unlikePost = async (postId: string, userId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3005/api/post/${postId}/unlike`,
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likerId: userId }),
      },
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
