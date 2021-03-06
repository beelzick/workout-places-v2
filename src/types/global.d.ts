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
    authorName?: string
}

interface Places {
    places: Place[]
}

interface Review {
    authorId: string
    description: string
    rating: number
    _id: string
    author: string
}

interface Inputs {
    name: string
    location: string
    entry: number
    description: string
    images?: string
}
