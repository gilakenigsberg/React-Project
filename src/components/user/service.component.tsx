import { Link } from "react-router-dom";

const Service: React.FC<{ serviceData: Service }> = ({ serviceData }) => {
  const name = serviceData.name;
  const description = serviceData.description;
  const price = serviceData.price;
  const image = serviceData.image;
  return (
    <div className="service">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to="/BookAppointment">book now</Link>
    </div>
  );
};
export default Service;
