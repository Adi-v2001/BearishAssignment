import LeftNav from "./LeftNav/LeftNav"
import Navbar from "./Navbar/Navbar"

const Home = () => {
  return (
    <div className="bg-slate-200 h-screen flex">
        <LeftNav/>
        <Navbar />
    </div>
  )
}

export default Home