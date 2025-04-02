const express= require("express");
const router= express.Router();

router.get("/categorycart", (req, res) => {
    const categorycart=[
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5GPoLjgx_802886f8b9c74273803313b1103a8e16.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/VfNti6y8_a2e5ae944ecc4736b18efb8a75b1e191.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/uwqXL3Kq_0396ac2e5a1a4c12af1eec55c14917c8.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/3Vmva6Mn_d1d1003350df4a33be4218faf45bca1d.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5rDi1B23_c892152411964fd09fc7f6efd04c5fa0.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oyv2rmcn_4b883a02a10d43c1adb2a8b2f598324d.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/G0tDeU5X_47e68f1ab94a4289842265de4d1b6e83.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/iDYvU5BX_4a545298ef67430b8f42bc0566a925d1.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/gx4ejH2p_e11304b9b8fe400baa493609fe88e365.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oa2sAEOX_a55bd8360faa48eeb39ae724b06b86ce.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/7LrUb6vm_e526c192a4844543bc3fc489719493b2.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/9zRKW9Gx_67351a535dd64b2aa2debb194edc0f27.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/J4F7z8Yi_de5328531e58424dbcc62f62c8678936.jpg',
          'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/XkkXn3CY_fb58dc77984f4f1d93c536db6d9258c6.jpg',
          ''

    ]
    res.json(categorycart);
});


module.exports= router;