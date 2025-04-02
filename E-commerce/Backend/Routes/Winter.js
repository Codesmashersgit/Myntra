const express = require("express");
const router = express.Router();

router.get("/winter", (req, res) => {
  const winter = [
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/HxskTQy0_59508c4300b54b5d9d88359725b5d1cf.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/06edfQt8_afaed61d9bcd420b8473d6baa1589940.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/siJHb5cn_c057fa3942814af6a69518ba08c6e1c9.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/Pxh40Tos_3ad1bfbcf4664348b7085a6d2046cccd.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/qz6lYblh_66f6c4b262344edd918c0284b15484fb.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/idfQiUc0_02a70c66d82040d9b9d0c6bad491ea70.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/Nu2e2Kt8_ffd035a2f446479a9ffde6db35bb4906.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/9mPqaUL3_81db2226481341789af513993a6c57e8.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/rBUH5NEm_c471020698ab4d7a9d685f2de625f96b.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/5UxqxODG_a2803dbf4dc64125bd8bff9e5c802882.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/6EJ47yEK_53d6ddc97dad4bf08b05fcc01568c4fb.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/bYeg9aQJ_2a915cabbb6f4fb7ae54c8dc1d60227a.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/QrSiaeDt_c985a27686bf48139177be9696c0e71c.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/18/ojiPnxmT_e1c69e4c593e4e049889dc3a462c8233.png",
  ];
  res.json(winter);
});

module.exports = router;
