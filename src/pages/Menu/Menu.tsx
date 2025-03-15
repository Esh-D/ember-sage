import "./Menu.css"
import { Link } from "react-router";
import { menu } from "../../data/data"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// h-screen
function Menu() {
    return (
        <>
            {/* Menu Header */} 
            <Navbar />
            <section className="mt-16 flex flex-col justify-start items-center items-center text-center overflow-hidden bg-[#FAF3E0]">
                {/* <div className="w-[70%] h-[30%] bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1504718855392-c0f33b372e72?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div> */}
                {/* <div className="w-full h-[30%]">
                    <img className="m-auto object-fit" src="https://images.unsplash.com/photo-1504718855392-c0f33b372e72?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="restaurant lights" />
                </div> */}
                <div className="w-full h-full bg-[#FAF3E0]">
                    <h1 className="mt-20 text-4xl text-[#D9531E] mb-2">Menu</h1>
                    <p className="text-[#333333]">Take a look at our fine selection of dishes.</p>
                    
                    {/* <p className="mt-2 text-[#333333]"> */}
                    {/* Starters */}
                    <h2 className="mt-16 text-4xl text-[#D9531E] mb-2">{menu.starters.heading}</h2>
                    <p className="text-[#333333] mb-4">{menu.starters.description}</p>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-80">
                        {menu.starters.dishes.map((dish) => (
                            <div className="flex flex-col flex-wrap justify-start items-center mx-10 gap-2">
                                <h2 className="mt-6 text-[#D9531E]">{dish.title}</h2>
                                <p className="text-[#333333]">{dish.description}</p>
                                <p className="text-[#333333]">{dish.price}</p>
                            </div>
                        ))}
                    </div>
                    {/* </p> */}

                    {/* Mains */}
                    <h2 className="mt-16 text-4xl text-[#D9531E] mb-2">{menu.mains.heading}</h2>
                    <p className="text-[#333333] mb-4">{menu.mains.description}</p>
                    
                    <h3 className="mt-12 text-2xl text-[#D9531E] mb-4">{menu.mains.specialties.heading}</h3>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-80">
                        {menu.mains.specialties.dishes.map((dish) => (
                            <div className="flex flex-col flex-wrap justify-start items-center mx-10 gap-2">
                                <h2 className="mt-6 text-[#D9531E]">{dish.title}</h2>
                                <p className="text-[#333333]">{dish.description}</p>
                                <p className="text-[#333333]">{dish.price}</p>
                            </div>
                        ))}
                    </div>
            
                    <h3 className="mt-12 text-2xl text-[#D9531E] mb-4">{menu.mains.pasta.heading}</h3>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-80">
                        {menu.mains.pasta.dishes.map((dish) => (
                            <div className="flex flex-col flex-wrap justify-start items-center mx-10 gap-2 my-0">
                                <h2 className="mt-6 text-[#D9531E]">{dish.title}</h2>
                                <p className="text-[#333333]">{dish.description}</p>
                                <p className="text-[#333333]">{dish.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desserts */}
                    <h2 className="mt-16 text-4xl text-[#D9531E] mb-2">{menu.desserts.heading}</h2>
                    <p className="text-[#333333] mb-4">{menu.desserts.description}</p>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-80 mb-22">
                        {menu.desserts.dishes.map((dish) => (
                            <div className="flex flex-col flex-wrap justify-start items-center mx-10 gap-2">
                                <h2 className="mt-6 text-[#D9531E]">{dish.title}</h2>
                                <p className="text-[#333333]">{dish.description}</p>
                                <p className="text-[#333333]">{dish.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
                
                {/* <Link to="/menu" className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-700">Reserve Table</Link> */}
                {/* <Link to="/menu" className="mt-6 mb-30 px-6 py-2 bg-[#333333] rounded-md hover:bg-[#A4B494]"><div className="text-white">Reserve Table</div></Link> */}

            </section>
            {/* Menu categories (Tabs: Starters | Mains | Desserts) */}
            {/* MENU GRID (Images, Dish Name, Description, Price) */}
            {/* CTA (Reserve Table Button) */}
            <Footer />
        </>
    )
}

export default Menu;


/*
🥗 Starters
Light, flavorful, and shareable appetizers to awaken your palate.

Wood-Fired Sourdough & Truffle Butter – $9
House-made sourdough, fire-roasted with whipped truffle-infused butter.
Charred Brussels Sprouts & Smoked Maple Glaze – $11
Crispy sprouts, fire-roasted pecans, smoked maple reduction.
Burrata & Heirloom Tomato Salad – $14
Creamy burrata, basil oil, balsamic reduction, toasted pine nuts.
Roasted Bone Marrow & Garlic Crostini – $18
Slow-roasted marrow, herb gremolata, sea salt, toasted crostini.
Ember-Spiced Lamb Meatballs – $15
Grass-fed lamb, saffron yogurt, charred eggplant puree.
🔥 Mains
Signature dishes, slow-cooked over an open flame for deep, smoky flavors.

🥩 Wood-Fired Specialties
Ember-Grilled Wagyu Ribeye (12oz) – $48
Charred to perfection, herb butter, roasted garlic mashed potatoes.
Cedar-Plank Salmon & Lemon Dill Butter – $32
Sustainably sourced salmon, honey glaze, wild rice pilaf.
Charcoal-Seared Duck Breast & Fig Gastrique – $36
Crispy skin, confit potatoes, caramelized fennel.
Fire-Roasted Eggplant & Smoky Harissa (Vegan) – $24
Grilled eggplant, chickpea puree, charred tomatoes, tahini drizzle.
Blackened Aged T-Bone Steak (16oz) – $55
Dry-aged for 28 days, house chimichurri, grilled asparagus.
🍝 Handcrafted Pastas
Truffle & Wild Mushroom Tagliatelle – $28
Creamy black truffle sauce, parmesan, fresh herbs.
Lobster & Saffron Risotto – $34
Butter-poached lobster tail, saffron-infused arborio rice.
Smoked Short Rib Pappardelle – $30
Slow-braised short rib, roasted tomato sauce, pecorino romano.
Charred Pesto Gnocchi & Fire-Roasted Peppers – $26
House-made gnocchi, smoked almond pesto, roasted peppers.
🍮 Desserts
Handmade, decadent treats to end your meal perfectly.

Wood-Fired Chocolate Lava Cake – $12
Dark chocolate, espresso caramel, vanilla bean ice cream.
Smoked Vanilla Bean Crème Brûlée – $10
House-smoked vanilla pods, caramelized sugar crust.
Honey & Thyme Cheesecake – $14
Creamy cheesecake, local honey drizzle, toasted walnuts.
Campfire S’mores Tart – $13
Graham cracker crust, torched marshmallow, dark chocolate ganache.
*/