import "./VideoDescription.less";
import like from "./assets/Player/like.svg";
import dislike from "./assets/Player/dislike.svg";
import share from "./assets/Player/share.svg";
import more from "./assets/Player/more.svg";

function VideoDescription() {
  return (
    <div>
      <h2>Dude You Re Getting A Telescope</h2>
      <div className="videoProperties">
        <span className="views-amount">123k views</span>
        <p className="views-info">
          <span className="likes">
            <img src={like} alt="like" width={"14px"} height={"14px"} />
            123k
          </span>
          <span className="dislikes">
            <img src={dislike} alt="dislike" width={"14px"} height={"14px"} />
            435k
          </span>
          <span className="share">
            <img src={share} alt="share" width={"14px"} height={"13px"} />
            Share
          </span>
          <span className="more">
            <img src={more} alt="more" width={"28px"} height={"26px"} />
          </span>
        </p>
      </div>
    </div>
  );
}

export default VideoDescription;
