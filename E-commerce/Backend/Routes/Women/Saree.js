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
      [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30140472/2024/7/6/4e9c5171-b430-4e0d-8a5a-fdbb58ad20d01720253931551SabaahatEmbellishedEmbroideredPureGeorgetteSaree1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30140472/2024/7/6/e71cf066-a40b-4962-bd87-7f502742044f1720253931533SabaahatEmbellishedEmbroideredPureGeorgetteSaree2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30140472/2024/7/6/42cda94a-ff7d-4745-8819-665775529ac51720253931542SabaahatEmbellishedEmbroideredPureGeorgetteSaree3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30140472/2024/7/6/44e0fcae-6481-45ee-ba84-a1bda932b15d1720253931569SabaahatEmbellishedEmbroideredPureGeorgetteSaree4.jpg",
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
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30237261/2024/7/18/c75b9845-ab81-4db1-90f4-e5cfba9cae331721306248982TikhiImliStripedSatinSaree1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30237261/2024/7/18/8e915f8a-128f-4e38-96f0-0b7dbb62d16c1721306249007TikhiImliStripedSatinSaree2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30237261/2024/7/18/fd3de884-62d5-4ad2-9563-c180f455a7311721306249084TikhiImliStripedSatinSaree4.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30237261/2024/7/18/8131b538-6cb6-419f-8a6e-6fe7d81bece31721306249137TikhiImliStripedSatinSaree3.jpg",
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
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28931300/2024/4/14/ecbc0b05-a2ef-4ddb-9427-172c2cbd81781713040248222SatraniWomensDyedJacquardSilkBlendHotPinkSaree1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28931300/2024/4/14/204bdad7-eee9-4cda-9cef-a4fe7cde282a1713040248204SatraniWomensDyedJacquardSilkBlendHotPinkSaree2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28931300/2024/4/14/f5c2a902-bced-456a-ad1b-31ba093edda21713040248186SatraniWomensDyedJacquardSilkBlendHotPinkSaree4.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28931300/2024/4/14/34473893-0fb7-46c4-b45d-804acf687b051713040248213SatraniWomensDyedJacquardSilkBlendHotPinkSaree3.jpg",
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
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29087060/2024/4/20/1d08adbf-8ee5-4ea9-ad9e-2ab840a967001713603647050Readytowearyellowcoloredlycrasareewithfoilembellishmentsandf1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29087060/2024/4/20/b29f78b0-f6e0-447c-a848-2481628ca4c81713603647013Readytowearyellowcoloredlycrasareewithfoilembellishmentsandf2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29087060/2024/4/20/b29871de-93a7-4efc-8418-a26b08b05d891713603646959Readytowearyellowcoloredlycrasareewithfoilembellishmentsandf3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29087060/2024/4/20/0f7b50b7-0743-40eb-bb2c-212d705b621a1713603647031Readytowearyellowcoloredlycrasareewithfoilembellishmentsandf5.jpg",
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
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/29/fZKCVNST_b2e4eca1cd5f4e7ba1b0888a02dcc3f0.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/29/j7foTAL0_1bf5fb6b1b5348369b7e3e3b635a508a.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/29/77tWlAST_f19909f3bcae4f59ae8b258d73ecb7b5.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/29/WceB7fpt_f1eae9c589bb420f9b969055c8a868d3.jpg",
          
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
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30146110/2024/7/8/8a3f5709-99b5-42ad-a676-6676603344f31720421011752SatraniEthnicMotifsZariSilkBlendBanarasiSaree2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30146110/2024/7/8/5bf9a330-84c8-4525-9260-3e9c9a6f2c071720421011866SatraniEthnicMotifsZariSilkBlendBanarasiSaree1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30146110/2024/7/8/d6b16d1f-916d-4629-9d2e-b493822de3171720421011826SatraniEthnicMotifsZariSilkBlendBanarasiSaree3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30146110/2024/7/8/8bea06c3-6382-49b8-af95-b58d19b3a6ae1720421011945SatraniEthnicMotifsZariSilkBlendBanarasiSaree4.jpg",

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
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27290072/2024/2/2/66adaf1a-6fb8-49fc-8fb8-2fabbafe91661706852557072kaseeWomenSarees1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27290072/2024/2/2/76056927-4faa-4d31-88b9-303c8f84d37f1706852557060kaseeWomenSarees2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27290072/2024/2/2/b4ffc862-1538-40c8-8e6a-16216f6ae9b91706852557088kaseeWomenSarees3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27290072/2024/2/2/a4383833-e41a-47f0-83f4-38caa44a17011706852557077kaseeWomenSarees4.jpg",
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
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26138530/2023/11/30/60e19d99-a99d-4556-9ba4-30ac3fa68eae1701328211502AnoukMaroonMaroonLeheriyaOrganzaDesignerSaree1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26138530/2023/11/30/7a9e5eb2-1ed7-41bf-8b01-14fae5b122c41701328211489AnoukMaroonMaroonLeheriyaOrganzaDesignerSaree2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26138530/2023/11/30/8a619b05-0dd8-416d-b413-d0db3a6f2af21701328211483AnoukMaroonMaroonLeheriyaOrganzaDesignerSaree4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26138530/2023/11/30/23fabb49-b855-4fb3-9472-7a07263608b01701328211477AnoukMaroonMaroonLeheriyaOrganzaDesignerSaree3.jpg",
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
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19475538/2022/8/12/f176f19a-f061-48e6-8ed2-f738fb3654ce1660312685153KoskiiMauveEmbroideredSaree1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19475538/2022/8/12/2bfb3bf2-794e-4cba-ba40-e345ca667c3f1660312685132KoskiiMauveEmbroideredSaree3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19475538/2022/8/12/7a3e5f38-d8db-4c15-8cb6-22a91cd784f01660312685112KoskiiMauveEmbroideredSaree2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19475538/2022/8/12/d5485da6-7882-4415-93e1-343bde3d663a1660312685142KoskiiMauveEmbroideredSaree4.jpg",
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
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21569212/2023/1/16/daf64bf9-c674-4ef6-8c0d-1ca4d79e3aff1673878786412Creamcoloredpolyestersareewithhandprintandscallopedborder1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21569212/2023/1/16/d0514124-2de5-4f49-b52e-d19b04b4b6eb1673878786393Creamcoloredpolyestersareewithhandprintandscallopedborder2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21569212/2023/1/16/5ff651c5-d44b-4c42-9fde-d05690559aff1673878786403Creamcoloredpolyestersareewithhandprintandscallopedborder4.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21569212/2023/1/16/012d4310-9e66-4cac-9aac-c009887ea3f91673878786421Creamcoloredpolyestersareewithhandprintandscallopedborder3.jpg",
        ],
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
