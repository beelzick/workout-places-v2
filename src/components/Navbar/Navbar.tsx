import NavbarContainer from './NavbarContainer/NavbarContainer'
import NavbarContent from './NavbarContent/NavbarContent'
import NavLeft from './NavbarContent/NavLeft/NavLeft'
import NavRight from './NavbarContent/NavRight/NavRight'

interface Props {
    home?: boolean
}

const Navbar = ({ home }: Props) => {
    return (
        <NavbarContainer home={home}>
            <NavbarContent
                left={<NavLeft />}
                right={<NavRight />}
            />
        </NavbarContainer>
    )
}

export default Navbar