import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import DisplayPlaces from './DisplayPlaces'

const TravelGuide = () => {
  const [places, setPlaces] = useState()
  const [loader, setLoader] = useState(true)

  async function getAppData() {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log({data})
    const formattedData = data.packages.map(item => ({
      id: item.id,
      name: item.name,
      imageUrl: item.image_url,
      description: item.description,
    }))
    console.log(formattedData)
    setPlaces(formattedData)
    setLoader(false)
  }

  useEffect(() => {
    getAppData()
  }, [])

  return (
    <div>
      <ul className="places-container">
        {loader && (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        )}
        {places?.map(place => (
          <DisplayPlaces key={place.id} placeInfo={place} />
        ))}
      </ul>
    </div>
  )
}

export default TravelGuide
