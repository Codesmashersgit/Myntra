const express = require("express");
const router = express.Router();

router.get("/saree", (req, res) => {
  const sareeimg = [
    {
      imageurl:[
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/uQlZNooT_ac6154ed7e364c8bb16a32f54c5b6405.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/C8XNJKBF_1d100d9e48e745d2bf7e4b7ac071092b.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/WPnrDiaU_bbd9484b45504dc08bf04a8ab6673569.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/V9X3uifG_84b45fe6ea4c4f9581a101aabe2a1e8a.jpg"
      ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
      [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/27/s4gnH0WW_7f06db95054548c18e80cae33166d9da.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/27/01Ec1FPP_7ac46847b0404d278614d20e47389717.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/27/IQ6rUMd6_e01ba6ba90c94756a515f1c5e4c03102.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/27/pBiC6DF9_f14f9212b71e4a3da2c3a3eae9aac906.jpg"
      ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
      [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/28/CsVWvzwp_fd150f93aee5457bba1350d5e56a9b56.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/28/Ki1zgYGJ_49f080b885dc484da002336b0461e718.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/28/poWgYXM9_ff3e5726a53b4a7592f753a02de257b7.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/28/gtmkonaf_b2f12692b4b24774bd52f102540d2251.jpg",
      ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
      [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/20/u9l0BveM_af9c07edc6ca4e09a9656c9b64978c27.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/20/B861rI7D_1c65cbfbaba1489a9378381c085b4e66.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/20/JSu6bFD2_af10696c7a9a40d68eb27c5827a26c91.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/20/JJVINvwG_99f62aaedda24809b9c1c4901535380e.jpg"
      ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
      [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/8/O4SLy9Jq_56943e5d738b4b4ba80d3b0cc2efdaaa.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/8/0ODR7eiL_3ec44d9ce2284b5eaea14b4183faa51a.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/8/PTdCzhIH_14dd0a40b4d94e83acc12c11d1e4a599.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/8/mbYFDiCz_aa836b76a4764a6182035e8d3ae1fe62.jpg",
      ],
      name: "Kasee",
      description: "Beads and Stones Saree",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
       [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/14/8hPRpfrd_7165f7df41b64d6bb8f878ae99ecb848.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/14/YX2LKaoY_0d677d0c03e9443f9f08c23c1812960e.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/14/n3CDodiX_6fadfbe1e4a0462085d74f9e90d06a8c.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/14/MEgidlJG_5f6495c59de14d61b008665ca4ba8243.jpg",
       ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
       [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/13/Jm8IFDLr_fef136a9e4a84b9eb1488df918d5fe2c.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/13/dog9Gk0t_ca0b0e3aca024e9bac93fe2a395a04c9.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/13/JPvku05E_e1b38304e86e47189e8ad6d4a4f1ba8d.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/13/vtfsDm6J_ef178f1d6b0e4ed4826b8f36dc15daf3.jpg",
       ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
       [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MARCH/18/N2mtE4eP_bff43c1e2f634c9b8c0603f2e254af19.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MARCH/18/vpaQGajP_ce7ef056de684d309e7cfad98e3056c9.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MARCH/18/qHciDkJv_d0b865fa7288419d930b9b8cae5f8296.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MARCH/18/heyTE8np_42a8e25cefd0464ab0d731e47e1dc93b.jpg",
       ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/3/Tl1ysT14_f1e5df489d8144bebe643c880d3c6cfc.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/19/k0uxEMoD_73e5be7b10c6445f97ea6cf4a329a2ef.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/22761590/2023/4/13/29dad21d-8f01-4bbd-9945-fb28a80418b51681404510410LavenderSilverStoneworkCrepeSaree1.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/29/vhM4fSZn_28f05f20ea5a403393b7e200ddf0bf38.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30911483/2025/1/29/0b4c0b2d-e6dc-48a5-a6b9-03b27c6737e11738151882085-House-of-Pataudi-Embroidered-Saree-With-Blouse-Piece-7681738-1.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
      [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26562828/2023/12/21/0b4061b5-260f-4964-8535-3236df4273fb1703129709551WovenPurpleDesignerCottonSilkSaree1.jpg",
      ],
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/23/AidsF7op_85caeef93a98463a886bbf0a3474e8de.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/2024/DECEMBER/10/lv1OZZ9E_9be2700dc82c42359e1443a0fc384295.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://www.vinusto.in/cdn/shop/files/15th_may_202458171_b73ed3b7-9b72-4b58-8325-79cab1804c44.jpg?v=1717414745",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://www.vinusto.in/cdn/shop/products/ashwinvinusto0136_bf5c5055-a60e-48f4-b87e-f326ac659ab6.jpg?v=1643887889",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
  ];

  res.json(sareeimg);

  router.get("/saree/:sareeId", (req, res) => {
    const { sareeId } = req.params; // Fetch categoryId from request params
    const sareeIdInt = parseInt(sareeId); // Convert string ID to integer
  
    if (sareeId >= 0 && sareeId < sareeimg.length) {
      res.json(sareeimg[sareeIdInt]);
    } else {
      res.status(404).json({ error: "Category not found" }); // Return 404 if the category does not exist
    }
  });
});

module.exports = router;
