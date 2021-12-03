import axios from 'axios'

const uploadFile = async (image: string) => {
    let formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!)
    formData.append('folder', 'workout-places-new')
    const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        formData
    )
    return data
}
export default uploadFile