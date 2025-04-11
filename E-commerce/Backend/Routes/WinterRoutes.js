// const express = require("express");
// const router = express.Router();

// router.get("/winter", (req, res) => {
//   const winter = [
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/HxskTQy0_59508c4300b54b5d9d88359725b5d1cf.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/siJHb5cn_c057fa3942814af6a69518ba08c6e1c9.png",
    
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/qz6lYblh_66f6c4b262344edd918c0284b15484fb.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/idfQiUc0_02a70c66d82040d9b9d0c6bad491ea70.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/Nu2e2Kt8_ffd035a2f446479a9ffde6db35bb4906.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/9mPqaUL3_81db2226481341789af513993a6c57e8.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/rBUH5NEm_c471020698ab4d7a9d685f2de625f96b.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/5UxqxODG_a2803dbf4dc64125bd8bff9e5c802882.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/6EJ47yEK_53d6ddc97dad4bf08b05fcc01568c4fb.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/bYeg9aQJ_2a915cabbb6f4fb7ae54c8dc1d60227a.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/QrSiaeDt_c985a27686bf48139177be9696c0e71c.png",
//     "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/ojiPnxmT_e1c69e4c593e4e049889dc3a462c8233.png",
//   ];
//   res.json(winter);
// });
// const winterItems = [
//   // Category 0 items
//   {
//     category: 0,
//     items: [
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21568972/2023/1/16/5cdd2513-db15-40ba-ad94-0661d2043db61673872297871GraffitiTealGreenOversizedT-Shirt1.jpg",
//         description: "Graffiti Oversized T-Shirt",
//         price: "Rs.25.99",
//         rating: 4.5,
//         discountedPrice: "Rs.499",
       
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24265106/2023/7/29/4c4dffb5-8683-42d6-b3f3-9cd6e069421c1690653424655AbstractLeopardBlueT-Shirt1.jpg",
//         description: "Leopard Blue T-Shirt",
//         price: "Rs.22.99",
//         rating: 4.2,
//         discountedPrice: "Rs.499",
        
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32053713/2024/12/23/a2cc507d-13b3-4d9b-ba11-a303ce14810a1734962319105SnitchMenSlimFitT-shirt1.jpg",
//         description: "Snitch Men Slim Fit T-Shirt",
//         price: "Rs.19.99",
//         rating: 4.7,
//         discountedPrice: "Rs.499",
       
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29197210/2024/4/25/3cf467b6-9eef-4493-81ce-b17540e97cd51714052747089SnitchMenPoloCollarSlimFitT-shirt1.jpg",
//         description: "Snitch Men Polo T-Shirt",
//         price: "Rs.27.49",
//         rating: 4.6,
//         discountedPrice: "Rs.499",
       
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29421872/2024/5/8/54e86b97-25f0-4cad-bfdf-0c162a8fd7451715163628458SnitchMenPoloCollarSlimFitT-shirt1.jpg",
//         description: "Snitch Men Slim T-Shirt",
//         price: "Rs.28.99",
//         rating: 4.3,
//         discountedPrice: "Rs.499",
        
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24099436/2023/7/19/2ea7e6fc-7450-4595-9b7a-c48a3b44b4501689776946188SnitchMenMustardYellowTypographyPoloCollarExtendedSleevesT-s5.jpg",
//         description: "Snitch Men Mustard T-Shirt",
//         price: "Rs.24.99",
//         rating: 4.4,
//         discountedPrice: "Rs.499",
        
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24545240/2023/8/18/4b65f649-0103-4912-a862-04e7766d47951692364031759SnitchMenBlackT-shirt1.jpg",
//         description: "Snitch Men Black T-Shirt",
//         price: "Rs.20.99",
//         rating: 4.1,
//         discountedPrice: "Rs.499",
       
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24092890/2024/1/2/5dd51418-3e6c-4915-b5f3-755b5ca9d2671704189614004-Snitch-Men-Black-Typography-Printed-Pockets-T-shirt-14517041-2.jpg",
//         description: "Snitch Men Pockets T-Shirt",
//         price: "Rs.26.99",
//         rating: 4.8,
//         discountedPrice: "Rs.499",
        
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24212578/2023/7/26/6a73a2fc-dae8-4e54-acf7-13c5b03b80e61690379131665SnitchMenCream-ColouredTypographyPrintedRawEdgeT-shirt1.jpg",
//         description: "Snitch Men Printed T-Shirt",
//         price: "Rs.29.99",
//         rating: 4.0,
//         discountedPrice: "Rs.499",
       
//       },
//       { 
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/10/38Ro3f6v_76fedf94f7f94f828081e90a63732b5e.jpg",
//         description: "Snitch Men Slim Fit T-Shirt",
//         price: "Rs.21.99",
//         rating: 4.5,
//         discountedPrice: "Rs.499",
       
//       },
//       {
//         imageUrl:
//           "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28666822/2024/4/4/6026618f-401e-4316-b93c-e15f3303c9a31712199346079SnitchMenPoloCollarAppliqueSlimFitT-shirt1.jpg",
//         description: "Snitch Men Polo Fit T-Shirt",
//         price: "Rs.23.99",
//         rating: 4.6,
//         discountedPrice: "Rs.499",
       
//       },
//     ]
//   },


// ];


// router.get("/winter/:winterId", (req, res) => {
//   const { winterId } = req.params; 
//   const winterIdInt = parseInt(winterId); // Convert to integer

//   if (winterIdInt >= 0 && winterIdInt < winterItems.length) {
//     res.json(winterItems[winterIdInt].items); // Return items of the selected category
//   } else {
//     res.status(404).json({ error: "Category not found" }); // Return 404 if category doesn't exist
//   }
// });

// module.exports = router;
// routes/winterRoutes.js
const express = require('express');
const router = express.Router();
const { getWinterImages, getWinterItemById } = require('../Controllers/WinterController');

// Route for getting winter images
router.get('/winter-images', getWinterImages);

// Route for getting winter items by category and item ID
router.get('/winter-items/:winterId/:itemId', getWinterItemById);

module.exports = router;

