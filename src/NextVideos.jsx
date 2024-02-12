import "./NextVideos.less";
import NextContent from "./NextContent";
import autoPlay from "./assets/Player/autoPlay.svg";

function NextVideos() {
  return (
    <div className="nextVideos">
      <div className="nextHeader">
        <h2 className="nextTittle">Next</h2>
        <span>
          <span className="autoPlay">autoplay</span>
          <img src={autoPlay} alt="autoPlay" />
        </span>
      </div>
      <NextContent />
    </div>
  );
}

export default NextVideos;
