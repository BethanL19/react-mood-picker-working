import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };

  const handleMoodChangeToCrazy = () => {
    queueRerenderWithNewMoodValue("crazy");
  };

  const handleMoodChangeToAngry = () => {
    queueRerenderWithNewMoodValue("angry");
  };

  const handleMoodChangeToSleepy = () => {
    queueRerenderWithNewMoodValue("sleepy");
  };

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToCrazy}>🤪</button>
      <button onClick={handleMoodChangeToAngry}>😡</button>
      <button onClick={handleMoodChangeToSleepy}>😴</button>
    </>
  );
}

export default MoodPickerDemo;
