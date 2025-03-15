import './Footer.css'

function Footer() {
    return (
        // FOOTER (Socials, Contact Info, Hours)
        <footer className="text-white text-center p-4 bg-[#333333]">
            <div className="text-[#FAF3E0] flex flex-row justify-around mx-40">
                <div className="flex flex-col justify-start items-start gap-5 my-8">
                    <h2 className="mb-2">Location</h2>
                    {/* Address */}
                    <div className="flex flex-col items-start">
                        <p>456 Maple Street, Suite 101</p>
                        <p>Foodville, ON L4B 9T8</p>
                        <p>Canada</p>
                    </div>

                    <h2 className="mb-2 mt-4">Hours</h2>
                    {/* Hours */}
                    <div className="flex flex-col items-start">
                        <p>Monday to Friday 11:00am - 9:00pm</p>
                        <p>Saturday and Sunday - Closed</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-5 my-8">
                    <h2>Contact</h2>
                    {/* Phone Number */}
                    <div className="flex flex-col items-start">
                        <p>123-456-7891</p>
                        <p>contact@embersage.com</p>

                        {/* Social Links  */}
                        <div className="flex flex-row flex-wrap gap-2">
                            <div className="text-[#A4B494] hover:text-[#D9531E] cursor-pointer">Instagram</div>
                            <div className="text-[#FAF3E0]">|</div>
                            <div className="text-[#A4B494] hover:text-[#D9531E] cursor-pointer">Facebook</div>
                            <div className="text-[#FAF3E0]">|</div>
                            <div className="text-[#A4B494] hover:text-[#D9531E] cursor-pointer">X</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;