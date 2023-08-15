const DisplayPlaces = ({placeInfo}) => {
  const {name, imageUrl, description} = placeInfo

  return (
    <li className="place-container">
      <img src={imageUrl} alt={name} />
      <div className="place-details">
        <h1 className="place-name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default DisplayPlaces
