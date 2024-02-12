import ContentArrayItem from "./contentArrayItem";
import "./NextContent.less";
import good from "./assets/Player/A Good Autoresponder.png";
import hotel from "./assets/Player/Selecting The Right Hotel.png";
import hotel2 from "./assets/Player/Selecting The Right Hotel 2.png";
import baby from "./assets/Player/Baby Monitor Technology.png";

const contentArray = [
  {
    img: baby,
    name: "Baby Monitor Technology",
    views: "123k views",
  },
  {
    img: good,
    name: "A Good Autoresponder",
    views: "123k views",
  },
  {
    img: hotel,
    name: "Selecting The Right Hotel",
    views: "123k views",
  },
  {
    img: hotel2,
    name: "Selecting The Right Hotel",
    views: "123k views",
  },
];

const NextContent = () => {
  return (
    <div className="nextContent">
      {contentArray.map((data, index) => (
        <ContentArrayItem key={index} data={data} />
      ))}
    </div>
  );
};
export default NextContent;
