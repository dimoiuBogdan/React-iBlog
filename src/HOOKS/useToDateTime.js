const useToDateTime = (time = 0) => {
  let secondsFromEpoch = new Date(time.seconds * 1000);
  let year = secondsFromEpoch.getFullYear();
  let month = secondsFromEpoch.getMonth() + 1;
  let day = secondsFromEpoch.getDate();

  return { year, month, day };
};
export default useToDateTime;
