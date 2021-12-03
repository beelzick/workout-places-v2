import styles from './LeaveReview.module.css'
import ReviewRating from '../../../External/ReviewRating';
import Button from '../../../Button/Button'
import TextArea from '../../../Input/TextArea/TextArea';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {

}

const LeaveReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    return (
        <div className={styles.container}>
            <h2>Leave a Review</h2>
            <div className={styles.rate}>
                <ReviewRating size='large' />
            </div>
            <TextArea name='description' emotion='margin-top: 20px;' labelText='Review' register={register} />
            <Button color='primary' variant='contained'>
                submit
            </Button>
        </div>
    )
}

export default LeaveReview