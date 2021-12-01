import { useRef, useEffect } from 'react'
import mapboxgl, { Map } from 'mapbox-gl'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

const ShowPageMap = ({ place }: { place: Place }) => {
    const mapContainer = useRef(null)
    const map = useRef<Map | null>(null)

    useEffect(() => {
        if (map.current) return
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [place.geometry.coordinates[0], place.geometry.coordinates[1]],
            zoom: 10
        })
        new mapboxgl.Marker({ color: '#DA2C38' }).setLngLat(place.geometry.coordinates).addTo(map.current)
    })

    return (
        <div>
            <div ref={mapContainer} className='map-container map-show-page' />
        </div>
    )
}

export default ShowPageMap