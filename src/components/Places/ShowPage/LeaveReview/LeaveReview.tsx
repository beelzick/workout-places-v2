import styles from './LeaveReview.module.css'
import Button from '../../../Button/Button'
import TextArea from '../../../Input/TextArea/TextArea'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import Rate from 'rc-rate';
import { reviewSchema } from '../../../../helpers/yup'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CurrentPlaceContext } from '../../../../../pages/_app'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

const LeaveReview = () => {
    const { currentPlace: { _id } } = useContext(CurrentPlaceContext)
    const [formDisabled, setFormDisabled] = useState(false)
    const { isLoading, user } = useUser()
    const [rating, setRating] = useState(0)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(reviewSchema)
    })

    useEffect(() => {
        if (!user || isLoading) {
            setFormDisabled(true)
        } else if (user && !isLoading) {
            setFormDisabled(false)
        }
    }, [user, isLoading])

    const onSubmit: SubmitHandler<Inputs> = async ({ description }) => {
        setFormDisabled(true)
        toast.promise(
            axios.post(`/api/places/${_id}/reviews`, {
                description,
                rating
            }),
            {
                pending: 'Pending',
                success: 'Review successfully added 👌',
                error: 'Couldn\'t add a review 🤯'
            }
        )
        router.reload()
    }

    const handleChange = (value: number) => {
        setRating(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{formDisabled ? 'Sign in to add a review' : 'Leave a review'}</h2>
                <div className={styles.rate}>
                    <Rate onChange={handleChange} disabled={formDisabled} />
                </div>
                <TextArea
                    name='description'
                    emotion='margin-top: 20px;'
                    labelText='Review'
                    register={register}
                    error={errors.description?.message}
                    disabled={formDisabled}
                />
                <Button color='primary' variant='contained' disabled={formDisabled}>
                    submit
                </Button>
            </form>
        </div>
    )
}

export default LeaveReview