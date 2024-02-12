import "./contentArrayItem.less";

const ContentArrayItem = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} alt={data.name} />
      <h3 className="videoTittle">{data.name}</h3>
      <p className="videoInfo">
        <span className="views">{data.views}</span>
        <span>Dollie Blair</span>
      </p>
    </div>
  );
};
export default ContentArrayItem;
