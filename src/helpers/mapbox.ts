import mapboxgl from 'mapbox-gl';
import axios from 'axios'

type RenderMap = (map: { current: any }) => void
const renderMap: RenderMap = async (map) => {
    map.current.on('load', async () => {
        const { data } = await axios.get('/api/places')
        map.current.addSource('places', {
            type: 'geojson',
            data: {
                features: data.places.map((place: Place) => ({
                    type: 'Feature',
                    properties: {
                        _id: place._id,
                        name: place.name
                    },
                    geometry: place.geometry

                }))
            },
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50
        });
        map.current.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'places',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#da2c38',
                    80,
                    '#ad1f28',
                    250,
                    '#dd3c47'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    80,
                    30,
                    250,
                    40
                ]
            }
        });

        map.current.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'places',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12,
            },
            paint: {
                'text-color': '#fff'
            }
        });
        map.current.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'places',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#DA2C38',
                'circle-radius': 4,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff'
            }
        });

        map.current.on('click', 'clusters', (e: any) => {
            const features = map.current.queryRenderedFeatures(e.point, {
                layers: ['clusters']
            });
            const clusterId = features[0].properties.cluster_id;
            map.current.getSource('places').getClusterExpansionZoom(
                clusterId,
                (err: any, zoom: any) => {
                    if (err) return;
                    map.current.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom
                    });
                }
            );
        });
        map.current.on('click', 'unclustered-point', (e: any) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const { name, _id }: Place = e.features[0].properties

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup({ className: 'popup-link' })
                .setLngLat(coordinates)
                .setHTML(
                    `<a href='/places/${_id}'>${name}</a>`
                )
                .addTo(map.current);
        });
        map.current.on('mouseenter', 'clusters', () => {
            map.current.getCanvas().style.cursor = 'pointer';
        });
        map.current.on('mouseleave', 'clusters', () => {
            map.current.getCanvas().style.cursor = '';
        });
    })
}

export default renderMap