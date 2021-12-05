import styles from './LeaveReview.module.css'
import Button from '../../../Button/Button'
import TextArea from '../../../Input/TextArea/TextArea'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import Rate from 'rc-rate';
import { reviewSchema } from '../../../../helpers/yup'
import { useContext, useState } from 'react'
import axios from 'axios'
import { CurrentPlaceContext } from '../../../../../pages/_app'
interface Inputs {
    description: string
}

const LeaveReview = () => {
    const { currentPlace: { _id } } = useContext(CurrentPlaceContext)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(reviewSchema)
    })
    const [rating, setRating] = useState(0)

    const onSubmit: SubmitHandler<Inputs> = async ({ description }) => {
        axios.post(`/api/places/${_id}/reviews`, {
            description,
            rating
        })
    }

    const handleChange = (value: number) => {
        setRating(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Leave a Review</h2>
                <div className={styles.rate}>
                    <Rate onChange={handleChange} />
                </div>
                <TextArea
                    name='description'
                    emotion='margin-top: 20px;'
                    labelText='Review'
                    register={register}
                    error={errors.description?.message}
                />
                <Button color='primary' variant='contained'>
                    submit
                </Button>
            </form>
        </div>
    )
}

export default LeaveReview