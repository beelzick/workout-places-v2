import Container from '../../Container/Container'
import styles from '../Form.module.css'
import { toast } from 'react-toastify'
import { useUser } from '@auth0/nextjs-auth0';
import { userId } from '../../../helpers/general'
import { useContext, useState, useEffect, createContext, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { CurrentPlaceContext } from '../../../../pages/_app'
import EditForm from './EditForm';

interface BtnDisabledContextType {
    btnDisabled: boolean,
    setBtnDisabled: Dispatch<SetStateAction<boolean>>
}

export const BtnDisabledContext = createContext<BtnDisabledContextType>({
    btnDisabled: false,
    setBtnDisabled: () => { }
})

const EditPlacePage = () => {
    const { user } = useUser()
    const { currentPlace: { _id, author } } = useContext(CurrentPlaceContext)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const router = useRouter()
    const value = { btnDisabled, setBtnDisabled }

    useEffect(() => {
        if (!_id || author !== userId(user!.sub!)) {
            toast.error('You are not allowed to edit this place')
            router.push(`/places/${router.query.placeId}`)
            setBtnDisabled(true)
        }
    }, [_id, router, author, user])

    return (
        <BtnDisabledContext.Provider value={value}>
            <div className={styles.container}>
                <Container column alignItems='center'>
                    <div className={styles.content}>
                        <h1>Edit Place</h1>
                        <EditForm />
                    </div>
                </Container>
            </div>
        </BtnDisabledContext.Provider>
    )
}

export default EditPlacePage