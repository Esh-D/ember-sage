import { Link } from "react-router";

const Home = () => {
  const featured = [
    { id: 1, name: "Ember-Spiced Lamb Meatballs", description: "Grass-fed lamb, saffron yogurt, charred eggplant puree.", price: "$15", image: "https://plus.unsplash.com/premium_photo-1693879091399-26306c10b9a4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { id: 2, name: "Fire-Roasted Butternut Squash & Parmesan Penne", description: "Penne tossed in a velvety roasted butternut squash and red pepper sauce.", price: "$29", image: "https://plus.unsplash.com/premium_photo-1678897726296-70dce083158d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Cedar-Plank Salmon & Lemon Dill Butter", description: "Sustainably sourced salmon, honey glaze, wild rice pilaf.", price: "$32", image: "https://images.unsplash.com/photo-1587589437160-26afe5880241?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const reviews = [
    { 
      id: 1, 
      name: "Sophia L.", 
      stars: "⭐⭐⭐⭐⭐", 
      comment: "Absolutely phenomenal! The Wagyu Ribeye was perfectly cooked, and the ambiance made the evening special.", 
      image: "" 
    },
    { 
      id: 2, 
      name: "James R.", 
      stars: "⭐⭐⭐⭐⭐", 
      comment: "The Fire-Roasted Butternut Squash Penne was a game changer! Creamy, rich, and full of flavor.", 
      image: ""
    },
    { 
      id: 3, 
      name: "Emma D.", 
      stars: "⭐⭐⭐⭐⭐", 
      comment: "Best dining experience in town! The atmosphere is warm, and the Smoked Short Rib Pappardelle was unforgettable.", 
      image: ""
    }
  ];

  const about = {
    title: "About",
    preview: "At Ember & Sage, we bring together the warmth of rustic flavors with modern culinary artistry. From wood-fired dishes to hand-picked organic ingredients, every bite tells a story.",
    description: "At Ember & Sage, we bring together the warmth of rustic flavors with modern culinary artistry. From wood-fired dishes to hand-picked organic ingredients, every bite tells a story.\nOur philosophy is rooted in quality, seasonality, and sustainability. We carefully source fresh, local ingredients and craft them into dishes that celebrate the beauty of simplicity while embracing bold, elevated flavors. Whether it’s our charcoal-seared steaks, handcrafted pastas, or fire-roasted vegetables, each plate is designed to highlight the richness of natural ingredients.\nThe atmosphere at Ember & Sage is as inviting as the food itself. Exposed brick walls, reclaimed wood tables, soft lighting, and an open kitchen create an environment that is both refined and welcoming—perfect for a romantic evening, a casual gathering, or a special celebration.\nEvery dish is made with intention, and every meal is an experience. Join us and discover a place where fire meets flavor, and every ingredient has a purpose."
  }

  return (
    <>
    {/* Hero section */} {/* bg-[#D9531E] */}
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-[url(https://images.unsplash.com/photo-1671044157944-9d949e347394?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <h1 className="text-4xl text-[#FAF3E0]">Welcome to Ember & Sage</h1>
      <p className="text-xl mt-3 text-[#333333] w-120 text-wrap">Where every meal is an experience, crafted with passion and locally sourced ingredients.</p>
      <Link to="/menu" className="mt-6 mb-30 px-6 py-2 bg-[#333333] rounded-md hover:bg-[#A4B494]"><div className="text-white">View Menu</div></Link>
    </section>
    {/* Featured Dishes */}
    <section className="h-screen flex flex-col justify-start items-center text-center px-4 bg-[#FAF3E0]">
      <h1 className="mt-20 text-4xl text-[#333333]">Featured Dishes</h1>

      <div className="mt-20 flex flex-row flex-wrap gap-10">
        {featured.map((dish) => (
          <div key={dish.id} className="overflow-hidden w-90 h-95 rounded-lg hover:shadow-xl transition p-4">
            <img className="rounded-lg w-full h-50 object-cover cursor-pointer" src={dish.image} alt="dish image" />
            <p className="mt-6 text-[#D9531E]">{dish.name}</p>
            <p className="text-[#333333]">{dish.description}</p>
            <p className="text-[#333333]">{dish.price}</p>
          </div>
        ))}
      </div>
      {/* <p className="text-xl mt-3">Grid Items / Cards (3-4)</p> */}
    </section>
    {/* About Teaser */}
    <section className="h-[50%] py-22 flex flex-col justify-center items-center text-center px-100 bg-[#A4B494]">
      <h1 className=" text-4xl text-[#333333]">{about.title}</h1>
      <p className="text-xl mt-10 text-[#FAF3E0]">{about.preview}</p>
      <Link to="/about" className="mt-6 px-6 py-2 bg-[#D9531E] rounded-md hover:bg-[#333333]"><div className="text-white">Learn More</div></Link>
    </section>
    {/* Customer Reviews */}
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[#FAF3E0]">
      <h1 className="text-4xl text-[#333333]">Customer Reviews</h1>
      {/* a star */}
      {/* <div className="rounded-lg w-3 h-3 bg-[#D9531E]"></div> a star */}
      {/* <p className="text-[#333333]">Customer Name</p> */}

      <div className="mt-20 flex flex-row flex-wrap gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="overflow-hidden w-90 h-60 p-4 rounded-sm hover:shadow-xl transition">
            <p className="mt-10 text-[#D9531E]">{review.name}</p>
            <p className="mt-1">{review.stars}</p>
            <p className="mt-2 text-[#333333]">{review.comment}</p>
          </div>
        ))}
      </div>
      {/* <p className="text-xl mt-3">Carousel or Cards (3-4)</p> */}
    </section>
    </>
  );
};

export default Home;


/*
Component 	        Description
Navbar.tsx  	      Navigation bar with links
Hero.tsx	          Hero section with welcome message & CTA
FeaturedDishes.tsx	Grid of popular dishes
AboutTeaser.tsx	    Short introduction with "Learn More" button
Reviews.tsx	        Testimonials carousel
MenuCategory.tsx	  Tabs for different menu sections
MenuItem.tsx	      Individual dish display
Footer.tsx	        Contact info, social media links
*/