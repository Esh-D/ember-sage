import './About.css'
import { about } from "../../data/data.ts"
import Navbar from '../../components/Navbar/Navbar.tsx'
import Footer from '../../components/Footer/Footer.tsx'

function About() {
    return (
        // <section className="h-screen flex flex-col justify-center items-center text-center px-6"> #FAF3E0
        <>
            <Navbar />
            <section className="mt-16 h-screen flex flex-col justify-start items-center text-center px-4 bg-cover bg-center bg-[#FAF3E0] overflow-hidden">
            {/* <section className="h-screen flex flex-col justify-start items-center text-center px-4 bg-cover bg-center bg-[#D9531E] overflow-hidden"> */}
            {/* <section className="h-screen flex flex-col justify-start items-center text-center px-4 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] overflow-hidden"> */}
                {/* <h1 className="text-3xl font-bold">About</h1> */}
                <h1 className="mt-20 text-4xl text-[#D9531E]">About</h1>
                <p className="max-w-3xl mt-10 text-lg text-[#333333]">
                    {about.description.map((line) => (
                        <p className="my-6">{line}</p>
                    ))}
                </p>
                {/* Story, Chef Spotlight, Sustainability Practices */}
            </section>
            <Footer />
        </>
    )
}
/* sage green: #A4B494 */
/* burnt orange: #D9531E */
{/* <img src="https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="patio" /> */}


export default About