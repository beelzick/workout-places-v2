import HomeContent from '../src/components/HomeContent/HomeContent/HomeContent'
import NavbarContainer from '../src/components/Navbar/NavbarContainer/NavbarContainer'
import NavbarContent from '../src/components/Navbar/NavbarContent/NavbarContent'
import NavRight from '../src/components/HomeContent/NavRightHome/NavRight'
import Logo from '../src/components/Logo/Logo'

const Home = () => {
  return (
    <>
      <NavbarContainer home>
        <NavbarContent
          left={<Logo />}
          right={<NavRight />}
        />
      </NavbarContainer>
      <HomeContent />
    </>
  )
}

export default Home