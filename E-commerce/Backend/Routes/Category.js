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
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24265106/2023/7/29/4c4dffb5-8683-42d6-b3f3-9cd6e069421c1690653424655AbstractLeopardBlueT-Shirt1.jpg",
        description: "Leopard Blue T-Shirt",
        price: "Rs.22.99",
        rating: 4.2,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32053713/2024/12/23/a2cc507d-13b3-4d9b-ba11-a303ce14810a1734962319105SnitchMenSlimFitT-shirt1.jpg",
        description: "Snitch Men Slim Fit T-Shirt",
        price: "Rs.19.99",
        rating: 4.7,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29197210/2024/4/25/3cf467b6-9eef-4493-81ce-b17540e97cd51714052747089SnitchMenPoloCollarSlimFitT-shirt1.jpg",
        description: "Snitch Men Polo T-Shirt",
        price: "Rs.27.49",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29421872/2024/5/8/54e86b97-25f0-4cad-bfdf-0c162a8fd7451715163628458SnitchMenPoloCollarSlimFitT-shirt1.jpg",
        description: "Snitch Men Slim T-Shirt",
        price: "Rs.28.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24099436/2023/7/19/2ea7e6fc-7450-4595-9b7a-c48a3b44b4501689776946188SnitchMenMustardYellowTypographyPoloCollarExtendedSleevesT-s5.jpg",
        description: "Snitch Men Mustard T-Shirt",
        price: "Rs.24.99",
        rating: 4.4,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24545240/2023/8/18/4b65f649-0103-4912-a862-04e7766d47951692364031759SnitchMenBlackT-shirt1.jpg",
        description: "Snitch Men Black T-Shirt",
        price: "Rs.20.99",
        rating: 4.1,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24092890/2024/1/2/5dd51418-3e6c-4915-b5f3-755b5ca9d2671704189614004-Snitch-Men-Black-Typography-Printed-Pockets-T-shirt-14517041-2.jpg",
        description: "Snitch Men Pockets T-Shirt",
        price: "Rs.26.99",
        rating: 4.8,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24212578/2023/7/26/6a73a2fc-dae8-4e54-acf7-13c5b03b80e61690379131665SnitchMenCream-ColouredTypographyPrintedRawEdgeT-shirt1.jpg",
        description: "Snitch Men Printed T-Shirt",
        price: "Rs.29.99",
        rating: 4.0,
        discountedPrice: "Rs.499",
       
      },
      { 
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/10/38Ro3f6v_76fedf94f7f94f828081e90a63732b5e.jpg",
        description: "Snitch Men Slim Fit T-Shirt",
        price: "Rs.21.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28666822/2024/4/4/6026618f-401e-4316-b93c-e15f3303c9a31712199346079SnitchMenPoloCollarAppliqueSlimFitT-shirt1.jpg",
        description: "Snitch Men Polo Fit T-Shirt",
        price: "Rs.23.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
    ],
  },
  // Category 1 items
  {
    category: 1,
    items: [
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16519904/2021/12/15/7f11b1d1-3722-437f-92ed-f6903f218c8f1639549579595HIGHLANDERMenWhiteSlimFitCasualShirt1.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.35.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2336928/2019/12/3/a7b10a8e-ebf1-4650-8567-652ed6a556531575376582793-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Checked-Casual-Shi-1.jpg",
        description: "HIGHLANDER Blue Shirt",
        price: "Rs.32.99",
        rating: 4.1,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22183934/2024/10/16/f89aed8f-a9a2-4fb6-9dd2-f8ece5e663e51729098455615-Red-Tape-Red-Tape-Button-Down-Collar-Cotton-Linen-Casual-Shi-1.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.30.99",
        rating: 4.2,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/27/hwUYlViD_fff3df525c154235a42341cac067cfdb.jpg",
        description: "HIGHLANDER Men Black Shirt",
        price: "Rs.34.99",
        rating: 4.4,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6553317/2025/2/15/b5da0c2b-450c-4afc-ba2d-1e727f251c901739614282286-HIGHLANDER-Men-Blue-Slim-Fit-Casual-Shirt-5541739614281808-1.jpg",
        description: "HIGHLANDER White Shirt",
        price: "Rs.31.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24681544/2023/8/27/d570db49-94d1-4cc1-996a-b1c40d28a7561693149944837PowerlookMenGreyTartanChecksOpaqueCheckedCasualShirt1.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.29.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29998353/2024/6/21/7ebd7d17-aecb-4a80-844e-153f929516c51718938539489HIGHLANDERMenOpaqueCasualShirt1.jpg",
        description: "HIGHLANDER Checked Shirt",
        price: "Rs.33.49",
        rating: 4.2,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/17/ruUp6PWZ_6df2855e793c476297eed7bb3d929ab9.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
      
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11467514/2022/9/26/cec5d2f1-03a7-434d-9cbb-7b0c41a560361664184920735HIGHLANDERMenPinkWhiteSlimFitCheckedCasualShirt1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/10/o3E11ypC_58361c164c8a402491418db479c0ef03.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26851640/2024/1/10/654b60d0-5eca-4bc4-9164-12629ba585681704851004162HIGHLANDERMenWhiteSlimFitTartanChecksOpaqueCheckedCasualShir1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/hkAQuikX_6c17aab7fa754fd198b88b43eb375acd.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/30/Uh3W5ZaZ_6ccf6dc6029d4da8be9558b008fa1bc4.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15923972/2025/2/15/7da2d64d-84f3-4f09-a136-d275f0bbeabd1739615023672-HIGHLANDER-Men-Black-Slim-Fit-Opaque-Printed-Casual-Shirt-30-1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/27/UJl0okhL_f41f3d9d41c9460b896cec24fe11a6bc.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31601831/2025/3/12/bb2d4870-dc75-4d0a-a024-69479dcb90121741761859341-Powerlook-Men-Opaque-Casual-Shirt-6511741761858939-1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25183700/2023/9/25/75f3b5a1-1995-4f5d-8c9e-b18b0a7c9b421695635788508PowerlookMenMulticolouredOpaqueStripedCasualShirt1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
    ],
  },
  // Category 2 items
  {
    category: 2,
    items: [
      {
        imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/25/z5NkwTAA_c658bb1e7ca84e5aa705f2fc098a86cb.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.35.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2336928/2019/12/3/a7b10a8e-ebf1-4650-8567-652ed6a556531575376582793-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Checked-Casual-Shi-1.jpg",
        description: "HIGHLANDER Blue Shirt",
        price: "Rs.32.99",
        rating: 4.1,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30151809/2024/7/8/9b38dfa3-0256-4edb-ba44-23b4db5e05c01720430717607HIGHLANDERMenOpaqueStripedCasualShirt1.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.30.99",
        rating: 4.2,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8469255/2022/8/6/8c8ae38f-19e2-4ed2-8650-f81864a5d27f1659770152859HIGHLANDERMenBlackOliveGreenSlimFitCheckedCasualShirt1.jpg",
        description: "HIGHLANDER Men Black Shirt",
        price: "Rs.34.99",
        rating: 4.4,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11964920/2024/12/18/b725f668-420b-45e1-9f33-f972f1b004961734497503460-HIGHLANDER-Men-White--Blue-Slim-Fit-Printed-Casual-Shirt-801-7.jpg",
        description: "HIGHLANDER White Shirt",
        price: "Rs.31.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/G93Iwfj7_0844bbe8504549ecaf1f789ed8fdd730.jpg",
        description: "HIGHLANDER Men Shirt",
        price: "Rs.29.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/7/H617lupb_b913a369114c45f29cd7fce9149997f7.jpg",
        description: "HIGHLANDER Checked Shirt",
        price: "Rs.33.49",
        rating: 4.2,
        discountedPrice: "Rs.499",
      
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19694414/2025/2/17/2190a01a-1b16-4f6a-ac6c-193d2afc3f671739774028905-HIGHLANDER-Men-White-Slim-Fit-Casual-Shirt-9211739774028287-1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31601831/2025/3/12/bb2d4870-dc75-4d0a-a024-69479dcb90121741761859341-Powerlook-Men-Opaque-Casual-Shirt-6511741761858939-1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25183700/2023/9/25/75f3b5a1-1995-4f5d-8c9e-b18b0a7c9b421695635788508PowerlookMenMulticolouredOpaqueStripedCasualShirt1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26851640/2024/1/10/654b60d0-5eca-4bc4-9164-12629ba585681704851004162HIGHLANDERMenWhiteSlimFitTartanChecksOpaqueCheckedCasualShir1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/hkAQuikX_6c17aab7fa754fd198b88b43eb375acd.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/30/Uh3W5ZaZ_6ccf6dc6029d4da8be9558b008fa1bc4.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15923972/2025/2/15/7da2d64d-84f3-4f09-a136-d275f0bbeabd1739615023672-HIGHLANDER-Men-Black-Slim-Fit-Opaque-Printed-Casual-Shirt-30-1.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/27/UJl0okhL_f41f3d9d41c9460b896cec24fe11a6bc.jpg",
        description: "HIGHLANDER Men White Shirt",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
    ],
  },
  // Category 3 items
  {
    category: 3,
    items: [
      {
        imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/28/6hVdlexh_547a949559f54e0696159317fd7bfec4.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.35.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28096720/2024/3/7/10a87b94-45a7-47b1-8f11-0e3fa457a20e1709815980433FlipFlops1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.32.99",
        rating: 4.1,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/3/JeVBf0cF_c74e29722f944addb49098349e50b488.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.30.99",
        rating: 4.2,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18043676/2022/8/4/92ddcc8a-6003-496d-bb25-fee755c549df1659630772131CampusMenWhiteMeshRunningShoes1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.34.99",
        rating: 4.4,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19470548/2024/10/10/abbbff40-1a61-4559-a9f5-350c11b71c891728580209495-Campus-Men-White-Colourblocked-PU-Sneakers-6991728580209075-1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.31.99",
        rating: 4.5,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/1/YG4XqgYW_9771f389c94f48a58629633c4c8bb594.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.29.99",
        rating: 4.3,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13273390/2022/7/21/ac85e014-5815-41cf-98d9-5d2258633dec1658386067467-Campus-Men-Black-Mesh-Running-Shoes-6391658386067134-1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.33.49",
        rating: 4.2,
        discountedPrice: "Rs.499",
      
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20300322/2022/10/7/33f518da-aa06-4dbc-baff-39e3a61fa4771665131999257CAMPUSGC-22107MENSBLACKSPORTSSANDALS1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/3/pBQKjo47_2c259cdcbddb450982a4b8428dea0b08.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/8/U9fkTn76_266f02e03cec40e089697db5937b7917.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14439666/2022/7/1/18c7f815-c03b-4751-aa0d-3eb7131059e21656665592974CampusMenTealMeshRunningShoes1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19470548/2024/10/10/abbbff40-1a61-4559-a9f5-350c11b71c891728580209495-Campus-Men-White-Colourblocked-PU-Sneakers-6991728580209075-1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
       
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15465490/2022/7/21/f51e052e-dc84-4f1d-8aed-97371b4861881658381401685-Campus-Men-Black-Mesh-Running-Non-Marking-Shoes-751165838140-1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18043664/2022/8/4/1ff979c0-1092-44fd-978f-2b82c684ee3a1659630898528CampusMenGreyKRIPTORunningShoes1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
      {
        imageUrl:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17221300/2022/7/4/ef5ecdd6-75f1-4fd6-8f3a-7993a91bf04a1656930427001CampusMenRedMeshRunningShoes1.jpg",
        description: "CAMPUS Shoe",
        price: "Rs.27.99",
        rating: 4.6,
        discountedPrice: "Rs.499",
        
      },
    ]
    },
    {
      category: 3,
      items: [
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29177038/2024/6/24/653d8bc1-5868-450b-a8b2-522a445376041719226438726-DressBerry-Floral-Fiesta-Tailored-To-Flatter-Carefree-Midi-D-1.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.31.99",
          rating: 4.5,
          discountedPrice: "Rs.499",
         
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/13/vOcFJ6h3_8702f57645db4d1cb18ff890889d4cc0.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.29.99",
          rating: 4.3,
          discountedPrice: "Rs.499",
         
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/4/w8HSzdag_b619ce99371c45fcb06ac82d3bdc34bf.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.33.49",
          rating: 4.2,
          discountedPrice: "Rs.499",
        
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/28/DcLflgCQ_58985111774c44e5a8a047b53d7d72b3.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
          
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30192504/2024/8/6/63dc451f-8958-4070-a6b1-010a0ee1c40b1722945193269-DressBerry-Flattering-Fun-Floral-Printed-A-Line-Mini-Dress-9-1.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
         
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30051850/2024/JUNE/27/3Lf8idgF_cecd4c5084fa4035ac28f6597a46c6d1.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
         
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29958556/2024/8/6/fb1b01e9-d232-45fc-a658-9286e73786361722945705325-DressBerry-Flattering-Charm-Cinched-Smocked-Waist-Cut-Outs-A-1.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
          
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29075484/2024/6/6/b0a03f79-271c-425c-af08-58472d135eda1717676148794-DressBerry-Disco-Vibes-Halter-Flatter-Bodycon-Mini-Dress-572-1.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
         
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/24/qo2LTcz1_52877c5275014529997938c75f6d8925.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
          
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/4/2ayYKBOG_d84a340409464f1a8121637474dc5ac2.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
          
        },
        {
          imageUrl:
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15108414/2022/4/17/7fd24ea0-0b39-4d79-b10b-a7b16811cc8a1650181546655-PURYS-Women-Beautiful-Off-White-Floral-Dress-879165018154590-1.jpg",
          description: "CAMPUS Shoe",
          price: "Rs.27.99",
          rating: 4.6,
          discountedPrice: "Rs.499",
          
        },
      ]
      },
      {
        category: 3,
        items: [
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/2/5hU8rnnx_7894b22ec06e41bb99d538b21e9d5e31.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.31.99",
            rating: 4.5,
            discountedPrice: "Rs.499",
           
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20002206/2023/10/19/d4e03c9e-1a95-474c-9199-728fc35a082b1697710018271-El-Paso-Men--Slip-On-Comfort-Sandals-1251697710018199-12.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.29.99",
            rating: 4.3,
            discountedPrice: "Rs.499",
           
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29767406/2024/5/25/3c58db20-0038-44f0-b05b-bb8340e31e4e1716654947283BlackberrysMenLeatherComfortSandals1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.33.49",
            rating: 4.2,
            discountedPrice: "Rs.499",
          
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/5/qI9DibXf_a2aef2672737455fad6ec011145e3feb.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
            
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20300322/2022/10/7/33f518da-aa06-4dbc-baff-39e3a61fa4771665131999257CAMPUSGC-22107MENSBLACKSPORTSSANDALS1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
           
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6810104/2022/6/7/fa78fb8f-1c25-44ab-b94b-d507fdba83701654599985788-HRX-by-Hrithik-Roshan-Men-Olive-Green--Black-Hook--Loop-Athl-2.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
           
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25275592/2023/9/30/5323c4f2-0d65-4047-b866-83398b582ae21696055448696MochiMenBrownLeatherComfortSandals1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
            
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14666514/2023/3/8/95fcee3a-d9ea-4c55-ac5b-60afe9404aef1678277898868-HRX-by-Hrithik-Roshan-Men-Grey--Black-Solid-Hook--Loop-Athle-1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
           
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15584472/2021/10/25/71a1d474-8719-4a21-a435-fb8405e748c61635184388216ElPasoMenBrownComfortSandals1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
            
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24603228/2023/11/27/fadfa790-5fc1-41c8-8a14-7a24ec0e60d51701084648415-Metro-Slip-On-Comfort-Sandals-With-Buckles-4011701084648152-1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
            
          },
          {
            imageUrl:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28849984/2024/4/10/88b1a2c1-cf85-4dfd-8483-35a9614520ad1712763000122RoadsterMenBeigeFauxLeatherCasualSlipOnSandals1.jpg",
            description: "CAMPUS Shoe",
            price: "Rs.27.99",
            rating: 4.6,
            discountedPrice: "Rs.499",
            
          },
          
        ]
        },
        {
          category: 3,
          items: [
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29177038/2024/6/24/653d8bc1-5868-450b-a8b2-522a445376041719226438726-DressBerry-Floral-Fiesta-Tailored-To-Flatter-Carefree-Midi-D-1.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.31.99",
              rating: 4.5,
              discountedPrice: "Rs.499",
             
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/13/vOcFJ6h3_8702f57645db4d1cb18ff890889d4cc0.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.29.99",
              rating: 4.3,
              discountedPrice: "Rs.499",
             
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/4/w8HSzdag_b619ce99371c45fcb06ac82d3bdc34bf.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.33.49",
              rating: 4.2,
              discountedPrice: "Rs.499",
            
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/28/DcLflgCQ_58985111774c44e5a8a047b53d7d72b3.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
              
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30192504/2024/8/6/63dc451f-8958-4070-a6b1-010a0ee1c40b1722945193269-DressBerry-Flattering-Fun-Floral-Printed-A-Line-Mini-Dress-9-1.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
             
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30051850/2024/JUNE/27/3Lf8idgF_cecd4c5084fa4035ac28f6597a46c6d1.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
             
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29958556/2024/8/6/fb1b01e9-d232-45fc-a658-9286e73786361722945705325-DressBerry-Flattering-Charm-Cinched-Smocked-Waist-Cut-Outs-A-1.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
              
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29075484/2024/6/6/b0a03f79-271c-425c-af08-58472d135eda1717676148794-DressBerry-Disco-Vibes-Halter-Flatter-Bodycon-Mini-Dress-572-1.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
             
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/24/qo2LTcz1_52877c5275014529997938c75f6d8925.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
              
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/4/2ayYKBOG_d84a340409464f1a8121637474dc5ac2.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
              
            },
            {
              imageUrl:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15108414/2022/4/17/7fd24ea0-0b39-4d79-b10b-a7b16811cc8a1650181546655-PURYS-Women-Beautiful-Off-White-Floral-Dress-879165018154590-1.jpg",
              description: "CAMPUS Shoe",
              price: "Rs.27.99",
              rating: 4.6,
              discountedPrice: "Rs.499",
              
            },
          ]
          },
          {
            category: 3,
            items: [
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/2/5hU8rnnx_7894b22ec06e41bb99d538b21e9d5e31.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.31.99",
                rating: 4.5,
                discountedPrice: "Rs.499",
               
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20002206/2023/10/19/d4e03c9e-1a95-474c-9199-728fc35a082b1697710018271-El-Paso-Men--Slip-On-Comfort-Sandals-1251697710018199-12.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.29.99",
                rating: 4.3,
                discountedPrice: "Rs.499",
               
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29767406/2024/5/25/3c58db20-0038-44f0-b05b-bb8340e31e4e1716654947283BlackberrysMenLeatherComfortSandals1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.33.49",
                rating: 4.2,
                discountedPrice: "Rs.499",
              
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/5/qI9DibXf_a2aef2672737455fad6ec011145e3feb.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
                
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20300322/2022/10/7/33f518da-aa06-4dbc-baff-39e3a61fa4771665131999257CAMPUSGC-22107MENSBLACKSPORTSSANDALS1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
               
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6810104/2022/6/7/fa78fb8f-1c25-44ab-b94b-d507fdba83701654599985788-HRX-by-Hrithik-Roshan-Men-Olive-Green--Black-Hook--Loop-Athl-2.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
               
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25275592/2023/9/30/5323c4f2-0d65-4047-b866-83398b582ae21696055448696MochiMenBrownLeatherComfortSandals1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
                
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14666514/2023/3/8/95fcee3a-d9ea-4c55-ac5b-60afe9404aef1678277898868-HRX-by-Hrithik-Roshan-Men-Grey--Black-Solid-Hook--Loop-Athle-1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
               
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15584472/2021/10/25/71a1d474-8719-4a21-a435-fb8405e748c61635184388216ElPasoMenBrownComfortSandals1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
                
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24603228/2023/11/27/fadfa790-5fc1-41c8-8a14-7a24ec0e60d51701084648415-Metro-Slip-On-Comfort-Sandals-With-Buckles-4011701084648152-1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
                
              },
              {
                imageUrl:
                  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28849984/2024/4/10/88b1a2c1-cf85-4dfd-8483-35a9614520ad1712763000122RoadsterMenBeigeFauxLeatherCasualSlipOnSandals1.jpg",
                description: "CAMPUS Shoe",
                price: "Rs.27.99",
                rating: 4.6,
                discountedPrice: "Rs.499",
                
              },
              
            ]
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
