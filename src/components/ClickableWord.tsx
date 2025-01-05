import { useState,useRef } from "react";
interface ClickableWordProps {
    word:string;
    soundFile:string;
}
const ClickableWord: React.FC<ClickableWordProps> = ({ 
    word, 
    soundFile,
  }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    const handleClick = (): void => {
      if (!audioRef.current) return;
  
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    };
  
    const handleAudioEnd = (): void => {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    };
  
    return (
      <span className="inline-block">
        <span 
          onClick={handleClick}
          className={`cursor-pointer hover:text-gray-600 transition-colors ${
            isPlaying ? 'text-red-500 font-medium' : ''
          }`}
        >
          {word}
        </span>
        <audio
          ref={audioRef}
          src={soundFile}
          onEnded={handleAudioEnd}
        />
      </span>
    );
  };

  export default ClickableWord;