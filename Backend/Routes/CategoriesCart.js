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
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/9/kKNoOzgE_8db2adc7f42246fc855c518f2020910f.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/8/rg72Th6H_9947938ade24408892479baac806e629.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/10/iDGQbNfC_d8163b1fff9046c78d85fe8d580c1a37.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/8/8W0WfcND_6d518643aa2a468ea0245abd9457aea0.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30702624/2024/11/6/2f7e1fd9-4452-4e0e-88a3-95a52b9c47461730893295295-New-Balance-Athletics-Oversized-550-League-T-Shirt-536173089-1.jpg",
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
    ],
  },
  {
    categorycart: 1,
    items: [
      //     {
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/20/igNAEqWr_5849c6b48e9047abb7457f34c46a8570.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32711395/2025/2/13/1c975e65-2b71-4780-92b2-dc32f9daa18a1739454077537-Mast--Harbour-Women-Suede-Comfort-Sandals-9741739454076932-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/9/Vou79Agc_2ebd3ad8574a4d98a44da3c6fc8e8c22.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12304356/2020/10/9/74a554b0-b3bc-4cf5-bb0a-fdc3b439b7a11602215138644HouseofPataudiWomenGold-TonedBraidedDetailHandcraftedOne-Toe1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32610882/2025/2/5/98c8b08b-d4b4-4c0e-b587-abfd9aff56e71738741831110-DressBerry-Women-Open-Toe-Flats-with-Bows-9271738741830842-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28608670/2024/4/1/a8b1d19b-6752-4145-a586-a527dbb7ad721711974947694SlipperForMenWomenFlipFlopsHotelSpaMassageChappalBedroomCarp1.jpg",
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
    ],
  },
  {
    categorycart: 2,
    items: [
      //     {
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22226446/2025/3/31/89853af1-381b-4d4e-b6a8-002b00a6a6551743398374510-WROGN-Brand-Logo-Laptop-Backpack-with-USB-Charging-Port-6721-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/27/f8evVgKE_7779643825424b99a095bc95212df93d.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21790322/2024/6/22/460def00-4375-4519-afd2-74558aba5f6e1719045283254-Safari-Coastline-Printed-Poly-Carbonate-Small-Hard-Trolley-B-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11422978/2023/7/1/57cc950b-1a84-469b-b749-195bc29b0e491688188539115-Puma-Unisex-Black-Solid-teamGOAL-23-Backpack-180168818853900-13.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31780898/2024/12/4/5b21302b-9b2b-4513-9224-45e7103c8ae71733300902560-Hayes-London-Men-Pack-of-2-Leather-Formal-Belt-6771733300902-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25329044/2023/10/5/3eb427c1-a1fb-47b1-a298-ab2c47c1f8231696483723854RoadsterMenVeganLeatherBelt1.jpg",
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
    ],
  },
  {
    categorycart: 3,
    items: [
      //     {
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14582818/2024/6/8/ddf8646d-b33b-4cfc-8c47-b00d7a002a221717819948985-Voyage-Unisex-Black-Lens-Oval-Sunglasses-with-UV-Protected-L-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14582858/2023/7/26/003a95a2-5b66-4872-839f-b9db8d0d17b31690350009740-Voyage-Women-Black-Lens-Rectangle-Sunglasses-with-UV-Protect-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18809060/2023/8/25/733ff3c2-2d1e-4656-89d9-f4e2602f71411692960614643-Voyage-Unisex-Black-Lens--Black-Wayfarer-Sunglasses-with-UV--2.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/28/hwoXenbW_c34208ba637c431dbe244af3676eddd8.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28413206/2025/1/6/89b54dc1-bfd4-4162-aa3a-cf3c3492c2fe1736162819201-HASHTAG-EYEWEAR-Women-Square-Sunglasses-with-Polarised-and-U-1.jpg",
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
    ],
  },
  {
    categorycart: 4,
    items: [
      //     {

      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27248658/2024/1/29/024f02f7-26c8-4f03-b8b1-c39c0d20b0b71706523861908Ring1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19492258/2022/8/13/092cb48f-582b-4d3d-9165-84656d590b101660367151245ZENEMEBlueContemporaryDropEarrings1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26403674/2023/12/13/70133f80-85cd-4fec-a0c8-6a8a7360f3a71702481324891WROGNMenSilver-TonedSilver-TonedBrassRhodium-PlatedAntiqueCh1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23303012/2023/5/20/83b50a82-5272-4f40-8ca7-015b7eb32db31684605387355ShiningDivaFashionGold-TonedWhiteGold-PlatedNecklace7.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28007924/2025/1/15/e9a95009-af9b-4940-8855-84452e38119b1736944982800-Rubans-22K-Gold-Plated-Statement-For-Classic-Appeal-Adjustab-1.jpg",
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
    ],
  },
  {
    categorycart: 5,
    items: [
      //     {

      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/6/nRZPfAdS_a5da4d25ca5d40d68296a34d02ba04a2.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27239932/2024/1/27/bb72a061-c5d6-4a3c-8b1e-b4dcd58ad7b91706361788001BROADSTARWomenSmartLooseFitHigh-RiseEasyWashTrousers1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27096772/2024/1/20/e9dcd34f-577f-4a1f-ac18-7075f1f95f081705754283054CantabilMenTrousers1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31881630/2025/2/5/7def53fa-cb4c-47ba-9de4-83f8346199341738749677860-Park-Avenue-Men-Shirts-7021738749677329-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26986744/2024/1/17/c8a84506-8c43-4b98-a508-b29ced20e6ed1705490820658FITHUBWomenGreyWrinkleFreeTrousers1.jpg",
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
    ],
  },
  {
    categorycart: 6,
    items: [
      //     {

      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16784440/2022/6/28/62827719-672b-4691-9233-7ce7ada1eb881656405353951-Timex-Men-Black-Multifunction-Analogue-Watch---TWEG18408-292-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21670/2023/2/23/e75f393c-fc0d-4bde-9147-3458fea0f42e1677151124075FossilMenBlackDialChronographWatchCH26001.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27616874/2024/2/15/239d1811-15cf-4833-91b8-b05c2e9671f81707996109277TitanMenDialLeatherStrapsAnalogueWatch1805SL121.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13436526/2022/6/28/3d4b3e2d-3e25-471e-84eb-0507bda157931656394692180-Timex-Men-Grey-Multifunction-Analogue-Watch---TW000T309-5111-11.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16109456/2022/12/14/6a876c98-7688-4711-812f-c97e5938385c1671012401670-WROGN-Men-White-Analogue-Watch-WRG00041E-2851671012401140-1.jpg",
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
    ]
  },
  {
    categorycart: 7,
    items: [
    

      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19945488/2022/10/10/510f690f-af48-4975-9a44-004997ef04071665402563545SpiatyWomenPinkSolidLingerieSet1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29593012/2024/5/17/4ff9eb17-7bb7-4fa3-b5f8-6c2b558914f41715955510537LuxeWomenWearHoneymoonLingerieSets1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28887596/2024/4/12/83efb47e-a189-41de-b254-20da6c95bb5a1712928781082LingerieSet1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/3/awdxIAb9_580a5e9ebcd6456b99b9e1c381940ba0.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26152764/2023/12/7/f0edad23-12cb-4475-88e8-ded7994ce9a31701943106826-DressBerry-Women-Bra-921701943106377-1.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/19/mW77yJw0_0e7c4768eda34430bf38587fca37fd35.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/JULY/29/3X9okmtA_32d6d39d8114446598fa80692317357e.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/19/6ml5CnJS_995ded3363914d1489d2149008a9df29.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/25/YFwXn3cq_1b4ff9f3f091489996e382a9b1fd11ba.jpg",
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
      {
        imageurl: [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/12/UYIndLVg_dfebb24b050c4b0a981612105346c218.jpg",
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
    ]
  }
];

router.get("/categoryitems/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const items = categoryItems.find((cat) => cat.categorycart === categoryId);

  if (items) {
    res.json(items.items);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

module.exports = router;
