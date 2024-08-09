const Service: React.FC<Service> = (serviceData) => {
  const name = serviceData.name
  const description = serviceData.description
  const price = serviceData.price
  const imgSrc = serviceData.imgSrc
  const book = serviceData.book
  return (
    <div className="service">
      <h3>{name}</h3>
      <p>{description}</p>
      <button>{book}</button>
    </div>
  )
}
export default Service
