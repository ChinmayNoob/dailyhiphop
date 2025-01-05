import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import News from "../components/News"
import Screen from "../layouts/Screen"

const Home = () => {
  return (
    <Screen>
      <Contact />
      <Header />
      <News />
      <Footer />
    </Screen>
  )
}

export default Home
