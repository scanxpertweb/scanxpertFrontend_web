import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      <div className="max-w-[500px] w-full aspect-square">
        <Player
          autoplay
          loop
          src="/404.json"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default NotFound;
