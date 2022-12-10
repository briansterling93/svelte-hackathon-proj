export function formatTimeStamp(str) {
  const date = new Date(str);

  const concat0 = (num) => {
    if (num < 10) return `0${num}`;
    return num;
  };

  return `${concat0(date.getMonth())}/${concat0(
    date.getDay()
  )}/${date.getUTCFullYear()}`;
}
