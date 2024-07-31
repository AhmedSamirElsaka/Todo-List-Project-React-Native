export const getGreeting = (hour: number) => {
  if (hour < 12) {
    return "morning";
  }
  if (hour < 18) {
    return "evening";
  } else {
    return "night";
  }
};
