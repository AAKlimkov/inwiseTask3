import "./Player.less";
import VideoDescription from "./VideoDesription";
import ChannelDescription from "./ChannelDescription";

function Player() {
  return (
    <div className="video">
      <div className="videoPlayer"></div>
      <VideoDescription />
      <ChannelDescription />
    </div>
  );
}

export default Player;
