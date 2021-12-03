import styles from './DeleteDialog.module.css'
import Button from '../../../Button/Button'
import { useContext } from 'react'
import { DeleteDialogVisibleContext } from '../ShowPage'
import axios from 'axios'
import { CurrentPlaceContext } from '../../../../../pages/_app'
import { useRouter } from 'next/router'

interface Props {
    visible: boolean
}

const DeleteDialog = ({ visible }: Props) => {
    const { setDeleteDialogVisible } = useContext(DeleteDialogVisibleContext)
    const { currentPlace: { _id } } = useContext(CurrentPlaceContext)
    const router = useRouter()

    const handleCancelClick = () => {
        setDeleteDialogVisible(false)
    }

    const handleDeleteClick = async () => {
        const { data } = await axios.delete(`/api/places/${_id}`)
        if (data.success) {
            router.push('/places')
        }
    }

    return (
        <>
            {visible && (
                <div className={styles.container} role='dialog'>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <span className={styles.spn1}>Delete the place?</span>
                            <span className={styles.spn2}>It can't be undone</span>
                        </div>
                        <div className={styles.buttons}>
                            <Button
                                variant='contained'
                                color='secondary'
                                emotion='margin-right: 20px'
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </Button>
                            <Button variant='contained' color='primary' onClick={handleDeleteClick}>
                                delete
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteDialog