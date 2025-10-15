const setDataTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString({ hourCycle: "h12" });
  console.log(time);
  document.getElementById("time").textContent = `Time:${time}`;
  document.getElementById("date").textContent = `Date:${date}`;
};
setDataTime();
setInterval(setDataTime, 1000);
