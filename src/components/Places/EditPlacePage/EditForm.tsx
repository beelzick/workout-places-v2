import Input from '../../Input/Input'
import TextArea from '../../Input/TextArea/TextArea'
import Button from '../../Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useContext } from 'react'
import { CurrentPlaceContext } from '../../../../pages/_app'
import { BtnDisabledContext } from './EditPlacePage'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { editPlaceSchema } from '../../../helpers/yup'

const EditForm = () => {
    const { currentPlace: { _id, location, name, entry, description } } = useContext(CurrentPlaceContext)
    const { btnDisabled, setBtnDisabled } = useContext(BtnDisabledContext)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(editPlaceSchema)
    })
    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setBtnDisabled(true)
        toast.promise(
            axios.patch(`/api/places/${_id}`, {
                ...data
            }),
            {
                pending: 'Pending',
                success: 'Place successfully edited 👌',
                error: 'Couldn\'t edit place 🤯'
            }
        )
        router.back()
        setBtnDisabled(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                name='name'
                register={register}
                placeholder='Place Name'
                bottomBreak
                defaultValue={name}
                error={errors.name?.message}
            >
                Place Name
            </Input>
            <Input
                name='location'
                register={register}
                placeholder='Place Location'
                bottomBreak
                defaultValue={location}
                error={errors.location?.message}
            >
                Location
            </Input>
            <Input
                name='entry'
                placeholder='0.00'
                bottomBreak
                register={register}
                defaultValue={entry}
                error={errors.entry?.message}
            >
                Entry Price
            </Input>
            <TextArea
                name='description'
                labelText='Description'
                register={register}
                defaultValue={description}
                error={errors.description?.message}
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
    )
}

export default EditForm