export const addDays = (date, daysToAdd) => {
  const clone = new Date(date.getTime());
  // move the date by the num of days specified
  clone.setDate(clone.getDate() + daysToAdd);
  return clone;
};

export const getWeek = (forDate, daysOffset = 0) => {
  // move the date
  const date = addDays(forDate, daysOffset);

  // get day index for new date. Sunday is 0, Sat is 6
  const day = date.getDay();

  return {
    date,
    // start date move back by e.g 2, end date move forward by e.g 4
    start: addDays(date, -day),
    end: addDays(date, 6 - day),
  };
};
