export const userId = (sub: string) => sub.split('|').pop()
export const initialCurrentState: Place = {
    _id: '',
    imgUrl: '',
    name: '',
    location: '',
    description: '',
    entry: 0,
    reviews: [],
    author: '',
    addDate: new Date(),
    geometry: {
        type: 'Point',
        coordinates: [0, 0]
    }
}