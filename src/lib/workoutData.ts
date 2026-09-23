export const getWorkoutData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("data fetching fills", e);
    return [];
  }
};
