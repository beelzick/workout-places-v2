import HomeContent from '../src/components/HomeContent/HomeContent/HomeContent'
import NavbarContainer from '../src/components/Navbar/NavbarContainer/NavbarContainer'
import NavbarContent from '../src/components/Navbar/NavbarContent/NavbarContent'
import NavRight from '../src/components/HomeContent/NavRight'
import Logo from '../src/components/Logo/Logo'
import NavbarRight from '../src/components/Navbar/NavbarRight/NavbarRight'

const Home = () => {
  return (
    <>
      <NavbarContainer home>
        <NavbarContent
          left={<Logo />}
          right={<NavbarRight color='white' variant='outlined' />}
        />
      </NavbarContainer>
      <HomeContent />
    </>
  )
}

export default Home