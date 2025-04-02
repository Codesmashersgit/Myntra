const express = require("express");
const router = express.Router();

router.get("/saree", (req, res) => {
  const sareeimg = [
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/6/uQlZNooT_ac6154ed7e364c8bb16a32f54c5b6405.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/5/ZhX0N3eA_cb5d3d5d99324fe69a066e4a3501ee53.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/5/x9jCN4wv_3c496147d7874228933a8534fe8daf96.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22376640/2023/4/11/c101e469-1f11-4521-824b-c262724c87961681185897582-HERENOW-Floral-Sequinned-Poly-Georgette-Saree-34516811858967-1.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/2/AI5hSF83_5756d3e39608449db7d131a3d96920a7.jpg",
      name: "Kasee",
      description: "Beads and Stones Saree",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31219774/2024/10/9/e5d1e36a-236d-4f44-b151-f916d98924a11728482778370-Silk-Land-Printed-Zari-Tissue-Half--Half-Ready-to-Wear-Saree-1.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/8/Ua8RTvbM_ea3e2785e07f48768da5566eea988f63.jpg",
      name: "Kasee",
      price: "Rs. 999",
      rating: "4.5",
      description: "Beads and Stones Saree",
      discountedPrice: "Rs. 499",
    },
    {
      imageurl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29201864/2024/4/25/6b91e284-46b6-40da-8600-fb779cd699d21714056085633INITHI1.jpg",
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
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26562828/2023/12/21/0b4061b5-260f-4964-8535-3236df4273fb1703129709551WovenPurpleDesignerCottonSilkSaree1.jpg",
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
    const { sareeId } = req.params; // Fetch sareeId from request params

    const saree = sareeimg.find((item) => item.id === sareeId); // Find saree by ID

    if (saree) {
      res.json(saree); // Send the specific saree details
    } else {
      res.status(404).json({ error: "Saree not found" }); // Return 404 if saree not found
    }
  });
});

module.exports = router;
