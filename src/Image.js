import "./img.css";

function Image(props) {
  return (
    <img src={props.logoUrl} alt={props.logoAlt} className="border-class" />
  );
}

export default Image;
