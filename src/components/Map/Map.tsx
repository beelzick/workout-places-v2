import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import renderMap from '../../helpers/mapbox'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!



const Map = () => {
    const mapContainer = useRef(null)
    const map = useRef<unknown>(null)
    const [lng, setLng] = useState(21.0333);
    const [lat, setLat] = useState(52.2167);
    const [zoom, setZoom] = useState<number>(5)

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        renderMap(map, setLng, setLat, setZoom)
    });
    return (
        <div>
            <div ref={mapContainer} className='map-container' />
        </div>
    )
}

export default Map