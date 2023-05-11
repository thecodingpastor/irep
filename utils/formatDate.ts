const __ = (time: Date) => {
  let date = new Date(time);

  return date.toLocaleDateString("en-US", {
    // weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const __date = (time: Date) => {
  let date = new Date(time);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    // month: "short",
    day: "numeric",
  });
};

export const __time = (time: any) => {
  let date = new Date(time);

  return date.toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    year: "numeric",
    day: "2-digit",
  });
};

export const CheckDate = (date: Date) =>
  new Date(date).getTime() > new Date(Date.now()).getTime();

export default __;
