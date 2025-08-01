import { useEffect, useRef, useState } from "react";

const TypingEffect = ({
  words,
  typingSpeed = 150,
  pauseTime = 1000,
  className = "",
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingTimeout = useRef();
  const pauseTimeout = useRef();

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      typingTimeout.current = setTimeout(() => {
        setTypedText(words[wordIndex].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      pauseTimeout.current = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pauseTime);
    }
    return () => {
      clearTimeout(typingTimeout.current);
      clearTimeout(pauseTimeout.current);
    };
  }, [charIndex, wordIndex, words, typingSpeed, pauseTime]);

  return (
    <span
      className={className}
      style={{ display: "inline-block", textAlign: "left" }}
    >
      {typedText}
      <span className="border-r-2 border-indigo-400 animate-pulse ml-1" />
    </span>
  );
};

export default TypingEffect;
