var _mongoClientPromise: any //fix global variable issues

interface Place {
    name: string
    location: string
    description: string
    entry: number
    addDate: Date
    geometry: {
        type: 'Point'
        coordinates: [number, number]
    }
    _id: string
    reviews: []
    author: string
    imgUrl: string
}

interface Places {
    places: Place[]
}
