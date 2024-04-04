import Header from "./Header"
import Mid from "./MidSection/Mid"

const LeftNav = () => {
  return (
    <div className="w-[25%] bg-white border-2 border-slate-300 p-5 space-y-8">
        <Header />
        <Mid />
    </div>
  )
}

export default LeftNav