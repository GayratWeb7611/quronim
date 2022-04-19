const TimeCard = ({ current, time, tip }) => {
  return (
    <>
      <span
        style={{ backgroundImage: `url(images/${tip?.en}.jpg)` }}
        className={`time_card ${current == tip?.uz ? "current" : "pass"}`}
      >
        <p className="time-text">{tip?.uz}</p>
        <p className="time-time"> {time?.time}</p>
      </span>
    </>
  );
};
export default TimeCard;
