const express = require("express");
const router = express.Router();

router.get("/category", (req, res) => {
  const category = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/SEPTEMBER/10/eRJfM3xa_1069046ccbcd4370ad227d2cf910f488.png",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/12/958b4bea-3676-481e-9f8c-420b3e4dd4981726130495870-image_png_1989492659.png",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/12/391b32a3-30ac-4a23-974b-f01a754875ae1726130482495-image_png_2125590105.png",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/6c004d2f-b171-418e-b734-d550462472851727013399326-image_png1644959701.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/12/d0aeeefb-c287-4aad-b014-04b4bc8c27c01726130040026-image_png_187885943.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/eb313e7b-9af9-49c2-a688-3a11beea92161726998533098-image_png1051586362.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/12/08b0b89a-8fca-494a-9efe-e1705bc2f10a1726130408450-image_png222705097.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/66f3815c-9aba-4a1c-9f3a-dd927dd18c6d1726998562852-image_png_1609082105.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/SEPTEMBER/10/mJmKnGax_dfbe131e7c5e4136a37d103ed2510976.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/19c0b8de-5128-4f82-a0e1-980ed74a6f991727013311173-image_png935227473.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/35d93c90-4d0e-4f38-9224-bd4d81859d791727013275841-image_png1211326206.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/719c4665-b413-421e-bb96-d309a27a27631727013293025-image_png_292616172.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/12/2e1d02e4-2d94-4894-938f-c1c5f37ab8ee1726130786596-image_png_1779874677.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/b8c0bea9-3988-4638-8cd5-ba0bf5d031121727013258469-image_png_1955436346.png",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/12/057a64eb-f57d-4bbf-a6c0-3c3f7f1ba99c1726130422406-image_png_1312734185.png",
  ];
  res.json(category);
});

// 
const categoryItems = [
  // Category 0 items
  {
    category: 0,
    items: [
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21568972/2023/1/16/5cdd2513-db15-40ba-ad94-0661d2043db61673872297871GraffitiTealGreenOversizedT-Shirt1.jpg",
        description: "Graffiti Oversized T-Shirt",
        price: "Rs.25.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Brand A",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Teal Green"],
        videoUrl:'https://videos.pexels.com/video-files/7475682/7475682-sd_640_360_25fps.mp4'
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24265106/2023/7/29/4c4dffb5-8683-42d6-b3f3-9cd6e069421c1690653424655AbstractLeopardBlueT-Shirt1.jpg",
        description: "Leopard Blue T-Shirt",
        price: "Rs.22.99",
        rating: 4.2,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Brand B",
        material: "Cotton",
        size: ["S", "M", "L"],
        color: ["Blue", "Leopard Print"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32053713/2024/12/23/a2cc507d-13b3-4d9b-ba11-a303ce14810a1734962319105SnitchMenSlimFitT-shirt1.jpg",
        description: "Snitch Men Slim Fit T-Shirt",
        price: "Rs.19.99",
        rating: 4.7,
        discountedPrice: "Rs.499",
        availability: "Out of Stock",
        brand: "Snitch",
        material: "Polyester",
        size: ["M", "L", "XL"],
        color: ["Black", "White"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29197210/2024/4/25/3cf467b6-9eef-4493-81ce-b17540e97cd51714052747089SnitchMenPoloCollarSlimFitT-shirt1.jpg",
        description: "Snitch Men Polo T-Shirt",
        price: "Rs.27.49",
        rating: 4.6,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Navy Blue", "White"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29421872/2024/5/8/54e86b97-25f0-4cad-bfdf-0c162a8fd7451715163628458SnitchMenPoloCollarSlimFitT-shirt1.jpg",
        description: "Snitch Men Slim T-Shirt",
        price: "Rs.28.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Black", "White"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24099436/2023/7/19/2ea7e6fc-7450-4595-9b7a-c48a3b44b4501689776946188SnitchMenMustardYellowTypographyPoloCollarExtendedSleevesT-s5.jpg",
        description: "Snitch Men Mustard T-Shirt",
        price: "Rs.24.99",
        rating: 4.4,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Mustard Yellow"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24545240/2023/8/18/4b65f649-0103-4912-a862-04e7766d47951692364031759SnitchMenBlackT-shirt1.jpg",
        description: "Snitch Men Black T-Shirt",
        price: "Rs.20.99",
        rating: 4.1,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Black"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24092890/2024/1/2/5dd51418-3e6c-4915-b5f3-755b5ca9d2671704189614004-Snitch-Men-Black-Typography-Printed-Pockets-T-shirt-14517041-2.jpg",
        description: "Snitch Men Pockets T-Shirt",
        price: "Rs.26.99",
        rating: 4.8,
        discountedPrice: "Rs.499",
        availability: "Out of Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["S", "M", "L"],
        color: ["Black"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24212578/2023/7/26/6a73a2fc-dae8-4e54-acf7-13c5b03b80e61690379131665SnitchMenCream-ColouredTypographyPrintedRawEdgeT-shirt1.jpg",
        description: "Snitch Men Printed T-Shirt",
        price: "Rs.29.99",
        rating: 4.0,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["S", "M", "L"],
        color: ["Cream"],
         videoUrl:''
      },
      { 
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/10/38Ro3f6v_76fedf94f7f94f828081e90a63732b5e.jpg",
        description: "Snitch Men Slim Fit T-Shirt",
        price: "Rs.21.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["White", "Black"],
        videoUrl:''
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28666822/2024/4/4/6026618f-401e-4316-b93c-e15f3303c9a31712199346079SnitchMenPoloCollarAppliqueSlimFitT-shirt1.jpg",
        description: "Snitch Men Polo Fit T-Shirt",
        price: "Rs.23.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "Snitch",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Blue", "Navy Blue"],
        videoUrl:'https://videos.pexels.com/video-files/9558958/9558958-sd_960_506_25fps.mp4'
      },
    ],
  },
  // Category 1 items
  {
    category: 1,
    items: [
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32070614/2024/12/24/04ceacf4-63b9-49f2-be27-0880892147f81735046029339HIGHLANDERMenSlimFitOpaqueStripedCasualShirt1.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.35.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Olive Green", "Black"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2336928/2019/12/3/a7b10a8e-ebf1-4650-8567-652ed6a556531575376582793-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Checked-Casual-Shi-1.jpg",
        description: "HIGHLANDER Blue Shirt",
        price: "Rs.32.99",
        rating: 4.1,
        discountedPrice: "Rs.499",
        availability: "Out of Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Navy Blue", "Maroon"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30151809/2024/7/8/9b38dfa3-0256-4edb-ba44-23b4db5e05c01720430717607HIGHLANDERMenOpaqueStripedCasualShirt1.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.30.99",
        rating: 4.2,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["White", "Blue"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8469255/2022/8/6/8c8ae38f-19e2-4ed2-8650-f81864a5d27f1659770152859HIGHLANDERMenBlackOliveGreenSlimFitCheckedCasualShirt1.jpg",
        description: "HIGHLANDER Men Black Shirt",
        price: "Rs.34.99",
        rating: 4.4,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Black", "Olive Green"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11964920/2024/12/18/b725f668-420b-45e1-9f33-f972f1b004961734497503460-HIGHLANDER-Men-White--Blue-Slim-Fit-Printed-Casual-Shirt-801-7.jpg",
        description: "HIGHLANDER White Shirt",
        price: "Rs.31.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
        availability: "Out of Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["White", "Blue"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/G93Iwfj7_0844bbe8504549ecaf1f789ed8fdd730.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.29.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Blue", "Black"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11467514/2022/9/26/cec5d2f1-03a7-434d-9cbb-7b0c41a560361664184920735HIGHLANDERMenPinkWhiteSlimFitCheckedCasualShirt1.jpg",
        description: "HIGHLANDER Checked Shirt",
        price: "Rs.33.49",
        rating: 4.2,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["Pink", "White"],
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19694414/2025/2/17/2190a01a-1b16-4f6a-ac6c-193d2afc3f671739774028905-HIGHLANDER-Men-White-Slim-Fit-Casual-Shirt-9211739774028287-1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        availability: "In Stock",
        brand: "HIGHLANDER",
        material: "Cotton",
        size: ["M", "L", "XL"],
        color: ["White"],
      },
    ],
  },
];


router.get("/category/:categoryId", (req, res) => {
  const { categoryId } = req.params; // Fetch categoryId from request params
  const categoryIdInt = parseInt(categoryId); // Convert string ID to integer

  if (categoryId >= 0 && categoryId < categoryItems.length) {
    res.json(categoryItems[categoryIdInt].items); // Send images for the specific category
  } else {
    res.status(404).json({ error: "Category not found" }); // Return 404 if the category does not exist
  }
});

module.exports = router;
