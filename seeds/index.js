import { config } from 'dotenv'
config()
import { MongoClient } from 'mongodb'
import { descriptors, places, gyms, authors } from './seedInitiators.mjs'
import cities from './cities_pl.json'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const getRndInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min)
const randArrEl = array => array[Math.floor(Math.random() * array.length)]

const generateEntry = () => {
    if (Math.random() > 0.5) {
        return Math.floor(Math.random() * 8) + 4
    } else {
        return 0
    }
}

const generateDate = () => {
    return new Date(
        getRndInteger(2019, 2021),
        getRndInteger(0, 11),
        getRndInteger(0, 30),
        getRndInteger(0, 23),
        getRndInteger(0, 59),
        getRndInteger(0, 59),
    )
}

const generateData = () => {
    const placesArray = []
    for (let i = 0; i < 1000; i++) {
        const location = randArrEl(cities)
        placesArray.push({
            name: `${randArrEl(descriptors)} ${randArrEl(places)}`,
            location: `${location.city}, ${location.admin_name}`,
            description: lorem.slice(0, Math.floor(Math.random() * lorem.length)),
            entry: generateEntry(),
            addDate: generateDate(),
            geometry: {
                type: 'Point',
                coordinates: [parseFloat(location.lng), parseFloat(location.lat)]
            },
            author: randArrEl(authors),
            imgUrl: randArrEl(gyms),
            reviews: [],
        })
    }
    return placesArray
}

const seedDB = async () => {
    const client = new MongoClient(process.env.MONGODB_URI)
    try {
        await client.connect()
        const collection = client.db('workout-places').collection('places')
        await collection.deleteMany({})
        await collection.insertMany(generateData())
    } catch (e) {
        console.log(e)
    } finally {
        client.close()
    }
}

seedDB()