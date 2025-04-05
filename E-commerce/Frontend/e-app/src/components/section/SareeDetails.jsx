// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useGlobalState } from '../../context/GlobalState';
// import Nav from '../Nav';
// import Footer from '../Footer';


// function SareeDetails({ dark, toggle }) {
//   const { state } = useGlobalState();
//   const { sareeId } = useParams(); // Get the saree ID from the URL
//   const [sareeimg, setSareeimg] = useState([]);

//   useEffect(() => {
//       // Fetch the saree details from the server if not in the global state
//       fetch(`http://localhost:8000/api/women/saree${sareeId}`)
//         .then(res => res.json())
//         .then(data => setSareeimg(data))
//         .catch(err => console.error('Error fetching saree details:', err));
//   }, [sareeId]);

//   // if (!saree) {
//   //   return <div className="text-center mt-20">Loading...</div>;
//   // }

//   const handleBuyNow = () => {
//     alert('Redirecting to payment gateway...');
//     // Implement payment gateway logic here
//   };

//   return (
//     <>
//       <Nav
//         showprofile={false}
//         showsearch={false}
//         showcontent={true}
//         dark={dark}
//         toggle={toggle}
//       />
//       <div className={`flex flex-col items-center lg:pt-28 pt-32 ${dark ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000 ease-in-out`}>
//         <div className="flex flex-col lg:flex-row gap-10 p-5">
//           {/* Image Section */}
//           {/* 
//            */}
//            {sareeimg.map((url, index) => (
//           <Link key={index} to={`/url/${index}`}>
//             <img
//               loading="lazy"
//               src={url}
//               className="md:h-[300px] h-[200px] object-contain cursor-pointer"
//             />
//           </Link>
//         ))}

//           {/* Details Section */}
//           <div className="flex-1 flex flex-col gap-5">
//             {/* <h1 className="text-2xl font-bold">{saree.}</h1> */}
//             {/* <p className="text-lg text-red-500 font-semibold">
//               ₹{saree.discountedPrice}
//             </p>
//             <p className="text-sm text-gray-500 line-through">
//               ₹{saree.price}
//             </p>
//             <p className="text-base">{saree.description}</p> */}
//             <button
//               onClick={handleBuyNow}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default SareeDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

function SareeDetails({ dark, toggle }) {
  const { sareeId } = useParams(); // Get the saree ID from the URL
  const [saree, setSaree] = useState(null);

  useEffect(() => {
    // Fetch the saree details based on sareeId
    fetch(`http://localhost:8000/api/women/saree/${sareeId}`)
      .then(res => res.json())
      .then(data => setSaree(data))
      .catch(err => console.error('Error fetching saree details:', err));
  }, [sareeId]);

  // if (!saree) {
  //   return <div className="text-center mt-20">Loading...</div>;
  // }

  return (
    <>
      <Nav showprofile={false} showsearch={false} showcontent={true} dark={dark} toggle={toggle} />
      <div className={`flex flex-col items-center lg:pt-28 pt-32 ${dark ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000 ease-in-out`}>
        <div className="flex flex-col lg:flex-row gap-10 p-5">
          {/* Image Section */}
          <div className="flex flex-col gap-5">
            <img
              loading="lazy"
              src={saree.imageurl}
              alt={saree.name}
              className="md:h-[400px] h-[300px] object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-2xl font-bold">{saree.name}</h1>
            <p className="text-lg text-red-500 font-semibold">₹{saree.discountedPrice}</p>
            <p className="text-sm text-gray-500 line-through">₹{saree.price}</p>
            <p className="text-base">{saree.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SareeDetails;
