import { useRef, useEffect } from 'react';
import mapboxgl, { Map as MapType } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import renderMap from '../../helpers/mapbox'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

const Map = () => {
    const mapContainer = useRef(null)
    const map = useRef<MapType | null>(null)

    useEffect(() => {
        if (map.current) return
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [21.0333, 52.2167],
            zoom: 5
        })
        renderMap(map)
    })
    return (
        <div>
            <div ref={mapContainer} className='map-container' />
        </div>
    )
}

export default Map