import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";

const Loading = ({ isLoading }: { isLoading?: boolean }) => {
  const [animationData, setAnimationData] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    fetch("/loading.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));

    let timer: NodeJS.Timeout;

    if (isLoading) {
      setFadeOut(false);
      timer = setTimeout(() => setFadeOut(true), 3000); // Fade out after 3 sec
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!animationData || fadeOut) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white transition-opacity duration-500">
      <Player
        autoplay
        keepLastFrame
        src={animationData}
        style={{ height: "450px", width: "450px" }}
      />
    </div>
  );
};

export default Loading;
