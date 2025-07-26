// Makeup recommendation database
const makeupDatabase = {
    foundation: {
        oily: {
            fair: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation']
            },
            light: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation']
            },
            medium: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation']
            },
            olive: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation']
            },
            dark: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation']
            },
            deep: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation']
            }
        },
        dry: {
            fair: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation']
            },
            light: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation']
            },
            medium: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation']
            },
            olive: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation']
            },
            dark: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation']
            },
            deep: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation']
            }
        }
    },
    
    eyeshadow: {
        brown: ['Warm browns', 'Copper tones', 'Gold shimmer', 'Bronze shades'],
        blue: ['Copper and bronze', 'Warm browns', 'Peach tones', 'Gold shimmer'],
        green: ['Purple tones', 'Copper shades', 'Warm browns', 'Rose gold'],
        hazel: ['Purple tones', 'Green shades', 'Copper and bronze', 'Warm browns'],
        gray: ['Purple tones', 'Silver shimmer', 'Cool browns', 'Blue-gray shades']
    },
    
    lipstick: {
        fair: {
            warm: ['Peach nudes', 'Coral shades', 'Warm pinks', 'Terracotta'],
            cool: ['Cool pinks', 'Berry shades', 'Mauve tones', 'Cool nudes'],
            neutral: ['Rose nudes', 'Neutral pinks', 'Berry shades', 'Coral tones']
        },
        light: {
            warm: ['Peach nudes', 'Coral shades', 'Warm pinks', 'Terracotta'],
            cool: ['Cool pinks', 'Berry shades', 'Mauve tones', 'Cool nudes'],
            neutral: ['Rose nudes', 'Neutral pinks', 'Berry shades', 'Coral tones']
        },
        medium: {
            warm: ['Terracotta', 'Warm reds', 'Coral shades', 'Brown nudes'],
            cool: ['Cool reds', 'Berry shades', 'Mauve tones', 'Cool pinks'],
            neutral: ['Rose reds', 'Neutral reds', 'Berry shades', 'Coral tones']
        },
        olive: {
            warm: ['Terracotta', 'Warm reds', 'Coral shades', 'Brown nudes'],
            cool: ['Cool reds', 'Berry shades', 'Mauve tones', 'Cool pinks'],
            neutral: ['Rose reds', 'Neutral reds', 'Berry shades', 'Coral tones']
        },
        dark: {
            warm: ['Deep reds', 'Burgundy', 'Warm browns', 'Terracotta'],
            cool: ['Cool reds', 'Berry shades', 'Plum tones', 'Cool browns'],
            neutral: ['Rose reds', 'Neutral reds', 'Berry shades', 'Burgundy']
        },
        deep: {
            warm: ['Deep reds', 'Burgundy', 'Warm browns', 'Terracotta'],
            cool: ['Cool reds', 'Berry shades', 'Plum tones', 'Cool browns'],
            neutral: ['Rose reds', 'Neutral reds', 'Berry shades', 'Burgundy']
        }
    },
    
    // New makeup categories
    mascara: {
        volume: ['L\'Oreal Voluminous Lash Paradise', 'Maybelline Lash Sensational', 'CoverGirl LashBlast Volume'],
        length: ['Maybelline Great Lash', 'L\'Oreal Telescopic', 'CoverGirl Clump Crusher'],
        waterproof: ['Maybelline The Falsies Waterproof', 'L\'Oreal Voluminous Waterproof', 'CoverGirl LashBlast Waterproof'],
        natural: ['Glossier Lash Slick', 'Ilia Limitless Lash', 'Kosas Air Brow']
    },
    
    eyeliner: {
        liquid: ['Stila Stay All Day Waterproof Liquid Eyeliner', 'NYX Professional Makeup Epic Ink Liner', 'Maybelline Eye Studio Master Precise'],
        pencil: ['Urban Decay 24/7 Glide-On Eye Pencil', 'NYX Professional Makeup Slide On Pencil', 'Maybelline Eye Studio Master Drama'],
        gel: ['Maybelline Eye Studio Lasting Drama Gel Eyeliner', 'L\'Oreal Infallible Lacquer Liner', 'NYX Professional Makeup Gel Liner'],
        pen: ['Kat Von D Tattoo Liner', 'Stila Stay All Day Waterproof Liquid Eyeliner', 'NYX Professional Makeup Epic Ink Liner']
    },
    
    blush: {
        powder: ['NARS Blush', 'Milani Baked Blush', 'Wet n Wild Color Icon Blush', 'Tarte Amazonian Clay 12-Hour Blush'],
        cream: ['Glossier Cloud Paint', 'Milk Makeup Lip + Cheek', 'Fenty Beauty Cheeks Out Freestyle Cream Blush'],
        liquid: ['Benefit Benetint', 'Glossier Cloud Paint', 'Milk Makeup Lip + Cheek'],
        stick: ['Milk Makeup Lip + Cheek', 'Nudestix Nudies Matte', 'Fenty Beauty Cheeks Out Freestyle Cream Blush']
    },
    
    bronzer: {
        powder: ['Benefit Hoola Bronzer', 'Physicians Formula Butter Bronzer', 'Wet n Wild Color Icon Bronzer'],
        cream: ['Milk Makeup Baked Bronzer', 'Fenty Beauty Cheeks Out Freestyle Cream Bronzer', 'Nudestix Nudies Matte'],
        liquid: ['Milk Makeup Baked Bronzer', 'Fenty Beauty Cheeks Out Freestyle Cream Bronzer', 'Glossier Cloud Paint']
    },
    
    highlighter: {
        powder: ['Becca Shimmering Skin Perfector', 'Wet n Wild MegaGlo Highlighting Powder', 'Anastasia Beverly Hills Glow Kit'],
        cream: ['Glossier Haloscope', 'Milk Makeup Highlighter', 'Fenty Beauty Killawatt Freestyle Highlighter'],
        liquid: ['CoverFX Custom Enhancer Drops', 'Becca Shimmering Skin Perfector Liquid', 'Glossier Haloscope'],
        stick: ['Milk Makeup Highlighter', 'Glossier Haloscope', 'Fenty Beauty Killawatt Freestyle Highlighter']
    },
    
    concealer: {
        underEye: ['Tarte Shape Tape Concealer', 'Maybelline Instant Age Rewind', 'NARS Radiant Creamy Concealer'],
        spot: ['MAC Studio Finish Concealer', 'Maybelline Fit Me Concealer', 'NARS Radiant Creamy Concealer'],
        colorCorrecting: ['NYX Professional Makeup Color Correcting Palette', 'L\'Oreal Infallible Full Wear Concealer', 'Maybelline Master Camo Color Correcting Pen']
    },
    
    settingPowder: {
        translucent: ['Laura Mercier Translucent Loose Setting Powder', 'Coty Airspun Loose Face Powder', 'Maybelline Fit Me Loose Finishing Powder'],
        pressed: ['Rimmel Stay Matte Pressed Powder', 'Maybelline Fit Me Pressed Powder', 'CoverGirl Clean Pressed Powder'],
        colored: ['Ben Nye Banana Powder', 'Laura Mercier Translucent Loose Setting Powder', 'Coty Airspun Loose Face Powder']
    },
    
    primer: {
        face: ['Smashbox Photo Finish Foundation Primer', 'Maybelline Baby Skin Instant Pore Eraser', 'NYX Professional Makeup Studio Perfect Primer'],
        eye: ['Urban Decay Eyeshadow Primer Potion', 'NYX Professional Makeup Eyeshadow Base', 'Wet n Wild Photo Focus Eyeshadow Primer'],
        lip: ['MAC Prep + Prime Lip', 'NYX Professional Makeup Lip Primer', 'Urban Decay Ozone Lip Primer']
    },
    
    settingSpray: {
        matte: ['Urban Decay All Nighter Setting Spray', 'NYX Professional Makeup Matte Finish Setting Spray', 'Maybelline Lasting Fix Setting Spray'],
        dewy: ['Morphe Continuous Setting Mist', 'NYX Professional Makeup Dewy Finish Setting Spray', 'CoverGirl Outlast All-Day Setting Spray'],
        longWear: ['Urban Decay All Nighter Setting Spray', 'Benefit The POREfessional Setting Spray', 'MAC Fix+ Setting Spray']
    },
    
    lipBalm: {
        moisturizing: ['Burt\'s Bees Beeswax Lip Balm', 'EOS Smooth Sphere Lip Balm', 'ChapStick Classic Lip Balm', 'Carmex Classic Lip Balm'],
        tinted: ['Burt\'s Bees Tinted Lip Balm', 'Fresh Sugar Lip Treatment', 'Clinique Chubby Stick Moisturizing Lip Colour Balm', 'Nivea Lip Care'],
        medicated: ['Blistex Medicated Lip Balm', 'Carmex Medicated Lip Balm', 'Aquaphor Lip Repair', 'Dr. Dan\'s CortiBalm'],
        luxury: ['Fresh Sugar Lip Treatment', 'Dior Addict Lip Glow', 'Chanel Rouge Coco Baume', 'Yves Saint Laurent Volupté Tint-in-Balm']
    },
    
    lipScrub: {
        sugar: ['Lush Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub'],
        honey: ['Lush Honey Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub'],
        mint: ['Lush Mint Julips Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub'],
        berry: ['Lush Bubblegum Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub']
    },
    
    // Additional makeup categories
    eyebrow: {
        pencil: ['Anastasia Beverly Hills Brow Wiz', 'Benefit Precisely My Brow', 'NYX Professional Makeup Micro Brow Pencil', 'Maybelline Brow Ultra Slim'],
        powder: ['Anastasia Beverly Hills Brow Powder Duo', 'Benefit Brow Zings', 'NYX Professional Makeup Eyebrow Powder', 'Maybelline Brow Drama Pro Palette'],
        gel: ['Anastasia Beverly Hills Clear Brow Gel', 'Benefit Gimme Brow', 'NYX Professional Makeup Control Freak Eyebrow Gel', 'Maybelline Brow Fast Sculpt'],
        pomade: ['Anastasia Beverly Hills Dipbrow Pomade', 'Benefit Ka-Brow', 'NYX Professional Makeup Tame & Frame Tinted Brow Pomade', 'Maybelline Brow Drama Pomade']
    },
    
    eyelash: {
        curler: ['Shu Uemura Eyelash Curler', 'Tweezerman ProCurl Eyelash Curler', 'Revlon Eyelash Curler', 'Maybelline Eyelash Curler'],
        primer: ['L\'Oreal Voluminous Lash Primer', 'Urban Decay Subversion Lash Primer', 'Too Faced Better Than Sex Lash Primer', 'Benefit They\'re Real Lash Primer'],
        growth: ['RapidLash Eyelash Enhancing Serum', 'GrandeLASH-MD Lash Enhancing Serum', 'L\'Oreal Lash Serum Solution', 'Maybelline Lash Sensational Serum']
    },
    
    contour: {
        powder: ['Anastasia Beverly Hills Contour Kit', 'Kat Von D Shade + Light Contour Palette', 'NYX Professional Makeup Highlight & Contour Pro Palette', 'Wet n Wild Contour Palette'],
        cream: ['Anastasia Beverly Hills Cream Contour Kit', 'Kat Von D Shade + Light Crème Contour Palette', 'NYX Professional Makeup Highlight & Contour Pro Palette', 'Wet n Wild Contour Stick'],
        stick: ['Anastasia Beverly Hills Contour Stick', 'Kat Von D Shade + Light Crème Contour Palette', 'NYX Professional Makeup Wonder Stick', 'Wet n Wild Contour Stick']
    },
    
    colorCorrector: {
        green: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer'],
        peach: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer'],
        yellow: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer'],
        purple: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer']
    },
    
    lipLiner: {
        nude: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner'],
        red: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner'],
        pink: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner'],
        brown: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner']
    },
    
    lipGloss: {
        clear: ['Fenty Beauty Gloss Bomb', 'NYX Professional Makeup Butter Gloss', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss'],
        tinted: ['Fenty Beauty Gloss Bomb', 'NYX Professional Makeup Butter Gloss', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss'],
        shimmer: ['Fenty Beauty Gloss Bomb', 'NYX Professional Makeup Butter Gloss', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss'],
        plumping: ['Too Faced Lip Injection Extreme', 'NYX Professional Makeup Fat Oil Lip Drip', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss']
    },
    
    faceMask: {
        sheet: ['Dr. Jart+ Dermask Water Jet Vital Hydra Solution', 'Garnier Skin Naturals Hydra Bomb', 'Maybelline Face Studio Master Prime', 'L\'Oreal Paris Pure Clay Mask'],
        clay: ['Aztec Secret Indian Healing Clay', 'L\'Oreal Paris Pure Clay Mask', 'Maybelline Face Studio Master Prime', 'Garnier Skin Naturals Hydra Bomb'],
        peel: ['The Ordinary AHA 30% + BHA 2% Peeling Solution', 'Drunk Elephant T.L.C. Sukari Babyfacial', 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant', 'The Inkey List Beta Hydroxy Acid Serum']
    },
    
    skincare: {
        cleanser: ['CeraVe Hydrating Facial Cleanser', 'La Roche-Posay Toleriane Hydrating Gentle Cleanser', 'Neutrogena Ultra Gentle Daily Cleanser', 'Cetaphil Gentle Skin Cleanser'],
        moisturizer: ['CeraVe Daily Moisturizing Lotion', 'La Roche-Posay Double Repair Face Moisturizer', 'Neutrogena Hydro Boost Water Gel', 'Cetaphil Daily Hydrating Lotion'],
        serum: ['The Ordinary Niacinamide 10% + Zinc 1%', 'CeraVe Skin Renewing Vitamin C Serum', 'La Roche-Posay Pure Vitamin C Face Serum', 'Neutrogena Rapid Tone Repair Vitamin C Serum'],
        sunscreen: ['CeraVe AM Facial Moisturizing Lotion SPF 30', 'La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 60', 'Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 55', 'Cetaphil Daily Facial Moisturizer SPF 50']
    },
    
    tools: {
        brushes: ['Real Techniques Brushes', 'Morphe Brushes', 'Sigma Brushes', 'EcoTools Brushes'],
        sponges: ['Beautyblender', 'Real Techniques Miracle Complexion Sponge', 'EcoTools Total Perfecting Blender', 'Maybelline Master Blender Sponge'],
        tweezers: ['Tweezerman Slant Tweezer', 'Anastasia Beverly Hills Tweezers', 'Revlon Tweezers', 'Maybelline Tweezers'],
        sharpener: ['Urban Decay Grindhouse Sharpener', 'MAC Pencil Sharpener', 'NYX Professional Makeup Pencil Sharpener', 'Maybelline Pencil Sharpener']
    },
    
    nailPolish: {
        base: ['OPI Natural Nail Base Coat', 'Essie First Base Base Coat', 'Sally Hansen Hard as Nails Base Coat', 'Wet n Wild Base Coat'],
        color: ['OPI Nail Lacquer', 'Essie Nail Polish', 'Sally Hansen Insta-Dri', 'Wet n Wild Wild Shine'],
        top: ['OPI Top Coat', 'Essie Good to Go Top Coat', 'Sally Hansen Insta-Dri Top Coat', 'Wet n Wild Top Coat'],
        treatment: ['OPI Nail Envy', 'Essie Treat Love & Color', 'Sally Hansen Hard as Nails', 'Wet n Wild Nail Treatment']
    },
    
    perfume: {
        floral: ['Marc Jacobs Daisy', 'Viktor&Rolf Flowerbomb', 'Jo Malone London Peony & Blush Suede', 'Chanel Chance Eau Tendre', 'Dior Miss Dior', 'Yves Saint Laurent Libre'],
        fruity: ['Marc Jacobs Daisy Eau So Fresh', 'Viktor&Rolf Bonbon', 'Jo Malone London Nectarine Blossom & Honey', 'Chanel Chance Eau Vive', 'Dior Joy', 'Yves Saint Laurent Mon Paris'],
        oriental: ['Yves Saint Laurent Black Opium', 'Tom Ford Black Orchid', 'Jo Malone London Velvet Rose & Oud', 'Chanel Coco Mademoiselle', 'Dior Poison', 'Yves Saint Laurent Opium'],
        fresh: ['Marc Jacobs Daisy Dream', 'Viktor&Rolf Spicebomb', 'Jo Malone London Wood Sage & Sea Salt', 'Chanel Chance Eau Fraîche', 'Dior Sauvage', 'Yves Saint Laurent L\'Homme'],
        woody: ['Jo Malone London Wood Sage & Sea Salt', 'Tom Ford Oud Wood', 'Chanel Sycomore', 'Dior Fahrenheit', 'Yves Saint Laurent L\'Homme Libre'],
        musky: ['Jo Malone London Myrrh & Tonka', 'Tom Ford White Musk', 'Chanel No. 5', 'Dior Addict', 'Yves Saint Laurent Black Opium'],
        citrus: ['Jo Malone London Lime Basil & Mandarin', 'Tom Ford Neroli Portofino', 'Chanel Chance Eau Vive', 'Dior Eau Sauvage', 'Yves Saint Laurent L\'Homme Cologne'],
        gourmand: ['Viktor&Rolf Bonbon', 'Tom Ford Tobacco Vanille', 'Chanel Coco Mademoiselle', 'Dior Hypnotic Poison', 'Yves Saint Laurent Black Opium']
    },
    
    bathAndBody: {
        bodyWash: ['Dove Deep Moisture Body Wash', 'Olay Ultra Moisture Body Wash', 'Nivea Nourishing Body Wash', 'Aveeno Daily Moisturizing Body Wash', 'Cetaphil Gentle Skin Cleanser'],
        bodyLotion: ['Dove Deep Moisture Body Lotion', 'Olay Ultra Moisture Body Lotion', 'Nivea Nourishing Body Lotion', 'Aveeno Daily Moisturizing Lotion', 'Cetaphil Daily Hydrating Lotion'],
        bodyScrub: ['Tree Hut Shea Sugar Scrub', 'Dove Exfoliating Body Polish', 'Olay Exfoliating Body Wash', 'Nivea Exfoliating Body Scrub', 'Aveeno Positively Radiant Scrub'],
        bodyOil: ['Bio-Oil Skincare Oil', 'Palmer\'s Cocoa Butter Formula', 'Burt\'s Bees Mama Bee Nourishing Body Oil', 'Aveeno Daily Moisturizing Oil', 'Cetaphil Daily Hydrating Oil'],
        handCream: ['O\'Keeffe\'s Working Hands Hand Cream', 'Neutrogena Norwegian Formula Hand Cream', 'Aveeno Intense Relief Hand Cream', 'Cetaphil Therapeutic Hand Cream', 'Eucerin Advanced Repair Hand Cream'],
        footCream: ['O\'Keeffe\'s Healthy Feet Foot Cream', 'Neutrogena Norwegian Formula Foot Cream', 'Aveeno Intense Relief Foot Cream', 'Cetaphil Therapeutic Foot Cream', 'Eucerin Advanced Repair Foot Cream'],
        deodorant: ['Dove Advanced Care Antiperspirant', 'Secret Clinical Strength Antiperspirant', 'Degree Clinical Protection Antiperspirant', 'Suave Clinical Protection Antiperspirant', 'Ban Clinical Protection Antiperspirant'],
        shaveGel: ['Gillette Venus Shave Gel', 'Schick Hydro Silk Shave Gel', 'Dove Men+Care Shave Gel', 'Nivea Men Shave Gel', 'Aveeno Therapeutic Shave Gel']
    },
    
    hairCare: {
        shampoo: ['Olaplex No. 4 Bond Maintenance Shampoo', 'Briogeo Don\'t Despair, Repair! Shampoo', 'Not Your Mother\'s Naturals Shampoo', 'Herbal Essences Bio:Renew Shampoo'],
        conditioner: ['Olaplex No. 5 Bond Maintenance Conditioner', 'Briogeo Don\'t Despair, Repair! Conditioner', 'Not Your Mother\'s Naturals Conditioner', 'Herbal Essences Bio:Renew Conditioner'],
        mask: ['Olaplex No. 3 Hair Perfector', 'Briogeo Don\'t Despair, Repair! Deep Conditioning Mask', 'Not Your Mother\'s Naturals Hair Mask', 'Herbal Essences Bio:Renew Hair Mask'],
        styling: ['Olaplex No. 6 Bond Smoother', 'Briogeo Rosarco Milk Leave-In Conditioning Spray', 'Not Your Mother\'s Naturals Styling Products', 'Herbal Essences Bio:Renew Styling Products']
    }
};

// Product images database
const productImages = {
    // Foundation
    'Maybelline Fit Me': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'L\'Oreal True Match': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Revlon ColorStay': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'CoverGirl Clean': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'MAC Studio Fix': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Estée Lauder Double Wear': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Dior Forever': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Chanel Ultra Le Teint': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Yves Saint Laurent All Hours': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Eyeshadow
    'Urban Decay Naked': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Too Faced Chocolate Bar': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Anastasia Beverly Hills Modern Renaissance': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Huda Beauty Desert Dusk': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Pat McGrath Mothership': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Natasha Denona Gold': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Viseart Editorial Brights': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Charlotte Tilbury Luxury Palette': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Lipstick
    'MAC Ruby Woo': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'NARS Dragon Girl': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Charlotte Tilbury Pillow Talk': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Tom Ford Black Orchid': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Yves Saint Laurent Rouge Pur Couture': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Dior Rouge': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Chanel Rouge Allure': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Pat McGrath MatteTrance': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Mascara
    'Maybelline Great Lash': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'L\'Oreal Voluminous': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'CoverGirl LashBlast': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Benefit They\'re Real': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Too Faced Better Than Sex': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Urban Decay Perversion': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Lancôme Monsieur Big': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Dior Diorshow': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Blush
    'Milani Baked Blush': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'NYX Professional Makeup': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Benefit Hoola': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'NARS Orgasm': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Tarte Amazonian Clay': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Hourglass Ambient Lighting': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Charlotte Tilbury Cheek to Chic': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Pat McGrath Labs': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Perfume
    'Marc Jacobs Daisy': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Viktor&Rolf Flowerbomb': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Jo Malone London Peony & Blush Suede': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Chanel Chance Eau Tendre': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Dior Miss Dior': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Yves Saint Laurent Libre': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Bath & Body
    'Dove Deep Moisture Body Wash': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Olay Ultra Moisture Body Lotion': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Nivea Nourishing Body Wash': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Aveeno Daily Moisturizing Body Wash': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Cetaphil Gentle Skin Cleanser': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Tree Hut Shea Sugar Scrub': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Bio-Oil Skincare Oil': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    'Palmer\'s Cocoa Butter Formula': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain',
    
    // Default image for products without specific images
    'default': 'https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'
};

// Function to get product image
function getProductImage(productName) {
    if (productImages[productName]) {
        return productImages[productName];
    }
    
    // Try to find partial matches for brand names
    const brands = Object.keys(productImages);
    for (let brand of brands) {
        if (productName.includes(brand)) {
            return productImages[brand];
        }
    }
    
    return productImages['default'];
}

// Product purchase links database
const productLinks = {
    // Drugstore products
    'Maybelline Fit Me': 'https://www.ulta.com/p/maybelline-fit-me-matte-poreless-foundation-pimprod2008108',
    'L\'Oreal True Match': 'https://www.ulta.com/p/loreal-true-match-foundation-pimprod2008109',
    'Revlon ColorStay': 'https://www.ulta.com/p/revlon-colorstay-foundation-pimprod2008110',
    'CoverGirl Clean': 'https://www.ulta.com/p/covergirl-clean-foundation-pimprod2008111',
    'Wet n Wild Color Icon': 'https://www.ulta.com/p/wet-n-wild-color-icon-eyeshadow-pimprod2008112',
    'NYX Professional Makeup': 'https://www.ulta.com/p/nyx-professional-makeup-eyeshadow-pimprod2008113',
    'Maybelline Color Sensational': 'https://www.ulta.com/p/maybelline-color-sensational-lipstick-pimprod2008114',
    'Burt\'s Bees': 'https://www.ulta.com/p/burts-bees-beeswax-lip-balm-pimprod2008115',
    'ChapStick': 'https://www.ulta.com/p/chapstick-classic-lip-balm-pimprod2008116',
    'Carmex': 'https://www.ulta.com/p/carmex-classic-lip-balm-pimprod2008117',
    'EOS': 'https://www.ulta.com/p/eos-smooth-sphere-lip-balm-pimprod2008118',
    'ELF Lip Exfoliator': 'https://www.ulta.com/p/elf-lip-exfoliator-pimprod2008119',
    
    // Mid-range products
    'MAC Studio Fix': 'https://www.maccosmetics.com/product/13854/310/products/makeup/face-makeup/foundation/studio-fix-fluid-sp-nc15-mac',
    'Urban Decay Naked': 'https://www.ulta.com/p/urban-decay-naked-eyeshadow-palette-pimprod2008120',
    'Too Faced Chocolate Bar': 'https://www.ulta.com/p/too-faced-chocolate-bar-eyeshadow-palette-pimprod2008121',
    'NARS': 'https://www.narscosmetics.com/USA',
    'Fresh Sugar Lip Treatment': 'https://www.sephora.com/product/fresh-sugar-advanced-therapy-lip-treatment-P455456',
    'Clinique Chubby Stick': 'https://www.ulta.com/p/clinique-chubby-stick-moisturizing-lip-colour-balm-pimprod2008122',
    'Lush Lip Scrub': 'https://www.lush.com/us/en/p/mint-julips-lip-scrub',
    
    // High-end products
    'Estée Lauder Double Wear': 'https://www.esteelauder.com/product/26389/112420/product-catalog/makeup/face/foundation/double-wear-stay-in-place-foundation',
    'Dior Forever': 'https://www.dior.com/en_us/products/beauty-makeup-face-foundation-forever-foundation',
    'Chanel Ultra Le Teint': 'https://www.chanel.com/us/makeup/p/ultra-le-teint-ultrawear-all-day-comfort-flawless-finish-foundation/',
    'Yves Saint Laurent All Hours': 'https://www.yslbeautyus.com/makeup/face/foundation/all-hours-foundation/',
    'Pat McGrath Labs': 'https://www.patmcgrath.com/',
    'Charlotte Tilbury': 'https://www.charlottetilbury.com/',
    'Tom Ford': 'https://www.tomford.com/',
    'Dior Addict Lip Glow': 'https://www.dior.com/en_us/products/beauty-makeup-lips-lipstick-addict-lip-glow',
    'Chanel Rouge Coco Baume': 'https://www.chanel.com/us/makeup/p/rouge-coco-baume-hydrating-lip-balm/',
    
    // Luxury products
    'La Mer': 'https://www.cremedelamer.com/',
    'La Prairie': 'https://www.laprairie.com/',
    'Cle de Peau': 'https://www.cledepeau-beaute.com/',
    'Sisley': 'https://www.sisley-paris.com/',
    
    // Bath & Body products
    'Dove': 'https://www.dove.com/us/en/',
    'Olay': 'https://www.olay.com/us/en/',
    'Nivea': 'https://www.nivea.com/us/',
    'Aveeno': 'https://www.aveeno.com/',
    'Cetaphil': 'https://www.cetaphil.com/',
    'Tree Hut': 'https://www.treehutsheabutter.com/',
    'Bio-Oil': 'https://www.bio-oil.com/',
    'Palmer\'s': 'https://www.palmers.com/',
    'O\'Keeffe\'s': 'https://www.okeeffescompany.com/',
    'Neutrogena': 'https://www.neutrogena.com/',
    'Eucerin': 'https://www.eucerin.com/',
    'Gillette': 'https://www.gillette.com/',
    'Schick': 'https://www.schick.com/',
    'Secret': 'https://www.secret.com/',
    'Degree': 'https://www.degree.com/',
    'Suave': 'https://www.suave.com/',
    'Ban': 'https://www.ban.com/',
    
    // Perfume brands
    'Marc Jacobs': 'https://www.marcjacobs.com/',
    'Viktor&Rolf': 'https://www.viktor-rolf.com/',
    'Jo Malone London': 'https://www.jomalone.com/',
    'Bath & Body Works': 'https://www.bathandbodyworks.com/',
    'Victoria\'s Secret': 'https://www.victoriassecret.com/',
    'Pink': 'https://www.pink.com/',
    'Ariana Grande': 'https://www.arianagrande.com/'
};

// Function to get purchase link for a product
function getPurchaseLink(productName) {
    // Try to find exact match first
    if (productLinks[productName]) {
        return productLinks[productName];
    }
    
    // Try to find partial matches for brand names
    const brands = Object.keys(productLinks);
    for (let brand of brands) {
        if (productName.includes(brand)) {
            return productLinks[brand];
        }
    }
    
    // Default to general search links
    const searchTerms = {
        'Maybelline': 'https://www.ulta.com/brand/maybelline',
        'L\'Oreal': 'https://www.ulta.com/brand/loreal',
        'Revlon': 'https://www.ulta.com/brand/revlon',
        'CoverGirl': 'https://www.ulta.com/brand/covergirl',
        'Wet n Wild': 'https://www.ulta.com/brand/wet-n-wild',
        'NYX': 'https://www.ulta.com/brand/nyx-professional-makeup',
        'Burt\'s Bees': 'https://www.ulta.com/brand/burts-bees',
        'ChapStick': 'https://www.ulta.com/brand/chapstick',
        'Carmex': 'https://www.ulta.com/brand/carmex',
        'EOS': 'https://www.ulta.com/brand/eos',
        'ELF': 'https://www.ulta.com/brand/elf',
        'MAC': 'https://www.maccosmetics.com/',
        'Urban Decay': 'https://www.ulta.com/brand/urban-decay',
        'Too Faced': 'https://www.ulta.com/brand/too-faced',
        'NARS': 'https://www.narscosmetics.com/',
        'Fresh': 'https://www.sephora.com/brand/fresh',
        'Clinique': 'https://www.ulta.com/brand/clinique',
        'Lush': 'https://www.lush.com/',
        'Estée Lauder': 'https://www.esteelauder.com/',
        'Dior': 'https://www.dior.com/',
        'Chanel': 'https://www.chanel.com/',
        'Yves Saint Laurent': 'https://www.yslbeautyus.com/',
        'Pat McGrath Labs': 'https://www.patmcgrath.com/',
        'Charlotte Tilbury': 'https://www.charlottetilbury.com/',
        'Tom Ford': 'https://www.tomford.com/',
        'La Mer': 'https://www.cremedelamer.com/',
        'La Prairie': 'https://www.laprairie.com/',
        'Cle de Peau': 'https://www.cledepeau-beaute.com/',
        'Sisley': 'https://www.sisley-paris.com/',
        'Dove': 'https://www.dove.com/us/en/',
        'Olay': 'https://www.olay.com/us/en/',
        'Nivea': 'https://www.nivea.com/us/',
        'Aveeno': 'https://www.aveeno.com/',
        'Cetaphil': 'https://www.cetaphil.com/',
        'Tree Hut': 'https://www.treehutsheabutter.com/',
        'Bio-Oil': 'https://www.bio-oil.com/',
        'Palmer\'s': 'https://www.palmers.com/',
        'O\'Keeffe\'s': 'https://www.okeeffescompany.com/',
        'Neutrogena': 'https://www.neutrogena.com/',
        'Eucerin': 'https://www.eucerin.com/',
        'Gillette': 'https://www.gillette.com/',
        'Schick': 'https://www.schick.com/',
        'Secret': 'https://www.secret.com/',
        'Degree': 'https://www.degree.com/',
        'Suave': 'https://www.suave.com/',
        'Ban': 'https://www.ban.com/',
        'Marc Jacobs': 'https://www.marcjacobs.com/',
        'Viktor&Rolf': 'https://www.viktor-rolf.com/',
        'Jo Malone London': 'https://www.jomalone.com/',
        'Bath & Body Works': 'https://www.bathandbodyworks.com/',
        'Victoria\'s Secret': 'https://www.victoriassecret.com/',
        'Pink': 'https://www.pink.com/',
        'Ariana Grande': 'https://www.arianagrande.com/'
    };
    
    for (let brand in searchTerms) {
        if (productName.includes(brand)) {
            return searchTerms[brand];
        }
    }
    
    // Final fallback to general beauty retailers
    return 'https://www.ulta.com/';
}

// Budget-based product recommendations
const budgetProducts = {
    drugstore: {
        foundation: ['Maybelline Fit Me', 'L\'Oreal True Match', 'Revlon ColorStay', 'CoverGirl Clean'],
        eyeshadow: ['Wet n Wild Color Icon', 'NYX Professional Makeup', 'Maybelline The Nudes', 'CoverGirl TruNaked'],
        lipstick: ['Maybelline Color Sensational', 'L\'Oreal Color Riche', 'Revlon Super Lustrous', 'NYX Professional Makeup'],
        blush: ['Wet n Wild Color Icon', 'Maybelline Fit Me', 'NYX Professional Makeup', 'CoverGirl Cheekers'],
        mascara: ['Maybelline Great Lash', 'L\'Oreal Voluminous', 'CoverGirl LashBlast', 'Wet n Wild MegaLength'],
        eyeliner: ['NYX Professional Makeup Epic Ink', 'Maybelline Eye Studio', 'L\'Oreal Infallible', 'Wet n Wild H2O Proof'],
        bronzer: ['Physicians Formula Butter Bronzer', 'Wet n Wild Color Icon', 'Maybelline Fit Me', 'CoverGirl Clean'],
        highlighter: ['Wet n Wild MegaGlo', 'Maybelline Master Chrome', 'NYX Professional Makeup', 'CoverGirl Clean'],
        concealer: ['Maybelline Fit Me', 'L\'Oreal Infallible', 'CoverGirl Clean', 'Wet n Wild Photo Focus'],
        settingPowder: ['Coty Airspun', 'Maybelline Fit Me', 'CoverGirl Clean', 'Wet n Wild Photo Focus'],
        primer: ['Maybelline Baby Skin', 'NYX Professional Makeup', 'Wet n Wild Photo Focus', 'CoverGirl Clean'],
        settingSpray: ['NYX Professional Makeup', 'Maybelline Lasting Fix', 'CoverGirl Outlast', 'Wet n Wild Photo Focus'],
        lipBalm: ['Burt\'s Bees', 'ChapStick', 'Carmex', 'EOS'],
        lipScrub: ['ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub', 'ChapStick Lip Scrub', 'Carmex Lip Scrub'],
        eyebrow: ['NYX Professional Makeup', 'Maybelline', 'CoverGirl', 'Wet n Wild'],
        eyelash: ['Maybelline', 'L\'Oreal', 'CoverGirl', 'Revlon'],
        contour: ['NYX Professional Makeup', 'Wet n Wild', 'Maybelline', 'CoverGirl'],
        colorCorrector: ['NYX Professional Makeup', 'Maybelline', 'L\'Oreal', 'CoverGirl'],
        lipLiner: ['NYX Professional Makeup', 'Maybelline', 'CoverGirl', 'Wet n Wild'],
        lipGloss: ['NYX Professional Makeup', 'Maybelline', 'CoverGirl', 'Wet n Wild'],
        faceMask: ['L\'Oreal', 'Garnier', 'Maybelline', 'Neutrogena'],
        skincare: ['CeraVe', 'Neutrogena', 'Cetaphil', 'Garnier'],
        tools: ['EcoTools', 'Real Techniques', 'Maybelline', 'CoverGirl'],
        nailPolish: ['Wet n Wild', 'Sally Hansen', 'Revlon', 'Maybelline'],
        perfume: ['Bath & Body Works', 'Victoria\'s Secret', 'Pink', 'Ariana Grande'],
        hairCare: ['Herbal Essences', 'Not Your Mother\'s', 'Garnier', 'Pantene'],
        bathAndBody: ['Dove', 'Olay', 'Nivea', 'Aveeno', 'Cetaphil']
    },
    'mid-range': {
        foundation: ['MAC Studio Fix', 'Urban Decay Stay Naked', 'Too Faced Born This Way', 'NARS Natural Radiant'],
        eyeshadow: ['Urban Decay Naked', 'Too Faced Chocolate Bar', 'Anastasia Beverly Hills', 'Tarte Tartelette'],
        lipstick: ['MAC', 'Urban Decay Vice', 'Too Faced Melted', 'NARS Audacious'],
        blush: ['NARS', 'Tarte Amazonian Clay', 'Too Faced Love Flush', 'Urban Decay Afterglow'],
        mascara: ['Benefit They\'re Real', 'Urban Decay Perversion', 'Too Faced Better Than Sex', 'Tarte Lights Camera Lashes'],
        eyeliner: ['Urban Decay 24/7', 'Stila Stay All Day', 'Kat Von D Tattoo', 'Too Faced Sketch Marker'],
        bronzer: ['Benefit Hoola', 'Too Faced Chocolate Soleil', 'Tarte Amazonian Clay', 'Urban Decay Beached'],
        highlighter: ['Becca Shimmering Skin Perfector', 'Anastasia Beverly Hills Glow Kit', 'Too Faced Candlelight', 'Tarte Amazonian Clay'],
        concealer: ['Tarte Shape Tape', 'NARS Radiant Creamy', 'Urban Decay Naked Skin', 'Too Faced Born This Way'],
        settingPowder: ['Laura Mercier Translucent', 'Urban Decay Naked Skin', 'Too Faced Peach Perfect', 'Tarte Smooth Operator'],
        primer: ['Smashbox Photo Finish', 'Urban Decay Optical Illusion', 'Too Faced Hangover', 'Tarte Clean Slate'],
        settingSpray: ['Urban Decay All Nighter', 'Too Faced Hangover', 'Tarte Rainforest of the Sea', 'Benefit The POREfessional'],
        lipBalm: ['Fresh Sugar Lip Treatment', 'Clinique Chubby Stick', 'Burt\'s Bees Tinted', 'Nivea Lip Care'],
        lipScrub: ['Lush Lip Scrub', 'Fresh Sugar Lip Polish', 'Clinique Lip Scrub', 'Urban Decay Lip Scrub'],
        eyebrow: ['Anastasia Beverly Hills', 'Benefit', 'Urban Decay', 'Too Faced'],
        eyelash: ['Benefit', 'Urban Decay', 'Too Faced', 'Tarte'],
        contour: ['Anastasia Beverly Hills', 'Kat Von D', 'Urban Decay', 'Too Faced'],
        colorCorrector: ['Urban Decay', 'Too Faced', 'Tarte', 'NARS'],
        lipLiner: ['MAC', 'Urban Decay', 'Too Faced', 'NARS'],
        lipGloss: ['Fenty Beauty', 'Urban Decay', 'Too Faced', 'NARS'],
        faceMask: ['Fresh', 'GlamGlow', 'Origins', 'Clinique'],
        skincare: ['Clinique', 'Origins', 'Fresh', 'Kiehl\'s'],
        tools: ['Real Techniques', 'Morphe', 'Sigma', 'Urban Decay'],
        nailPolish: ['OPI', 'Essie', 'Butter London', 'Zoya'],
        perfume: ['Marc Jacobs', 'Viktor&Rolf', 'Jo Malone London', 'Chanel'],
        hairCare: ['Olaplex', 'Briogeo', 'Not Your Mother\'s', 'Living Proof'],
        bathAndBody: ['Fresh', 'Kiehl\'s', 'Origins', 'Clinique']
    },
    'high-end': {
        foundation: ['Estée Lauder Double Wear', 'Dior Forever', 'Chanel Ultra Le Teint', 'Yves Saint Laurent All Hours'],
        eyeshadow: ['Pat McGrath Labs', 'Natasha Denona', 'Viseart', 'Charlotte Tilbury'],
        lipstick: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Yves Saint Laurent'],
        blush: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Dior'],
        mascara: ['Dior Diorshow', 'Chanel Le Volume', 'Yves Saint Laurent Volume Effet Faux Cils', 'Tom Ford'],
        eyeliner: ['Dior Diorshow', 'Chanel Stylo Yeux', 'Yves Saint Laurent Dessin Du Regard', 'Tom Ford'],
        bronzer: ['Dior Diorskin', 'Chanel Soleil Tan', 'Yves Saint Laurent Terracotta', 'Tom Ford'],
        highlighter: ['Dior Diorskin', 'Chanel Poudre Signée', 'Yves Saint Laurent Touche Éclat', 'Tom Ford'],
        concealer: ['Dior Diorskin', 'Chanel Le Correcteur', 'Yves Saint Laurent Touche Éclat', 'Tom Ford'],
        settingPowder: ['Dior Diorskin', 'Chanel Poudre Universelle', 'Yves Saint Laurent Poudre Compacte', 'Tom Ford'],
        primer: ['Dior Diorskin', 'Chanel Le Blanc', 'Yves Saint Laurent Touche Éclat Blur', 'Tom Ford'],
        settingSpray: ['Dior Fix It', 'Chanel Le Blanc', 'Yves Saint Laurent All Hours', 'Tom Ford'],
        lipBalm: ['Dior Addict Lip Glow', 'Chanel Rouge Coco Baume', 'Yves Saint Laurent Volupté Tint-in-Balm', 'Tom Ford Lip Color'],
        lipScrub: ['Dior Lip Sugar Scrub', 'Chanel Lip Scrub', 'Yves Saint Laurent Lip Scrub', 'Tom Ford Lip Scrub'],
        eyebrow: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        eyelash: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        contour: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        colorCorrector: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        lipLiner: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        lipGloss: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        faceMask: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        skincare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        tools: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        nailPolish: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        perfume: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        hairCare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        bathAndBody: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford']
    },
    luxury: {
        foundation: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        eyeshadow: ['Pat McGrath Labs', 'Natasha Denona', 'Viseart', 'Charlotte Tilbury'],
        lipstick: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Yves Saint Laurent'],
        blush: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Dior'],
        mascara: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        eyeliner: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        bronzer: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        highlighter: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        concealer: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        settingPowder: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        primer: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        settingSpray: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        lipBalm: ['La Mer Lip Balm', 'La Prairie Lip Balm', 'Cle de Peau Lip Balm', 'Sisley Lip Balm'],
        lipScrub: ['La Mer Lip Scrub', 'La Prairie Lip Scrub', 'Cle de Peau Lip Scrub', 'Sisley Lip Scrub'],
        eyebrow: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        eyelash: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        contour: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        colorCorrector: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        lipLiner: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        lipGloss: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        faceMask: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        skincare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        tools: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        nailPolish: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        perfume: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        hairCare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        bathAndBody: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley']
    }
};

// Occasion-based recommendations
const occasionTips = {
    everyday: {
        foundation: 'Light to medium coverage for a natural look',
        eyeshadow: 'Neutral tones and subtle shimmer',
        lipstick: 'MLBB (My Lips But Better) shades',
        blush: 'Natural flush colors',
        mascara: 'Natural-looking, lengthening formula',
        eyeliner: 'Subtle brown or soft black',
        bronzer: 'Light, natural contour',
        highlighter: 'Subtle glow, not too shimmery',
        concealer: 'Light coverage for under eyes',
        settingPowder: 'Translucent powder for shine control',
        primer: 'Hydrating or mattifying based on skin type',
        settingSpray: 'Light hold for natural finish',
        lipBalm: 'Hydrating, natural finish',
        lipScrub: 'Gentle exfoliation 2-3 times per week',
        eyebrow: 'Natural, defined brows',
        eyelash: 'Natural curl and definition',
        contour: 'Subtle definition',
        colorCorrector: 'Target specific concerns',
        lipLiner: 'Natural lip definition',
        lipGloss: 'Hydrating shine',
        faceMask: 'Weekly treatment',
        skincare: 'Daily routine essential',
        tools: 'Quality brushes for application',
        nailPolish: 'Neutral, professional colors',
        perfume: 'Light, fresh scent',
        hairCare: 'Gentle, nourishing products',
        bathAndBody: 'Gentle, hydrating body care'
    },
    work: {
        foundation: 'Medium coverage with a matte finish',
        eyeshadow: 'Professional neutrals and subtle definition',
        lipstick: 'Professional pinks and nudes',
        blush: 'Subtle, natural-looking blush',
        mascara: 'Defining, not too dramatic',
        eyeliner: 'Clean, precise lines',
        bronzer: 'Subtle contour for definition',
        highlighter: 'Minimal, professional glow',
        concealer: 'Full coverage for blemishes',
        settingPowder: 'Matte finish for long wear',
        primer: 'Pore-filling and long-wear',
        settingSpray: 'Long-lasting, transfer-proof',
        lipBalm: 'Tinted balm for subtle color',
        lipScrub: 'Gentle exfoliation before lipstick',
        eyebrow: 'Professional, groomed brows',
        eyelash: 'Defined, not dramatic',
        contour: 'Subtle professional contour',
        colorCorrector: 'Conceal imperfections',
        lipLiner: 'Clean, precise lines',
        lipGloss: 'Professional shine',
        faceMask: 'Weekly maintenance',
        skincare: 'Daily professional routine',
        tools: 'Professional application tools',
        nailPolish: 'Neutral, office-appropriate',
        perfume: 'Subtle, professional scent',
        hairCare: 'Professional styling products',
        bathAndBody: 'Professional, long-lasting body care'
    },
    special: {
        foundation: 'Full coverage with a radiant finish',
        eyeshadow: 'Sophisticated neutrals with a pop of color',
        lipstick: 'Classic reds and sophisticated nudes',
        blush: 'Buildable, long-lasting formulas',
        mascara: 'Volumizing and dramatic',
        eyeliner: 'Precise, long-wearing formulas',
        bronzer: 'Warm, buildable contour',
        highlighter: 'Intense glow and shimmer',
        concealer: 'Full coverage for flawless finish',
        settingPowder: 'Radiant finish with staying power',
        primer: 'Illuminating and smoothing',
        settingSpray: 'Long-lasting with dewy finish',
        lipBalm: 'Luxurious, long-lasting hydration',
        lipScrub: 'Intensive exfoliation for smooth lips',
        eyebrow: 'Sophisticated, defined brows',
        eyelash: 'Elegant curl and volume',
        contour: 'Sophisticated definition',
        colorCorrector: 'Flawless base preparation',
        lipLiner: 'Precise, long-wearing lines',
        lipGloss: 'Luxurious shine',
        faceMask: 'Pre-event treatment',
        skincare: 'Luxurious pre-event routine',
        tools: 'Professional application tools',
        nailPolish: 'Sophisticated, elegant colors',
        perfume: 'Elegant, sophisticated scent',
        hairCare: 'Luxurious styling products',
        bathAndBody: 'Luxurious, indulgent body care'
    },
    party: {
        foundation: 'Full coverage with a matte or dewy finish',
        eyeshadow: 'Bold colors, metallics, and glitter',
        lipstick: 'Bold reds, berries, and metallics',
        blush: 'Intense, pigmented colors',
        mascara: 'Maximum volume and drama',
        eyeliner: 'Bold, creative looks',
        bronzer: 'Intense contour and warmth',
        highlighter: 'Intense shimmer and glow',
        concealer: 'Full coverage for photos',
        settingPowder: 'Matte or shimmer based on look',
        primer: 'Long-wear and smoothing',
        settingSpray: 'Maximum hold and transfer-proof',
        lipBalm: 'Long-wearing, non-sticky formula',
        lipScrub: 'Deep exfoliation for bold lipstick',
        eyebrow: 'Bold, dramatic brows',
        eyelash: 'Maximum drama and volume',
        contour: 'Intense, dramatic contour',
        colorCorrector: 'Full coverage correction',
        lipLiner: 'Bold, dramatic lines',
        lipGloss: 'Intense shine and sparkle',
        faceMask: 'Pre-party treatment',
        skincare: 'Pre-party prep routine',
        tools: 'Professional party tools',
        nailPolish: 'Bold, party-ready colors',
        perfume: 'Bold, attention-grabbing scent',
        hairCare: 'Party-ready styling products',
        bathAndBody: 'Bold, long-lasting body care'
    }
};

// Get form elements
const form = document.getElementById('preferencesForm');
const recommendationsDiv = document.getElementById('recommendations');
const recommendationsContent = document.getElementById('recommendationsContent');

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        skinType: document.getElementById('skinType').value,
        skinTone: document.getElementById('skinTone').value,
        undertone: document.getElementById('undertone').value,
        eyeColor: document.getElementById('eyeColor').value,
        hairColor: document.getElementById('hairColor').value,
        budget: document.getElementById('budget').value,
        occasion: document.getElementById('occasion').value,
        allergies: document.getElementById('allergies').value
    };
    
    // Generate recommendations
    const recommendations = generateRecommendations(formData);
    
    // Store recommendations globally for filtering
    allRecommendations = recommendations;
    
    // Display recommendations
    displayRecommendations(recommendations, formData);
    
    // Show recommendations section
    recommendationsDiv.classList.remove('hidden');
    
    // Show filter controls after recommendations are generated
    document.getElementById('filterControls').style.display = 'block';
    
    // Reset filter states
    currentFilter = 'all';
    currentSearch = '';
    currentSort = 'category';
    
    // Reset filter UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    if (document.getElementById('searchInput')) {
        document.getElementById('searchInput').value = '';
    }
    if (document.getElementById('sortSelect')) {
        document.getElementById('sortSelect').value = 'category';
    }
    
    // Scroll to recommendations
    recommendationsDiv.scrollIntoView({ behavior: 'smooth' });
});

function generateRecommendations(data) {
    const recommendations = {
        foundation: [],
        eyeshadow: [],
        lipstick: [],
        blush: [],
        mascara: [],
        eyeliner: [],
        bronzer: [],
        highlighter: [],
        concealer: [],
        settingPowder: [],
        primer: [],
        settingSpray: [],
        lipBalm: [],
        lipScrub: [],
        eyebrow: [],
        eyelash: [],
        contour: [],
        colorCorrector: [],
        lipLiner: [],
        lipGloss: [],
        faceMask: [],
        skincare: [],
        tools: [],
        nailPolish: [],
        perfume: [],
        hairCare: [],
        bathAndBody: [],
        tips: {}
    };
    
    // Foundation recommendations
    if (makeupDatabase.foundation[data.skinType] && 
        makeupDatabase.foundation[data.skinType][data.skinTone] && 
        makeupDatabase.foundation[data.skinType][data.skinTone][data.undertone]) {
        recommendations.foundation = makeupDatabase.foundation[data.skinType][data.skinTone][data.undertone];
    }
    
    // Eyeshadow recommendations
    if (makeupDatabase.eyeshadow[data.eyeColor]) {
        recommendations.eyeshadow = makeupDatabase.eyeshadow[data.eyeColor];
    }
    
    // Lipstick recommendations
    if (makeupDatabase.lipstick[data.skinTone] && makeupDatabase.lipstick[data.skinTone][data.undertone]) {
        recommendations.lipstick = makeupDatabase.lipstick[data.skinTone][data.undertone];
    }
    
    // Budget-based recommendations for all categories
    if (budgetProducts[data.budget]) {
        recommendations.foundation = budgetProducts[data.budget].foundation;
        recommendations.eyeshadow = budgetProducts[data.budget].eyeshadow;
        recommendations.lipstick = budgetProducts[data.budget].lipstick;
        recommendations.blush = budgetProducts[data.budget].blush;
        recommendations.mascara = budgetProducts[data.budget].mascara;
        recommendations.eyeliner = budgetProducts[data.budget].eyeliner;
        recommendations.bronzer = budgetProducts[data.budget].bronzer;
        recommendations.highlighter = budgetProducts[data.budget].highlighter;
        recommendations.concealer = budgetProducts[data.budget].concealer;
        recommendations.settingPowder = budgetProducts[data.budget].settingPowder;
        recommendations.primer = budgetProducts[data.budget].primer;
        recommendations.settingSpray = budgetProducts[data.budget].settingSpray;
        recommendations.lipBalm = budgetProducts[data.budget].lipBalm;
        recommendations.lipScrub = budgetProducts[data.budget].lipScrub;
        recommendations.eyebrow = budgetProducts[data.budget].eyebrow;
        recommendations.eyelash = budgetProducts[data.budget].eyelash;
        recommendations.contour = budgetProducts[data.budget].contour;
        recommendations.colorCorrector = budgetProducts[data.budget].colorCorrector;
        recommendations.lipLiner = budgetProducts[data.budget].lipLiner;
        recommendations.lipGloss = budgetProducts[data.budget].lipGloss;
        recommendations.faceMask = budgetProducts[data.budget].faceMask;
        recommendations.skincare = budgetProducts[data.budget].skincare;
        recommendations.tools = budgetProducts[data.budget].tools;
        recommendations.nailPolish = budgetProducts[data.budget].nailPolish;
        recommendations.perfume = budgetProducts[data.budget].perfume;
        recommendations.hairCare = budgetProducts[data.budget].hairCare;
        recommendations.bathAndBody = budgetProducts[data.budget].bathAndBody;
    }
    
    // Occasion tips
    if (occasionTips[data.occasion]) {
        recommendations.tips = occasionTips[data.occasion];
    }
    
    return recommendations;
}

function displayRecommendations(recommendations, data) {
    let html = `
        <div class="success-message">
            <strong>Perfect! Here are your personalized makeup recommendations based on your profile:</strong>
        </div>
    `;
    
    // Foundation recommendations
    if (recommendations.foundation.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Foundation Recommendations</h3>
                <p>Based on your ${data.skinType} skin, ${data.skinTone} tone, and ${data.undertone} undertone:</p>
                <div class="product-list">
        `;
        
        recommendations.foundation.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for ${data.skinType} skin with ${data.undertone} undertones</div>
                        <div class="product-price">Budget: ${data.budget}</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyeshadow recommendations
    if (recommendations.eyeshadow.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyeshadow Recommendations</h3>
                <p>Based on your ${data.eyeColor} eyes:</p>
                <div class="product-list">
        `;
        
        recommendations.eyeshadow.forEach(shade => {
            const purchaseLink = getPurchaseLink(shade);
            const productImage = getProductImage(shade);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${shade}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${shade}</div>
                        <div class="product-description">Will make your ${data.eyeColor} eyes pop!</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lipstick recommendations
    if (recommendations.lipstick.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lipstick Recommendations</h3>
                <p>Based on your ${data.skinTone} skin with ${data.undertone} undertones:</p>
                <div class="product-list">
        `;
        
        recommendations.lipstick.forEach(shade => {
            const purchaseLink = getPurchaseLink(shade);
            const productImage = getProductImage(shade);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${shade}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${shade}</div>
                        <div class="product-description">Complements your skin tone perfectly</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Blush recommendations
    if (recommendations.blush.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Blush Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.blush.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Great quality within your budget range</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Mascara recommendations
    if (recommendations.mascara.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Mascara Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.mascara.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for enhancing your ${data.eyeColor} eyes</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyeliner recommendations
    if (recommendations.eyeliner.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyeliner Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.eyeliner.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Great for defining your ${data.eyeColor} eyes</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Bronzer recommendations
    if (recommendations.bronzer.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Bronzer Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.bronzer.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for warming up your ${data.skinTone} skin</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Highlighter recommendations
    if (recommendations.highlighter.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Highlighter Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.highlighter.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for adding glow to your ${data.skinTone} skin</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Concealer recommendations
    if (recommendations.concealer.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Concealer Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.concealer.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            const productImage = getProductImage(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productImage}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2536650?fmt=jpeg&qlt=90&wid=400&hei=400&fit=constrain'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Great for covering imperfections on ${data.skinType} skin</div>
                        <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Setting Powder recommendations
    if (recommendations.settingPowder.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Setting Powder Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.settingPowder.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for setting makeup on ${data.skinType} skin</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Primer recommendations
    if (recommendations.primer.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Primer Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.primer.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for prepping ${data.skinType} skin</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Setting Spray recommendations
    if (recommendations.settingSpray.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Setting Spray Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.settingSpray.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for locking in your makeup</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Balm recommendations
    if (recommendations.lipBalm.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Balm Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipBalm.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for keeping your lips hydrated</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Scrub recommendations
    if (recommendations.lipScrub.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Scrub Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipScrub.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for exfoliating and smoothing lips</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyebrow recommendations
    if (recommendations.eyebrow.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyebrow Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.eyebrow.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for defining and shaping your brows</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyelash recommendations
    if (recommendations.eyelash.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyelash Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.eyelash.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for enhancing your ${data.eyeColor} eyes</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Contour recommendations
    if (recommendations.contour.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Contour Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.contour.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for defining your ${data.skinTone} skin</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Color Corrector recommendations
    if (recommendations.colorCorrector.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Color Corrector Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.colorCorrector.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for correcting specific skin concerns</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Liner recommendations
    if (recommendations.lipLiner.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Liner Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipLiner.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for defining and shaping your lips</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Gloss recommendations
    if (recommendations.lipGloss.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Gloss Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipGloss.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for adding shine and hydration</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Face Mask recommendations
    if (recommendations.faceMask.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Face Mask Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.faceMask.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for treating your ${data.skinType} skin</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Skincare recommendations
    if (recommendations.skincare.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Skincare Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.skincare.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Essential for your ${data.skinType} skin routine</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Tools recommendations
    if (recommendations.tools.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Makeup Tools Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.tools.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Essential tools for perfect application</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Nail Polish recommendations
    if (recommendations.nailPolish.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Nail Polish Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.nailPolish.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for completing your look</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Perfume recommendations
    if (recommendations.perfume.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Perfume Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.perfume.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect finishing touch for your look</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Hair Care recommendations
    if (recommendations.hairCare.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Hair Care Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.hairCare.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Essential for healthy, beautiful hair</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Bath & Body recommendations
    if (recommendations.bathAndBody.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Bath & Body Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.bathAndBody.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for pampering your body and skin</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Occasion tips
    if (recommendations.tips && Object.keys(recommendations.tips).length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Tips for ${data.occasion.charAt(0).toUpperCase() + data.occasion.slice(1)} Makeup</h3>
                <div class="product-list">
        `;
        
        Object.entries(recommendations.tips).forEach(([category, tip]) => {
            html += `
                <div class="product-item">
                    <div class="product-name">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
                    <div class="product-description">${tip}</div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Allergy considerations
    if (data.allergies && data.allergies.trim() !== '') {
        html += `
            <div class="recommendation-item">
                <h3>⚠️ Allergy Considerations</h3>
                <p>Based on your allergies/sensitivities: ${data.allergies}</p>
                <p><strong>Always patch test new products and check ingredient lists carefully!</strong></p>
            </div>
        `;
    }
    
    recommendationsContent.innerHTML = html;
}

// Global variables for filtering
let allRecommendations = [];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'category';

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add focus effects to form elements
    const formElements = document.querySelectorAll('select, textarea');
    
    formElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Setup filter functionality
    setupFilters();
});

// Filter functionality
function setupFilters() {
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-category');
            applyFilters();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase();
            applyFilters();
        });
    }
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            applyFilters();
        });
    }
}

function applyFilters() {
    if (!allRecommendations || Object.keys(allRecommendations).length === 0) return;
    
    let filteredRecommendations = {};
    
    // Apply category filter
    Object.keys(allRecommendations).forEach(category => {
        if (currentFilter === 'all' || matchesCategoryFilter(category, currentFilter)) {
            filteredRecommendations[category] = allRecommendations[category];
        }
    });
    
    // Apply search filter
    if (currentSearch) {
        Object.keys(filteredRecommendations).forEach(category => {
            filteredRecommendations[category] = filteredRecommendations[category].filter(product => 
                product.toLowerCase().includes(currentSearch)
            );
        });
    }
    
    // Remove empty categories
    Object.keys(filteredRecommendations).forEach(category => {
        if (filteredRecommendations[category].length === 0) {
            delete filteredRecommendations[category];
        }
    });
    
    // Apply sorting
    const sortedRecommendations = sortRecommendations(filteredRecommendations);
    
    // Re-display with filtered results
    const formData = {
        skinType: document.getElementById('skinType').value,
        skinTone: document.getElementById('skinTone').value,
        undertone: document.getElementById('undertone').value,
        eyeColor: document.getElementById('eyeColor').value,
        hairColor: document.getElementById('hairColor').value,
        budget: document.getElementById('budget').value,
        occasion: document.getElementById('occasion').value,
        allergies: document.getElementById('allergies').value
    };
    
    displayRecommendations(sortedRecommendations, formData);
}

function matchesCategoryFilter(category, filter) {
    const categoryMap = {
        'makeup': ['foundation', 'concealer', 'primer', 'settingPowder', 'settingSpray', 'eyeshadow', 'eyeliner', 'mascara', 'eyebrow', 'eyelash', 'blush', 'bronzer', 'highlighter', 'contour', 'colorCorrector', 'lipstick', 'lipLiner', 'lipGloss', 'lipBalm', 'lipScrub'],
        'skincare': ['skincare', 'faceMask'],
        'body': ['bathAndBody'],
        'fragrance': ['perfume'],
        'tools': ['tools', 'nailPolish']
    };
    
    return categoryMap[filter] && categoryMap[filter].includes(category);
}

function sortRecommendations(recommendations) {
    const sorted = {};
    const categories = Object.keys(recommendations);
    
    switch (currentSort) {
        case 'name':
            categories.sort();
            break;
        case 'price-low':
            categories.sort((a, b) => getCategoryPrice(a) - getCategoryPrice(b));
            break;
        case 'price-high':
            categories.sort((a, b) => getCategoryPrice(b) - getCategoryPrice(a));
            break;
        default: // category
            categories.sort();
    }
    
    categories.forEach(category => {
        sorted[category] = recommendations[category];
    });
    
    return sorted;
}

function getCategoryPrice(category) {
    const priceMap = {
        'foundation': 1, 'concealer': 1, 'primer': 1, 'settingPowder': 1, 'settingSpray': 1,
        'eyeshadow': 2, 'eyeliner': 2, 'mascara': 2, 'eyebrow': 2, 'eyelash': 2,
        'blush': 3, 'bronzer': 3, 'highlighter': 3, 'contour': 3, 'colorCorrector': 3,
        'lipstick': 4, 'lipLiner': 4, 'lipGloss': 4, 'lipBalm': 4, 'lipScrub': 4,
        'skincare': 5, 'faceMask': 5, 'tools': 6, 'nailPolish': 6, 'perfume': 7, 'bathAndBody': 8
    };
    return priceMap[category] || 0;
} 