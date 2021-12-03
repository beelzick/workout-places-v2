import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
const geocoder = mbxGeocoding({ accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN! })

export default geocoder