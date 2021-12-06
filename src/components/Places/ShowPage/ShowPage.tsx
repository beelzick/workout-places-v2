import styles from './ShowPage.module.css'
import PlaceShowCard from './PlaceShowCard/PlaceShowCard'
import ShowPageMap from './ShowPageMap/ShowPageMap'
import LeaveReview from './LeaveReview/LeaveReview'
import Container from '../../Container/Container'
import DeleteDialog from './DeleteDialog/DeleteDialog'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface DeleteDialogType {
    deleteDialogVisible: boolean,
    setDeleteDialogVisible: Dispatch<SetStateAction<boolean>>
}

export const DeleteDialogVisibleContext = createContext<DeleteDialogType>({
    deleteDialogVisible: false,
    setDeleteDialogVisible: () => { }
})

const ShowPage = ({ place }: { place: Place }) => {
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false)
    const value = { deleteDialogVisible, setDeleteDialogVisible }
    return (
        <DeleteDialogVisibleContext.Provider value={value}>
            <div className={styles.pageContainer}>
                <Container>
                    <div className={styles.contentPart}>
                        <PlaceShowCard place={place} />
                    </div>
                    <div className={styles.contentPart}>
                        <ShowPageMap place={place} />
                        <LeaveReview />
                    </div>
                </Container>
                <DeleteDialog visible={deleteDialogVisible} />
                <div className={styles.reviews}>
                    dsads dasas asdasd
                </div>
            </div>
        </DeleteDialogVisibleContext.Provider>
    )
}

export default ShowPage