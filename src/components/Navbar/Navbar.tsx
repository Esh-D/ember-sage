import './Navbar.css'
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="bg-[#F8F8F8] shadow-md p-4 fixed w-full top-0">
            <div className="container mx-auto flex flex-col justify-center items-center gap-5">
                <h2 className="text-[#333333] font-bold">Ember & Sage</h2>
                <div className="space-x-6">
                    <ul className="flex flex-row flex-wrap gap-30">
                        <li>
                            <Link to="/ember-sage"><div className="text-[#333333] hover:text-[#D9531E]">Home</div></Link>
                        </li>
                        <li>
                            <Link to="/ember-sage/menu"><div className="text-[#333333] hover:text-[#D9531E]">Menu</div></Link>
                        </li>
                        <li>
                            <Link to="/ember-sage/about"><div className="text-[#333333] hover:text-[#D9531E]">About</div></Link>
                        </li>
                        {/* <li>
                            <Link to="/contact"><div className="text-[#333333] hover:text-[#D9531E]">Contact</div></Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar