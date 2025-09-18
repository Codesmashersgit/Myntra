
const express= require("express");
const router= express.Router();

router.get("/images1",(req,res)=>{
   const imagesurls1=[
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/hfoZXZHm_24ee4cda7b4e46cbbfacf1f5b967bc38.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/JTh2Vv2V_7ccdf9c0d3fd453db81df02576f10d65.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/G2aT6ycX_54a28f527f5c4675bde41d8e996f7f1f.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/HMMlYhP3_1faa2d80e2834c739ba09f931c86d434.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/QEbvUpw4_385314d2a4064f6c873decdec0efa0da.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/JJZaHil7_c2a7d479cee74b63be62110dc1664868.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/aXtYEyfS_707d7d1ce2b44ba297ed19dc72dc48f1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/fJdB4hRW_8ac41ba8d1de41738f822e3a3d6a9f0e.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/2A93JiME_8d739e3eeacd48659a6789894660986c.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/bV0NjC97_13192b2ab9404ebab580a84f9f530659.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/7OEN2C6I_350c2d56fa084246aa06d5be0111fb54.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/BOwDanPs_ef71d764fc804f03869ba35106225aec.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/nO23baaO_863b3e36b5f74113bb8656c9b421a754.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/UnEfCgnK_0ae3a635453444d894a50cf6ecf6b48e.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/yBcXKkmA_9d1ebab7bc5c4ba08088cea734b4bbde.jpg"
      ];
   
   res.json(imagesurls1);
})
router.get("/images2",(req,res)=>{
    const imagesurls2=[
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2025/FEBRUARY/10/bN7q47F2_8fc1efeb40b64b809377e50a03267800.gif",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/qOpINirr_2179aff64d36424693c82057807d417b.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/N6hbRCmM_00d6f01948a54b71bb5c9f0bdc59f9b2.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/oFNnPGUu_12aab838dbe94fc18bfa1225d7aa8380.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2025/FEBRUARY/14/iRble7Eb_354b00ebfe6249a8b617ac579ded7929.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/gaNtjjjE_19e41e73328d4831a8551f9a1e0cb53a.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/2lHgDZpr_2a0454f237054da6b63a4333cd7b60d5.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/51sxA3Fm_5d7b0885d3ba4083bce9ffd0aac25782.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/XwFs8aql_eaac617a9a434cb8912707bfe350b404.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/U2txFiKy_36ec99da8d9b4a408550ae01316d1c70.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/L2kSwuWc_fe07e99904054156b3d5434aed061986.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2025/FEBRUARY/14/9PVUOzgS_a1108dec13ea41699a82a87d38877028.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/fiZ0lDKO_da2fc82d23c84fbf9747da3432fb177a.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/Ukz4i2de_a5ca0bb0640548ed9f51e6e164866e2a.jpg" ,
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_65,c_limit,fl_progressive/w_65,h_85,q_50,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/Lv1jboeR_13ec055a626d4fa4996dd047bbe63d89.jpg" ,
       ];
    
    res.json(imagesurls2);

 })
 router.get("/images3",(req,res)=>{
    const imagesurls3=[
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/3/BW02lowy_85e59bbaca74441d8aece543577bf83a.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/3/V1aE7prg_69a93425ef2a458ca3a4127042e17fa3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/3/Qh3qDpo1_76635cc2b00c41ffb7b199dd46a3328d.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/3/RJi1PDcu_6c78aff0adcd4cc8b0b66fb44c3df242.jpg", 
    ];
    res.json(imagesurls3);


 })

 router.get("/images4",(req,res)=>{
    const imagesurls4=[
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/Wr0Ci2fK_3fbc8e6ceb1743418eac22664250de27.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/e6Txc48q_7712ee38d78e47d7a5c5963656ec2159.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/Kxt54Qbb_f5186442a73c4631aa8494213d29d100.pnghttps://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/Kxt54Qbb_f5186442a73c4631aa8494213d29d100.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/8NkFovrJ_4eb420e13b01480c968fd1dc054cb4eb.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/lEaWvQw9_2fc530fe66a2408887317ec37d700d8e.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/iys2RTd7_c7cfdd164c6b48dca2bf5b6e80a75592.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/VKoMDxYn_7b1abb321d2340acb14e5693a7fa7153.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/aXm9lPmf_df018a96c9f14492a93efec7f8f0baa2.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/xPKInOPw_2c09c0ddd290414cb026cd14720b2739.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/Q3iKLagO_5ccbc2a550f7447e8361e560eacf63f3.png",
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/sU6tm6dm_2edb19b68be34e0db8d54972ac2897a4.png",

    ]; 
    res.json(imagesurls4);
 })

  router.get("/images5",(req,res)=>{
    const imagesurls5=[
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/xsxzXyWx_028e60b40b604d018c9b539b59126b61.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/zDccnJt6_0c559030821a42b4a4ce88e3b3e0d171.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/biy3iH2T_f689012d6ad2454f872bc46e5c80f37a.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/MvQ2qbpP_ef78ac0094db45d5832eaf420816fbcc.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/mNYbsWp8_4adede375fa64f66a0fe78be5c1da5ba.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/ALgYrVSa_fa0d9aa1ee644e33888ef3514e7d98b6.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/MEWV4mMl_303c929bb3a84626a1becff1dc75a266.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/o8USukgg_3fe1c476a0f24310b3e1a493df40c145.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/jSAFuZ1q_126a721a1c52462ea64e94d3aee47a81.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/5kCm5T5T_f06d6b924267455fad5c816ce2d2d045.png",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_100,c_limit,fl_progressive/w_100,h_145,q_60,,dpr_2,fl_progressive/ApprovedImages/2025/FEBRUARY/26/uTL8CSzV_93bcd076a3594caca8e7b880af5766ac.png",
    ];
    res.json(imagesurls5);
  })
 router.get("/images6",(req,res)=>{
   const imagesurls6=[ 
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yrJ9o15l_06f85e217b104701aec6ce93c28e46fa.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/oCWlb7u4_17a5608b5a6d410da830b519b57da3b6.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/G8tg5Sl2_70a3ffda53da4adbbfbe6cad2b0a418b.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/qOsCixJM_9e023a3fbfcc48f78367ba593e64b8cb.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/r8nIwSKg_d9437733c64b42a49122dbcd98885706.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/MSX3QTMF_73993eeee48c472fa4f5c69b3696a0ca.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/of67fd3n_dcd2889a4a414ff9ab60ab881934b6ad.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/tRX72V2a_47fba08feddc4ad8b9ad5c8dc04c45b3.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/OJvOUlQW_415a6f82c0ff4c38a3b650c734d3b52e.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/RYMYFMOO_ab6eb526601841019b9acd933df1bed6.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/vEWFYOye_14f4f7547ecb4c079855f8301128df46.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/8nY49yv6_2ac65b37e50645728658d8d7a75a5fd1.png",
   "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/rTLGu6Uh_a7a63c3327d343a79a56f3a58eee52e3.png",
   ];
   res.json(imagesurls6);

 })

 router.get("/images7",(req,res)=>{
  const imagesurls7=[
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/21/LlqCI0On_dbbf994a09884dfc9478ef85e87baa98.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/WGQomsQY_973f1d43bcd2417ea7379b347fa8f12a.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/rtoQ3KM4_3250b4d6e5ac44b99a3f93961f18b8fe.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/87ncwlkH_24d479cde4d94f64917191d37f266ae1.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/QVN9XGMW_14d2456bd765404f8c4492a1e5aee096.jpg",

  ];
  res.json(imagesurls7);

 })


module.exports= router;

