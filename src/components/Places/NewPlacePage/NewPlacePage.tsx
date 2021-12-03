import Container from '../../Container/Container'
import styles from './NewPlacePage.module.css'
import Input from '../../Input/Input'
import FileInput from '../../Input/FileInput/FileInput'
import TextArea from '../../Input/TextArea/TextArea'
import Button from '../../Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form';
import uploadFile from '../../../helpers/uploadFile'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0';
import { userId } from '../../../helpers/general'
interface Inputs {

}

const NewPlacePage = () => {
    const { user, error, isLoading } = useUser()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
        const { secure_url } = await uploadFile(data.images[0])
        delete data.images
        const placeData = {
            ...data,
            imgUrl: secure_url,
            author: userId(user!.sub!),
            addDate: new Date()
        }
        const response = await axios.post('/api/places', placeData)
        console.log(response)
    }

    return (
        <div className={styles.container}>
            <Container column alignItems='center'>
                <div className={styles.content}>
                    <h1>New Place</h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Input name='name' register={register} placeholder='Place Name' bottomBreak>
                            Place Name
                        </Input>
                        <Input name='location' register={register} placeholder='Place Name' bottomBreak>
                            Location
                        </Input>
                        <FileInput name='images' register={register} />
                        <Input name='entry' placeholder='0.00' bottomBreak register={register}>
                            Entry Price
                        </Input>
                        <TextArea name='description' labelText='Description' register={register} />
                        <Button color='primary' variant='contained' emotion='margin-top: 15px;' type='submit'>
                            add new place
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default NewPlacePage