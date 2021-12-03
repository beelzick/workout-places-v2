import Container from '../../Container/Container'
import styles from './EditPlacePage.module.css'
import Input from '../../Input/Input'
import TextArea from '../../Input/TextArea/TextArea'
import Button from '../../Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0';
import { userId } from '../../../helpers/general'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CurrentPlaceContext } from '../../../../pages/_app'

interface Inputs {

}


const EditPlacePage = () => {
    const { user, error, isLoading } = useUser()
    const { currentPlace: { _id, location, name, entry, description } } = useContext(CurrentPlaceContext)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [btnDisabled, setBtnDisabled] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!_id) {
            router.push(`/places/${router.query.placeId}`)
            setBtnDisabled(true)
        }
    }, [_id, router])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setBtnDisabled(true)
        await axios.patch(`/api/places/${_id}`, {
            ...data
        })
        router.push(`/places/${router.query.placeId}`)
        setBtnDisabled(false)
    }

    return (
        <div className={styles.container}>
            <Container column alignItems='center'>
                <div className={styles.content}>
                    <h1>Edit Place</h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Input
                            name='name'
                            register={register}
                            placeholder='Place Name'
                            bottomBreak
                            defaultValue={name}
                        >
                            Place Name
                        </Input>
                        <Input
                            name='location'
                            register={register}
                            placeholder='Place Name'
                            bottomBreak
                            defaultValue={location}
                        >
                            Location
                        </Input>
                        <Input
                            name='entry'
                            placeholder='0.00'
                            bottomBreak
                            register={register}
                            defaultValue={entry}
                        >
                            Entry Price
                        </Input>
                        <TextArea
                            name='description'
                            labelText='Description'
                            register={register}
                            defaultValue={description}
                        />
                        <Button
                            color='primary'
                            variant='contained'
                            emotion='margin-top: 15px;'
                            type='submit'
                            disabled={btnDisabled}
                        >
                            confirm
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default EditPlacePage