import Navbar from "../components/navbar"
import Dashboard from "../components/dashboard"
import Modal from "../components/modal"
export default function Home() {
  return (
    <div className="h-screen w-full  bg-slate-300">
      <Navbar />
      <Dashboard />
    </div>
  )
}
