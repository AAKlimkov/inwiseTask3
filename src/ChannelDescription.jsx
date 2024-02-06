import "./ChannelDescription.less";
import channelLogo from "./assets/Player/channelLogo.png";

function ChannelDescription() {
  return (
    <div className="channelDesription">
      <img src={channelLogo} alt="channelLogo" width={"80px"} height={"80px"} />
      <div className="channelInfo">
        <div className="channelHeader">
          <h2 className="channelName">Food & Drink</h2>
          <button className="subscribe-button">Subscribe 2.3M</button>
        </div>

        <p className="published">Published on 14 Jun 2019</p>
        <span className="channelText">
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action. There
          is no magic formula to write perfect ad copy; it is based on a number
          of factors, including ad placement, demographic, even the consumer’s
          mood when they see your ad.{" "}
        </span>
        <p className="showMore">Show more</p>
      </div>
    </div>
  );
}

export default ChannelDescription;
