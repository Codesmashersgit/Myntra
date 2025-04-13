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
    ]
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
    
    ]
  },

]
  


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
