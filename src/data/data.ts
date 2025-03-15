export const about = {
    title: "About",
    preview: "At Ember & Sage, we bring together the warmth of rustic flavors with modern culinary artistry. From wood-fired dishes to hand-picked organic ingredients, every bite tells a story.",
    description: [
        "At Ember & Sage, we bring together the warmth of rustic flavors with modern culinary artistry. From wood-fired dishes to hand-picked organic ingredients, every bite tells a story.",
        "Our philosophy is rooted in quality, seasonality, and sustainability. We carefully source fresh, local ingredients and craft them into dishes that celebrate the beauty of simplicity while embracing bold, elevated flavors. Whether it’s our charcoal-seared steaks, handcrafted pastas, or fire-roasted vegetables, each plate is designed to highlight the richness of natural ingredients.",
        "The atmosphere at Ember & Sage is as inviting as the food itself. Exposed brick walls, reclaimed wood tables, soft lighting, and an open kitchen create an environment that is both refined and welcoming—perfect for a romantic evening, a casual gathering, or a special celebration.",
        "Every dish is made with intention, and every meal is an experience. Join us and discover a place where fire meets flavor, and every ingredient has a purpose.",
    ]
    // "At Ember & Sage, we bring together the warmth of rustic flavors with modern culinary artistry. From wood-fired dishes to hand-picked organic ingredients, every bite tells a story."
    // "\n\nOur philosophy is rooted in quality, seasonality, and sustainability. We carefully source fresh, local ingredients and craft them into dishes that celebrate the beauty of simplicity while embracing bold, elevated flavors. Whether it’s our charcoal-seared steaks, handcrafted pastas, or fire-roasted vegetables, each plate is designed to highlight the richness of natural ingredients."
    // "\n\nThe atmosphere at Ember & Sage is as inviting as the food itself. Exposed brick walls, reclaimed wood tables, soft lighting, and an open kitchen create an environment that is both refined and welcoming—perfect for a romantic evening, a casual gathering, or a special celebration."
    // "\n\nEvery dish is made with intention, and every meal is an experience. Join us and discover a place where fire meets flavor, and every ingredient has a purpose."
}

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
*/
export const menu = {
    starters: {
        heading: "Starters",
        description: "Light, flavorful, and shareable appetizers to awaken your palate.",
        dishes: [
            {
                id: 1,
                title: "Wood-Fired Sourdough & Truffle Butter",
                description: "House-made sourdough, fire-roasted with whipped truffle-infused butter.",
                price: "$9",
            },
            {
                id: 2,
                title: "Charred Brussels Sprouts & Smoked Maple Glaze",
                description: "Crispy sprouts, fire-roasted pecans, smoked maple reduction.",
                price: "$11",
            },
            {
                id: 3,
                title: "Burrata & Heirloom Tomato Salad",
                description: "Creamy burrata, basil oil, balsamic reduction, toasted pine nuts.",
                price: "$14",
            },
            {
                id: 4,
                title: "Roasted Bone Marrow & Garlic Crostini",
                description: "Slow-roasted marrow, herb gremolata, sea salt, toasted crostini.",
                price: "$18",
            },
            {
                id: 5,
                title: "Ember-Spiced Lamb Meatballs",
                description: "Grass-fed lamb, saffron yogurt, charred eggplant puree.",
                price: "$15",
            },
        ]
    },
    /*🔥 Mains
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

Blackened Aged T-Bone Steak (16oz) – $56
Dry-aged for 28 days, house chimichurri, grilled asparagus.

    */
    mains: {
        heading: "Mains",
        description: "Signature dishes, slow-cooked over an open flame for deep, smoky flavors.",
        specialties: {
            heading: "Wood-Fired Specialties",
            dishes: [
                {
                    id: 1,
                    title: "Ember-Grilled Wagyu Ribeye (12oz)",
                    description: "Charred to perfection, herb butter, roasted garlic mashed potatoes.",
                    price: "$48",
                },
                {
                    id: 2,
                    title: "Cedar-Plank Salmon & Lemon Dill Butter",
                    description: "Sustainably sourced salmon, honey glaze, wild rice pilaf.",
                    price: "$32",
                },
                {
                    id: 3,
                    title: "Charcoal-Seared Duck Breast & Fig Gastrique",
                    description: "Crispy skin, confit potatoes, caramelized fennel.",
                    price: "$36",
                },
                {
                    id: 4,
                    title: "Fire-Roasted Eggplant & Smoky Harissa (Vegan)",
                    description: "Grilled eggplant, chickpea puree, charred tomatoes, tahini drizzle.",
                    price: "$24",
                },
                {
                    id: 5,
                    title: "Blackened Aged T-Bone Steak (16oz)",
                    description: "Dry-aged for 28 days, house chimichurri, grilled asparagus.",
                    price: "$56",
                },
            ]
        },
        /*🍝 Handcrafted Pastas
Truffle & Wild Mushroom Tagliatelle – $28
Creamy black truffle sauce, parmesan, fresh herbs.

Lobster & Saffron Risotto – $34
Butter-poached lobster tail, saffron-infused arborio rice.

Smoked Short Rib Pappardelle – $30
Slow-braised short rib, roasted tomato sauce, pecorino romano.

Charred Pesto Gnocchi & Fire-Roasted Peppers – $26
House-made gnocchi, smoked almond pesto, roasted peppers. */
        pasta: {
            heading: "Handcrafted Pastas",
            dishes: [
                {
                    id: 1,
                    title: "Truffle & Wild Mushroom Tagliatelle",
                    description: "Creamy black truffle sauce, parmesan, fresh herbs.",
                    price: "$28",
                },
                {
                    id: 2,
                    title: "Lobster & Saffron Risotto",
                    description: "Butter-poached lobster tail, saffron-infused arborio rice.",
                    price: "$34",
                },
                {
                    id: 3,
                    title: "Smoked Short Rib Pappardelle",
                    description: "Slow-braised short rib, roasted tomato sauce, pecorino romano.",
                    price: "$30",
                },
                {
                    id: 4,
                    title: "Charred Pesto Gnocchi & Fire-Roasted Peppers",
                    description: "House-made gnocchi, smoked almond pesto, roasted peppers.",
                    price: "$26",
                },
            ]
        },
    },
    /*
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
    desserts: {
        heading: "Desserts",
        description: "Handmade, decadent treats to end your meal perfectly.",
        dishes: [
            {
                id: 1,
                title: "Wood-Fired Chocolate Lava Cake",
                description: "Dark chocolate, espresso caramel, vanilla bean ice cream.",
                price: "$12",
            },
            {
                id: 2,
                title: "Smoked Vanilla Bean Crème Brûlée",
                description: "House-smoked vanilla pods, caramelized sugar crust.",
                price: "$10",
            },
            {
                id: 3,
                title: "Honey & Thyme Cheesecake",
                description: "Creamy cheesecake, local honey drizzle, toasted walnuts.",
                price: "$14",
            },
            {
                id: 4,
                title: "Campfire S’mores Tart",
                description: "Graham cracker crust, torched marshmallow, dark chocolate ganache.",
                price: "$13",
            },
        ]
    },
}

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