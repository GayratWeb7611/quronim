import { useRef, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import styles from "../styles/surahs.module.scss"; 
const Surah = ({ text, audio, arabic, ayahIndex }) => {
  console.log(ayahIndex);
  const { audioIndex, setAudioIndex } = useAppContext();
  const audioRef = useRef();
  const autoplay = () => {
    setAudioIndex((oldIndex) => (oldIndex === ayahIndex ? -1 : ayahIndex));
  };

  useEffect(() => {
    if (audioIndex === ayahIndex) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else audioRef.current.pause();
  }, [audioIndex]);

  return (
    <>
      <span onClick={autoplay}>
        <p className={styles.paragraf}>{text}</p>
        <p className={styles.arabic_paragraf}>{arabic}</p>
        <p style={{fontSize:"30px"}}>🔉</p>
      </span>
      <audio
        className={styles.surah}
        controls
        ref={audioRef}
        src={audio}
      ></audio>
    </>
  );
};
export default Surah;
