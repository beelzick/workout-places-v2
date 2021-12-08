import Container from '../../Container/Container'
import styles from '../Form.module.css'
import Input from '../../Input/Input'
import FileInput from '../../Input/FileInput/FileInput'
import TextArea from '../../Input/TextArea/TextArea'
import Button from '../../Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form';
import uploadFile from '../../../helpers/uploadFile'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0';
import { userId } from '../../../helpers/general'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { newPlaceSchema } from '../../../helpers/yup'

const NewPlacePage = () => {
    const { user } = useUser()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(newPlaceSchema)
    })
    const [btnDisabled, setBtnDisabled] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.back()
            toast.error('You have to be logged in to add a new place')
            setBtnDisabled(true)
        }
    }, [user, router])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setBtnDisabled(true)
        const { secure_url } = await uploadFile(data!.images![0])
        delete data.images
        const placeData = {
            ...data,
            imgUrl: secure_url,
            author: userId(user!.sub!),
            addDate: new Date()
        }
        toast.promise(
            axios.post('/api/places', placeData),
            {
                pending: 'Pending',
                success: 'Place successfully added 👌',
                error: 'Couldn\'t add a new place 🤯'
            }
        )
        setBtnDisabled(false)
        router.push('/places')
    }

    return (
        <div className={styles.container}>
            <Container column alignItems='center'>
                <div className={styles.content}>
                    <h1>New Place</h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Input
                            name='name'
                            register={register}
                            placeholder='Place Name'
                            bottomBreak
                            error={errors.name?.message}
                        >
                            Place Name
                        </Input>
                        <Input
                            name='location'
                            register={register}
                            placeholder='Place Name'
                            bottomBreak
                            error={errors.location?.message}
                        >
                            Location
                        </Input>
                        <FileInput
                            name='images'
                            register={register}
                            error={errors.images?.message}
                        />
                        <Input
                            name='entry'
                            placeholder='0.00'
                            bottomBreak register={register}
                            error={errors.entry?.message}
                        >
                            Entry Price
                        </Input>
                        <TextArea
                            name='description'
                            labelText='Description'
                            register={register}
                            error={errors.description?.message}
                        />
                        <Button
                            color='primary'
                            variant='contained'
                            emotion='margin-top: 15px;'
                            type='submit'
                            disabled={btnDisabled}
                        >
                            add new place
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default NewPlacePage