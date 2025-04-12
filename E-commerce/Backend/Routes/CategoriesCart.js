const express = require("express");
const router = express.Router();

router.get("/categorycart", (req, res) => {
  const categorycart = [
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5GPoLjgx_802886f8b9c74273803313b1103a8e16.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/VfNti6y8_a2e5ae944ecc4736b18efb8a75b1e191.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/uwqXL3Kq_0396ac2e5a1a4c12af1eec55c14917c8.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/3Vmva6Mn_d1d1003350df4a33be4218faf45bca1d.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5rDi1B23_c892152411964fd09fc7f6efd04c5fa0.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oyv2rmcn_4b883a02a10d43c1adb2a8b2f598324d.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/G0tDeU5X_47e68f1ab94a4289842265de4d1b6e83.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/iDYvU5BX_4a545298ef67430b8f42bc0566a925d1.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/gx4ejH2p_e11304b9b8fe400baa493609fe88e365.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oa2sAEOX_a55bd8360faa48eeb39ae724b06b86ce.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/7LrUb6vm_e526c192a4844543bc3fc489719493b2.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/9zRKW9Gx_67351a535dd64b2aa2debb194edc0f27.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/J4F7z8Yi_de5328531e58424dbcc62f62c8678936.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/XkkXn3CY_fb58dc77984f4f1d93c536db6d9258c6.jpg",
   
  ];

  res.json(categorycart);
});
const categoryItems = [
  // Category 0 items
  {
    categorycart: 0,
    items: [
  //     {
    {
      imageurl: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/uQlZNooT_ac6154ed7e364c8bb16a32f54c5b6405.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/C8XNJKBF_1d100d9e48e745d2bf7e4b7ac071092b.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/WPnrDiaU_bbd9484b45504dc08bf04a8ab6673569.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/V9X3uifG_84b45fe6ea4c4f9581a101aabe2a1e8a.jpg",
      ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21568972/2023/1/16/5cdd2513-db15-40ba-ad94-0661d2043db61673872297871GraffitiTealGreenOversizedT-Shirt1.jpg",
  //       description: "Graffiti Oversized T-Shirt",
  //       price: "Rs.25.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24265106/2023/7/29/4c4dffb5-8683-42d6-b3f3-9cd6e069421c1690653424655AbstractLeopardBlueT-Shirt1.jpg",
  //       description: "Leopard Blue T-Shirt",
  //       price: "Rs.22.99",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32053713/2024/12/23/a2cc507d-13b3-4d9b-ba11-a303ce14810a1734962319105SnitchMenSlimFitT-shirt1.jpg",
  //       description: "Snitch Men Slim Fit T-Shirt",
  //       price: "Rs.19.99",
  //       rating: 4.7,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29197210/2024/4/25/3cf467b6-9eef-4493-81ce-b17540e97cd51714052747089SnitchMenPoloCollarSlimFitT-shirt1.jpg",
  //       description: "Snitch Men Polo T-Shirt",
  //       price: "Rs.27.49",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29421872/2024/5/8/54e86b97-25f0-4cad-bfdf-0c162a8fd7451715163628458SnitchMenPoloCollarSlimFitT-shirt1.jpg",
  //       description: "Snitch Men Slim T-Shirt",
  //       price: "Rs.28.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24099436/2023/7/19/2ea7e6fc-7450-4595-9b7a-c48a3b44b4501689776946188SnitchMenMustardYellowTypographyPoloCollarExtendedSleevesT-s5.jpg",
  //       description: "Snitch Men Mustard T-Shirt",
  //       price: "Rs.24.99",
  //       rating: 4.4,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24545240/2023/8/18/4b65f649-0103-4912-a862-04e7766d47951692364031759SnitchMenBlackT-shirt1.jpg",
  //       description: "Snitch Men Black T-Shirt",
  //       price: "Rs.20.99",
  //       rating: 4.1,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24092890/2024/1/2/5dd51418-3e6c-4915-b5f3-755b5ca9d2671704189614004-Snitch-Men-Black-Typography-Printed-Pockets-T-shirt-14517041-2.jpg",
  //       description: "Snitch Men Pockets T-Shirt",
  //       price: "Rs.26.99",
  //       rating: 4.8,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24212578/2023/7/26/6a73a2fc-dae8-4e54-acf7-13c5b03b80e61690379131665SnitchMenCream-ColouredTypographyPrintedRawEdgeT-shirt1.jpg",
  //       description: "Snitch Men Printed T-Shirt",
  //       price: "Rs.29.99",
  //       rating: 4.0,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/10/38Ro3f6v_76fedf94f7f94f828081e90a63732b5e.jpg",
  //       description: "Snitch Men Slim Fit T-Shirt",
  //       price: "Rs.21.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28666822/2024/4/4/6026618f-401e-4316-b93c-e15f3303c9a31712199346079SnitchMenPoloCollarAppliqueSlimFitT-shirt1.jpg",
  //       description: "Snitch Men Polo Fit T-Shirt",
  //       price: "Rs.23.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
    ]
  },
  // Category 1 items
  // {
  //   categorycart: 1,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16519904/2021/12/15/7f11b1d1-3722-437f-92ed-f6903f218c8f1639549579595HIGHLANDERMenWhiteSlimFitCasualShirt1.jpg",
  //       description: "HIGHLANDER Men Shirt",
  //       price: "Rs.35.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2336928/2019/12/3/a7b10a8e-ebf1-4650-8567-652ed6a556531575376582793-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Checked-Casual-Shi-1.jpg",
  //       description: "HIGHLANDER Blue Shirt",
  //       price: "Rs.32.99",
  //       rating: 4.1,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22183934/2024/10/16/f89aed8f-a9a2-4fb6-9dd2-f8ece5e663e51729098455615-Red-Tape-Red-Tape-Button-Down-Collar-Cotton-Linen-Casual-Shi-1.jpg",
  //       description: "HIGHLANDER Men Shirt",
  //       price: "Rs.30.99",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/27/hwUYlViD_fff3df525c154235a42341cac067cfdb.jpg",
  //       description: "HIGHLANDER Men Black Shirt",
  //       price: "Rs.34.99",
  //       rating: 4.4,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6553317/2025/2/15/b5da0c2b-450c-4afc-ba2d-1e727f251c901739614282286-HIGHLANDER-Men-Blue-Slim-Fit-Casual-Shirt-5541739614281808-1.jpg",
  //       description: "HIGHLANDER White Shirt",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24681544/2023/8/27/d570db49-94d1-4cc1-996a-b1c40d28a7561693149944837PowerlookMenGreyTartanChecksOpaqueCheckedCasualShirt1.jpg",
  //       description: "HIGHLANDER Men Shirt",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29998353/2024/6/21/7ebd7d17-aecb-4a80-844e-153f929516c51718938539489HIGHLANDERMenOpaqueCasualShirt1.jpg",
  //       description: "HIGHLANDER Checked Shirt",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/17/ruUp6PWZ_6df2855e793c476297eed7bb3d929ab9.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11467514/2022/9/26/cec5d2f1-03a7-434d-9cbb-7b0c41a560361664184920735HIGHLANDERMenPinkWhiteSlimFitCheckedCasualShirt1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/10/o3E11ypC_58361c164c8a402491418db479c0ef03.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26851640/2024/1/10/654b60d0-5eca-4bc4-9164-12629ba585681704851004162HIGHLANDERMenWhiteSlimFitTartanChecksOpaqueCheckedCasualShir1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/hkAQuikX_6c17aab7fa754fd198b88b43eb375acd.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/30/Uh3W5ZaZ_6ccf6dc6029d4da8be9558b008fa1bc4.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15923972/2025/2/15/7da2d64d-84f3-4f09-a136-d275f0bbeabd1739615023672-HIGHLANDER-Men-Black-Slim-Fit-Opaque-Printed-Casual-Shirt-30-1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/27/UJl0okhL_f41f3d9d41c9460b896cec24fe11a6bc.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31601831/2025/3/12/bb2d4870-dc75-4d0a-a024-69479dcb90121741761859341-Powerlook-Men-Opaque-Casual-Shirt-6511741761858939-1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25183700/2023/9/25/75f3b5a1-1995-4f5d-8c9e-b18b0a7c9b421695635788508PowerlookMenMulticolouredOpaqueStripedCasualShirt1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // // Category 2 items
  // {
  //   category: 2,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/25/z5NkwTAA_c658bb1e7ca84e5aa705f2fc098a86cb.jpg",
  //       description: "HIGHLANDER Men Shirt",
  //       price: "Rs.35.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2336928/2019/12/3/a7b10a8e-ebf1-4650-8567-652ed6a556531575376582793-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Checked-Casual-Shi-1.jpg",
  //       description: "HIGHLANDER Blue Shirt",
  //       price: "Rs.32.99",
  //       rating: 4.1,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30151809/2024/7/8/9b38dfa3-0256-4edb-ba44-23b4db5e05c01720430717607HIGHLANDERMenOpaqueStripedCasualShirt1.jpg",
  //       description: "HIGHLANDER Men Shirt",
  //       price: "Rs.30.99",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8469255/2022/8/6/8c8ae38f-19e2-4ed2-8650-f81864a5d27f1659770152859HIGHLANDERMenBlackOliveGreenSlimFitCheckedCasualShirt1.jpg",
  //       description: "HIGHLANDER Men Black Shirt",
  //       price: "Rs.34.99",
  //       rating: 4.4,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11964920/2024/12/18/b725f668-420b-45e1-9f33-f972f1b004961734497503460-HIGHLANDER-Men-White--Blue-Slim-Fit-Printed-Casual-Shirt-801-7.jpg",
  //       description: "HIGHLANDER White Shirt",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/G93Iwfj7_0844bbe8504549ecaf1f789ed8fdd730.jpg",
  //       description: "HIGHLANDER Men Shirt",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/7/H617lupb_b913a369114c45f29cd7fce9149997f7.jpg",
  //       description: "HIGHLANDER Checked Shirt",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19694414/2025/2/17/2190a01a-1b16-4f6a-ac6c-193d2afc3f671739774028905-HIGHLANDER-Men-White-Slim-Fit-Casual-Shirt-9211739774028287-1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31601831/2025/3/12/bb2d4870-dc75-4d0a-a024-69479dcb90121741761859341-Powerlook-Men-Opaque-Casual-Shirt-6511741761858939-1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25183700/2023/9/25/75f3b5a1-1995-4f5d-8c9e-b18b0a7c9b421695635788508PowerlookMenMulticolouredOpaqueStripedCasualShirt1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26851640/2024/1/10/654b60d0-5eca-4bc4-9164-12629ba585681704851004162HIGHLANDERMenWhiteSlimFitTartanChecksOpaqueCheckedCasualShir1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/18/hkAQuikX_6c17aab7fa754fd198b88b43eb375acd.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/30/Uh3W5ZaZ_6ccf6dc6029d4da8be9558b008fa1bc4.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15923972/2025/2/15/7da2d64d-84f3-4f09-a136-d275f0bbeabd1739615023672-HIGHLANDER-Men-Black-Slim-Fit-Opaque-Printed-Casual-Shirt-30-1.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/27/UJl0okhL_f41f3d9d41c9460b896cec24fe11a6bc.jpg",
  //       description: "HIGHLANDER Men White Shirt",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // // Category 3 items
  // {
  //   category: 3,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/28/6hVdlexh_547a949559f54e0696159317fd7bfec4.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.35.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28096720/2024/3/7/10a87b94-45a7-47b1-8f11-0e3fa457a20e1709815980433FlipFlops1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.32.99",
  //       rating: 4.1,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/3/JeVBf0cF_c74e29722f944addb49098349e50b488.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.30.99",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18043676/2022/8/4/92ddcc8a-6003-496d-bb25-fee755c549df1659630772131CampusMenWhiteMeshRunningShoes1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.34.99",
  //       rating: 4.4,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19470548/2024/10/10/abbbff40-1a61-4559-a9f5-350c11b71c891728580209495-Campus-Men-White-Colourblocked-PU-Sneakers-6991728580209075-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/1/YG4XqgYW_9771f389c94f48a58629633c4c8bb594.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13273390/2022/7/21/ac85e014-5815-41cf-98d9-5d2258633dec1658386067467-Campus-Men-Black-Mesh-Running-Shoes-6391658386067134-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20300322/2022/10/7/33f518da-aa06-4dbc-baff-39e3a61fa4771665131999257CAMPUSGC-22107MENSBLACKSPORTSSANDALS1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/3/pBQKjo47_2c259cdcbddb450982a4b8428dea0b08.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/8/U9fkTn76_266f02e03cec40e089697db5937b7917.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14439666/2022/7/1/18c7f815-c03b-4751-aa0d-3eb7131059e21656665592974CampusMenTealMeshRunningShoes1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19470548/2024/10/10/abbbff40-1a61-4559-a9f5-350c11b71c891728580209495-Campus-Men-White-Colourblocked-PU-Sneakers-6991728580209075-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15465490/2022/7/21/f51e052e-dc84-4f1d-8aed-97371b4861881658381401685-Campus-Men-Black-Mesh-Running-Non-Marking-Shoes-751165838140-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18043664/2022/8/4/1ff979c0-1092-44fd-978f-2b82c684ee3a1659630898528CampusMenGreyKRIPTORunningShoes1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17221300/2022/7/4/ef5ecdd6-75f1-4fd6-8f3a-7993a91bf04a1656930427001CampusMenRedMeshRunningShoes1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 4,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29177038/2024/6/24/653d8bc1-5868-450b-a8b2-522a445376041719226438726-DressBerry-Floral-Fiesta-Tailored-To-Flatter-Carefree-Midi-D-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/13/vOcFJ6h3_8702f57645db4d1cb18ff890889d4cc0.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/4/w8HSzdag_b619ce99371c45fcb06ac82d3bdc34bf.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/28/DcLflgCQ_58985111774c44e5a8a047b53d7d72b3.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30192504/2024/8/6/63dc451f-8958-4070-a6b1-010a0ee1c40b1722945193269-DressBerry-Flattering-Fun-Floral-Printed-A-Line-Mini-Dress-9-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30051850/2024/JUNE/27/3Lf8idgF_cecd4c5084fa4035ac28f6597a46c6d1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29958556/2024/8/6/fb1b01e9-d232-45fc-a658-9286e73786361722945705325-DressBerry-Flattering-Charm-Cinched-Smocked-Waist-Cut-Outs-A-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29075484/2024/6/6/b0a03f79-271c-425c-af08-58472d135eda1717676148794-DressBerry-Disco-Vibes-Halter-Flatter-Bodycon-Mini-Dress-572-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/24/qo2LTcz1_52877c5275014529997938c75f6d8925.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/4/2ayYKBOG_d84a340409464f1a8121637474dc5ac2.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15108414/2022/4/17/7fd24ea0-0b39-4d79-b10b-a7b16811cc8a1650181546655-PURYS-Women-Beautiful-Off-White-Floral-Dress-879165018154590-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 5,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/2/5hU8rnnx_7894b22ec06e41bb99d538b21e9d5e31.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20002206/2023/10/19/d4e03c9e-1a95-474c-9199-728fc35a082b1697710018271-El-Paso-Men--Slip-On-Comfort-Sandals-1251697710018199-12.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29767406/2024/5/25/3c58db20-0038-44f0-b05b-bb8340e31e4e1716654947283BlackberrysMenLeatherComfortSandals1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/5/qI9DibXf_a2aef2672737455fad6ec011145e3feb.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20300322/2022/10/7/33f518da-aa06-4dbc-baff-39e3a61fa4771665131999257CAMPUSGC-22107MENSBLACKSPORTSSANDALS1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6810104/2022/6/7/fa78fb8f-1c25-44ab-b94b-d507fdba83701654599985788-HRX-by-Hrithik-Roshan-Men-Olive-Green--Black-Hook--Loop-Athl-2.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25275592/2023/9/30/5323c4f2-0d65-4047-b866-83398b582ae21696055448696MochiMenBrownLeatherComfortSandals1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14666514/2023/3/8/95fcee3a-d9ea-4c55-ac5b-60afe9404aef1678277898868-HRX-by-Hrithik-Roshan-Men-Grey--Black-Solid-Hook--Loop-Athle-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15584472/2021/10/25/71a1d474-8719-4a21-a435-fb8405e748c61635184388216ElPasoMenBrownComfortSandals1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24603228/2023/11/27/fadfa790-5fc1-41c8-8a14-7a24ec0e60d51701084648415-Metro-Slip-On-Comfort-Sandals-With-Buckles-4011701084648152-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28849984/2024/4/10/88b1a2c1-cf85-4dfd-8483-35a9614520ad1712763000122RoadsterMenBeigeFauxLeatherCasualSlipOnSandals1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },

  // {
  //   category: 6,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26917734/2024/1/14/abeb0481-39ce-4961-86da-1c6f6f6636db1705241317412JackJonesMenBlackWovenDesignPUSneakers1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/14/CDIZnWLx_636f0b7401fd42b8a9eb47af9ed3433d.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17493554/2022/3/12/a55b1b1d-02f6-4013-98fa-9aa7d0f4517f1647061150391JackJonesMenBlackCaps1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28337384/2024/3/18/8c4305e9-5087-4b44-b561-de318b9cd5201710752306385CottonPyjama1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/28/l6LnmFs9_211a2f4a16214f829c205483c0dacb7d.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18389666/2022/5/23/be70c1bb-1e41-4d35-ba0a-313a6b0e967b1653320409019JackJonesMenBlueT-shirt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26917744/2024/1/14/e43cc405-5357-43ff-9c95-955941fc30331705241321778JackJonesMenNavyBlueSneakers1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27345848/2024/2/2/dd03575e-0fcf-4a80-bff3-56440ff002db1706870083215JackJonesBrownStuddedLogoLeatherBelt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30242019/2024/9/14/26434b37-32a7-4271-b3bc-e2ebdf8b54b51726303832275-Jack--Jones-Men-Leather-Reversible-Belt-5471726303832086-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28308270/2024/3/16/d13513ef-6eeb-4182-a2b6-0a980b7fdaea1710588137733JackJonesMenColourblockedSlip-OnSneakers1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26917748/2024/1/14/cf600bd9-7ac8-4837-8215-41bc1dcda5041705241323822JackJonesMenGreyColourblockedSneakers1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 7,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30702624/2024/11/6/2f7e1fd9-4452-4e0e-88a3-95a52b9c47461730893295295-New-Balance-Athletics-Oversized-550-League-T-Shirt-536173089-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30702631/2024/9/11/358a6e0f-597c-4af4-983c-a57cb8ec5eae1726057252249-New-Balance-Athletics-Jersey-T-Shirt-2701726057251814-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/19/g4KSipJZ_73fd12176399429b9d0f418db5080a29.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/19/7IVuGvK5_398721c24ff74b17bb1a2db995386d75.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23318754/2023/5/22/deb816bb-ef94-444b-837b-977bc1d734e51684730290720SoieMulticolouredFloralPrintCropTop1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21837516/2023/2/4/21800d75-70aa-404e-bfc3-ccfe3ba89af31675533328917SoieBlackCropTop1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23786438/2023/6/28/a77ef145-856e-422b-aeb4-c41e5d4dd44a1687927303044KookNKeechMenWhiteColourblockedSneakers1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20480284/2022/12/12/6ae7fe7c-927e-4ac3-922a-de17e18614de1670823795928-New-Balance-Men-Casual-Shoes-5601670823795635-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21908936/2023/11/28/a13c3303-f543-446b-89fc-d8acc8b9f4901701169276185NewBalanceMenAthleticsHigh-RiseShorts1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17394994/2022/3/14/c972db97-6fe9-4e4e-945e-c470e4c744401647255786158-Puma-Men-Shorts-5191647255785518-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29012814/2024/4/17/8e8ed108-d8e5-4432-af5a-a3db535e87521713357032837VECTORXMenRunningSportsShorts1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/25/3Gt0ejob_0fd5bbc2432f409aba8382c4a0acb8a6.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 8,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18342980/2022/7/11/b239e328-a17d-4fde-8290-7b6029e57db21657514610817-Shae-by-SASSAFRAS-Women-Lehenga-Choli-1261657514610199-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/pWYHzZAP_febaae2615154801b3471aece7a18871.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/24/SfHvCOAt_4a302a9ecfe14d808db212028737b2b6.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/19/yZGiAF9G_02a6956aff7c4de9ac9618f605f33319.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/27/HUFgorXF_5bb8d1bbc8804379bf3590e8e83f567b.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23436634/2023/5/27/f4567760-233e-487c-a204-2b8da8b8a7b91685128357570WomenLehengaCholi1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30398011/2024/8/17/edd2def9-a5aa-4494-a100-9bc889a9dec01723873430823-Sangria-Woven-Design-Lehenga-Choli-8921723873430378-7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15160132/2021/8/16/ad1eb76d-8470-49e1-af3b-1cd4a39220231629131083823PURVAJAWomenNavyBlue1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30151784/2024/7/8/8af2cb54-3da5-4c30-b552-1d27bcb1d64f1720430688957KhushalKPrintedReadytoWearLehengaBlouseWithDupatta1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29554826/2024/9/7/d835647c-02db-4f24-ab64-9756d76656a81725687103134-Anouk-Women-Lehenga-Choli-1211725687102446-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/23/Ydsp7e9K_ea73c0d2942342909261b0902cc89423.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30771489/2024/11/22/da109c16-3a0a-4739-b3c2-e2489be90b3c1732280839532-PURVAJA-Embellished-Sequinned-Ready-to-Wear-Lehenga--Unstitc-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 9,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2025/3/1/9e94103a-01f3-46de-b8ea-869667d8ab8c1740835649255-Puma-Smashic-Brand-Logo-Printed-Casual-Sneakers-Shoes-495174-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28608670/2024/4/1/a8b1d19b-6752-4145-a586-a527dbb7ad721711974947694SlipperForMenWomenFlipFlopsHotelSpaMassageChappalBedroomCarp1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/3/LziMXf50_60ca509067684a8fbd293953370db12c.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29553914/2024/5/16/402e4e48-9020-4e59-a8bd-ae8f5e3aa3431715799849775HRXbyHrithikRoshanUnisexColourblockedSneakers1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/8/wKd0Syy7_8274d869ca5146afadf905e3fcf36544.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/25/5oqnEp07_749f5db9996b4f7683944644b25832dc.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/11/4USr7B8H_a59afd9e560d42568f7001562a9aa9b0.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25579056/2023/10/21/abf66825-9ef7-4ba3-a0e0-042f9633fe1f1697872871566SherrifShoesBlackEmbellishedPartyKittenPumpswithBows7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/25/E9NYI1VV_4e51695e22ff45158d16103bf3e5c104.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/12/u2C81X7u_77aabae44c7a42d3a520b0b53897ccd2.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31587431/2024/11/19/e802c26e-25aa-4972-b134-1441ffb9c7e61731998866031-Shoetopia-Women-Buckled-Platform-Heel-Sandals-81173199886542-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15201780/2024/9/2/a7d7d27a-a72a-4f15-803a-d2cb21b4b8851725277151292-Carlton-London-sports-Women-Pink-Rubber-Thong-Flip-Flops-312-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 10,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23333180/2023/5/24/19dfacda-8c32-4d6a-a27a-e4c6127aaf5c1684902684331ShoetopiaBlackBlockPeepToeswithBuckles7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31658237/2024/12/6/7e294963-b191-4ffd-a0f1-f1e65af6008d1733480784789-Shoetopia-Girls-Block-Pumps-with-Laser-Cuts-4751733480784361-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31658210/2024/12/6/372dd982-606d-4c32-812d-3c3b978097841733480361228-Shoetopia-Girls-Wedge-Sandals-8351733480360804-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24568904/2023/8/21/58336572-6a4b-4067-ba01-085263f3f0141692602512992ShoetopiaGirlsBlackBlockPumpswithBows7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24569156/2023/8/21/1d2ead9b-a4d2-41b0-a5bc-db91f0bb69d71692614507610ShoetopiaGirlsBlackFlatformSandalswithBuckles7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29510464/2024/5/16/1724bbbe-65a6-4100-9b22-f502b1f0f4f61715859886877ShoetopiaGirlsBlockPumps7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22795812/2024/4/5/9f67dca3-a382-487d-9a0b-d3921528884f1712306424101-Shoetopia-Girls-Woven-Design-Flatform-Heels-931712306423877-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32302148/2025/1/13/4e4469f9-abc6-4664-bd0c-eb15b0102bcc1736748946931STEFENSGirlsPartyWedgeSandals1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16390520/2022/11/7/231b6763-7673-4dfd-938c-dacdd230288b1667824751374ShoetopiaGirlsBlackBlockHeeledBoots1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18885336/2023/3/20/beb57b69-29ff-4856-961e-4930137071591679311007467-Shoetopia-Girls-White-Block-Heels-with-Bows-4191679311006988-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/33038822/2025/3/11/91114795-530f-41eb-be4a-01d7d7533c141741693635677-Shoetopia-Girls-Embellished-Party-Block-Heels-Mules-61217416-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24569112/2023/8/21/788a542c-8232-4372-979f-2bd845af8b541692607404605ShoetopiaGirlsBlackBlockPumpswithBows7.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
  // {
  //   category: 11,
  //   items: [
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/6/pHMrMkvx_189434d10c244c8aaf83cef5cfbe8b43.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.31.99",
  //       rating: 4.5,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/1/7E22paXD_b53b760f114e43b681441bb10a17905d.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.29.99",
  //       rating: 4.3,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23867298/2023/7/4/7701b7a0-8e1c-4276-a7e3-7fbaeab855471688471252622HancockWomenBlackRelaxedOpaqueStripedFormalShirt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.33.49",
  //       rating: 4.2,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/R86oqPZq_a33bb8f515464d2a92edb520bb3fd0a3.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27856722/2024/2/26/faf54a3c-abb9-4434-8e42-13406a573f891708887193630IndianNeedleMenClassicOpaqueFormalShirt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23306038/2023/5/21/462df9f3-51ad-462b-9129-8b6c287bad2d1684614684960StyleQuotientWomenNude-ColouredSmartOpaqueFormalShirt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23909758/2023/8/7/428f23d1-6cc4-414d-860b-7607624f75d41691406410825-Arrow-Men-Shirts-4601691406410459-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/nQDVS7wI_a9fc39dbb9c340eba97e0d4af50aa06f.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29456364/2024/5/16/da248f96-5d79-4474-9384-76f8ac8a93f91715856536627-Chemistry-Women-Shirts-5361715856536095-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23960220/2023/7/21/a79ac666-2e40-4a00-a727-37b77b6523941689921225671-Chemistry-Women-Shirts-4181689921225283-1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26779586/2024/1/4/e60fd515-a061-4c26-b1d9-15bed451a7021704366546172BAESDBoysWhiteClassicFloralPrintedFormalShirt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //     {
  //       imageUrl:
  //         "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23867282/2023/7/4/ee4d2bf9-638b-4737-9a40-253888c3df4b1688471266626HancockWomenGreyRelaxedOpaqueFormalShirt1.jpg",
  //       description: "CAMPUS Shoe",
  //       price: "Rs.27.99",
  //       rating: 4.6,
  //       discountedPrice: "Rs.499",
  //     },
  //   ],
  // },
];


router.get("/categoryitems/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const items = categoryItems.find(cat => cat.categorycart === categoryId);
  
  if (items) {
    res.json(items.items);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});


module.exports = router;
