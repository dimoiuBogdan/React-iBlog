const useToDateTime = (time = 0) => {
  let secondsFromEpoch = new Date(time);
  let year = secondsFromEpoch.getFullYear();
  let month = secondsFromEpoch.getMonth() + 1;
  let day = secondsFromEpoch.getDate();
  return { year, month, day };
};
export default useToDateTime;
