import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Wilbert",
      email: "wilbert777@icloud.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@icloud.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  models: [
    {
      name: "Lais De Leon",
      slug: "lais-de-leon",
      featured: true,
      tv_special: true,
      main_title: "Brazil Beauty Queen 2011",
      titles: [],
      height: "5'3'",
      hair: "Brown",
      eyes: "Hazel",
      category: "Brazil",
      short_description:
        "Lais De Leon from Brazil travels the world as a model, being featured on billboards, magazines, calendars and national TV commercials.",
      desc_paragraph1:
        "Lais De Leon from Brazil travels the world as a model, being featured on billboards, magazines, calendars and national TV commercials.",
      desc_paragraph2:
        "Lais represented Brazil at the International Finals of Hawaiian Tropic and she has been a finalist three times on Maxim Home Town Hotties.",
      desc_paragraph3:
        "Currently Lais is modeling for several companies, including a popular international swimwear company and she is expanding into acting for TV commercials. Lais De Leon has extensive experience in doing promotions, pageants, bikini contests, and fitness modeling. She has many talents and she is increasing her acting skills with TV commercials.",
      desc_paragraph4: "",
      featured_image: "/models/images/lais-de-leon/featured_image.jpg",
      images: [
        "/models/images/lais-de-leon/p1.jpg",
        "/models/images/lais-de-leon/p2.jpg",
        "/models/images/lais-de-leon/p3.jpg",
        "/models/images/lais-de-leon/p4.jpg",
        "/models/images/lais-de-leon/p5.jpg",
        "/models/images/lais-de-leon/p6.jpg",
        "/models/images/lais-de-leon/p7.jpg",
        "/models/images/lais-de-leon/p8.jpg",
      ],
    },

    {
      name: "Kathryn Stone",
      slug: "kathryn-stone",
      featured: true,
      tv_special: false,
      main_title: "American Beauty Queen 2011",
      titles: [],
      height: "",
      hair: "",
      eyes: "",
      category: "American",
      short_description: "",

      desc_paragraph1: "",

      desc_paragraph2: "",

      desc_paragraph3: "",

      desc_paragraph4: "",
      featured_image: "/models/images/kathryn-stone/featured_image.jpg",
      images: [
        "/models/images/kathryn-stone/p1.jpg",
        "/models/images/kathryn-stone/p2.jpg",
        "/models/images/kathryn-stone/p3.jpg",
        "/models/images/kathryn-stone/p4.jpg",
        "/models/images/kathryn-stone/p5.jpg",
        "/models/images/kathryn-stone/p6.jpg",
        "/models/images/kathryn-stone/p7.jpg",
        "/models/images/kathryn-stone/p8.jpg",
      ],
    },

    {
      name: "Ariana Varela",
      slug: "ariana-varela",
      featured: true,
      tv_special: false,
      main_title: "Asia Beauty Queen 2011",
      titles: ["Miss Asia USA 2010"],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were both Miss Monterey Park title holders and were in the Miss California U.S.A. Pageants, and Aunt Lisa Manibog went on to win the Miss Philippines U.S.A. and Miss Philippine International in Manila, which propelled her to the Miss International Pageant in Japan in 1983. Her cousin, Francel Manibog Caracol, was also Miss Monterey Park, and eventually, won a runner up position in the Miss World Beauty Pageant in London in 1986.",

      desc_paragraph1:
        "Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were both Miss Monterey Park title holders and were in the Miss California U.S.A. Pageants, and Aunt Lisa Manibog went on to win the Miss Philippines U.S.A. and Miss Philippine International in Manila, which propelled her to the Miss International Pageant in Japan in 1983. Her cousin, Francel Manibog Caracol, was also Miss Monterey Park, and eventually, won a runner up position in the Miss World Beauty Pageant in London in 1986.",

      desc_paragraph2:
        "Grandpa Monty was an Olympic wrestler and the first Filipino mayor to be elected in the U.S. Ariana was national tap-dance champion three years in a row before she turned ten and shares her family's natural love of music, island culture, rhythm and heritage (Costa Rican from her father, as well as Filipino, Spanish and French), and all communities have pridefully claimed her as their own.",

      desc_paragraph3:
        "Varela's very first pageant, she absolutely had no prior experience in pageants, and she swept the title over the other Asian country representatives from across the U.S. for Miss Asia U.S.A. 2010.",

      desc_paragraph4:
        "It's not a surprise that Ariana is very smart: 'Potential means nothing without the desire and the drive to actually achieve something with it,' she says. 'I feel blessed to have so many cultures in my background.' Valera is in her 2nd year of pre-law and her gown was designed by superstar designer Joey Galon.",
      featured_image: "/models/images/ariana-varela/featured_image.jpg",
      images: [
        "/models/images/ariana-varela/p1.jpg",
        "/models/images/ariana-varela/p2.jpg",
        "/models/images/ariana-varela/p3.jpg",
        "/models/images/ariana-varela/p4.jpg",
        "/models/images/ariana-varela/p5.jpg",
        "/models/images/ariana-varela/p6.jpg",
        "/models/images/ariana-varela/p7.jpg",
        "/models/images/ariana-varela/p8.jpg",
      ],
    },

    {
      name: "Giselle Capdevila",
      slug: "giselle-capdevila",
      featured: true,
      tv_special: true,
      main_title: "Cover Girl Model",
      titles: ["TV Commercial Model", "International Model"],
      height: "5'11''",
      hair: "Black",
      eyes: "Green",
      category: "Latina",
      short_description:
        "Giselle Capdevila has an amazing story. Born and raised in Cuba, Giselle's family miraculously escaped Cuba in a small manmade boat in 2005, arriving days later to the shores of the USA under political asylum. Giselle soon moved to Las Vegas where she graduated high school and then began modeling for Ed Hardy, True Religion and Sketchers.",

      desc_paragraph1:
        "Giselle Capdevila has an amazing story. Born and raised in Cuba, Giselle's family miraculously escaped Cuba in a small manmade boat in 2005, arriving days later to the shores of the USA under political asylum. Giselle soon moved to Las Vegas where she graduated high school and then began modeling for Ed Hardy, True Religion and Sketchers.",

      desc_paragraph2:
        "Giselle represented Cuba as Miss Cuba 2010 in the world Miss International Pageant held in China in November 2010. Giselle then entered as one of over two hundred candidates in the Latina Beauty Queen Pageant and was victorious in winning the title of Latina Beauty Queen 2011. According to Giselle, 'This past year has been one of the most rewarding times of my life. I have been actively involved in causes for women, health organizations and Latinas. I'm so proud of my culture and heritage and I have been reaching out to all of Latina America and helping in whatever way I can.'",

      desc_paragraph3: "",
      desc_paragraph4: "",
      featured_image: "/models/images/giselle-capdevila/featured_image.jpg",
      images: [
        "/models/images/giselle-capdevila/p1.jpg",
        "/models/images/giselle-capdevila/p2.jpg",
        "/models/images/giselle-capdevila/p3.jpg",
        "/models/images/giselle-capdevila/p4.jpg",
        "/models/images/giselle-capdevila/p5.jpg",
        "/models/images/giselle-capdevila/p6.jpg",
        "/models/images/giselle-capdevila/p7.jpg",
        "/models/images/giselle-capdevila/p8.jpg",
      ],
    },

    {
      name: "Andrea Prias",
      slug: "andrea-prias",
      featured: true,
      tv_special: true,
      main_title: "Ms Columbia 2015",
      titles: ["International Actress", "TV Host", "Magazine Cover Model"],
      height: "5'7''",
      hair: "Blonde",
      eyes: "Green",
      category: "Latina",
      short_description:
        "Andrea grew up in Bogota, Columbia and loved being in front of the camera right from the start. As a teenager, she acted in play theatre shows and started competing in beauty pageants and kept on winning them.",

      desc_paragraph1:
        "Andrea grew up in Bogota, Columbia and loved being in front of the camera right from the start. As a teenager, she acted in play theatre shows and started competing in beauty pageants and kept on winning them.",

      desc_paragraph2:
        "According to Andrea, 'We all have the ability to do extraordinary and unique things and we all have a special purpose.'",

      desc_paragraph3:
        "It has to start with an appreciation for what is given to you. We're all different and have things about ourselves that we like and don't like... particularly models and actors.' While looking over various acting opportunities, Andrea Prias keeps in the limelight as a professional model and TV Host. Keep an eye out for Andrea as she is destined for stardom.",
      desc_paragraph4: "",

      featured_image: "/models/images/andrea-prias/featured_image.jpg",
      images: [
        "/models/images/andrea-prias/p1.jpg",
        "/models/images/andrea-prias/p2.jpg",
        "/models/images/andrea-prias/p3.jpg",
        "/models/images/andrea-prias/p4.jpg",
        "/models/images/andrea-prias/p5.jpg",
        "/models/images/andrea-prias/p6.jpg",
        "/models/images/andrea-prias/p7.jpg",
        "/models/images/andrea-prias/p8.jpg",
      ],
    },

    {
      name: "Luisa Diaz",
      slug: "luisa-diaz",
      featured: true,
      tv_special: false,
      main_title: "Ms Venezuela 2015",
      titles: ["TV Host & Actress", "Featured Model"],
      height: "",
      hair: "",
      eyes: "",
      category: "Latina",
      short_description:
        "Luisa Diaz grew up in Venezuela and loved being in front of the camera right from the start. As a teenager, she acted in theatre shows and started competing in beauty pageants and kept on winning them all the way to Ms Venezuela 1999.",

      desc_paragraph1:
        "Luisa Diaz grew up in Venezuela and loved being in front of the camera right from the start. As a teenager, she acted in theatre shows and started competing in beauty pageants and kept on winning them all the way to Ms Venezuela 1999.",

      desc_paragraph2:
        "Luisa spent 10 years developing and training for beauty pageants and competed for Miss Globe in Europe. After TV appearances in Venezuela, Luisa came to America, where she has been the host of her own Spanish TV show for three years that has been broadcasted on the WB Network. Luisa was featured in the TV Series ER and she is looking over various acting opportunities in Los Angeles where she is destined for stardom.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/luisa-diaz/featured_image.jpg",
      images: ["/models/images/luisa-diaz/p1.jpg"],
    },

    {
      name: "Yvette Lopez",
      slug: "yvette-lopez",
      featured: false,
      tv_special: false,
      main_title: "International Model",
      titles: ["TV Actress"],
      height: "5'4''",
      hair: "Dark Brown",
      eyes: "Brown",
      category: "Latina",
      short_description:
        "Yvette Lopez has appeared in Playboy Magazine four times, Maxim Magazine, Low Rider Magazine and other high profile publications. She is an actress appearing on shows such as CSI and Chris Angel Mind Freak while also doing music videos, commercials and magazine features.",

      desc_paragraph1:
        "Yvette Lopez has appeared in Playboy Magazine four times, Maxim Magazine, Low Rider Magazine and other high profile publications. She is an actress appearing on shows such as CSI and Chris Angel Mind Freak while also doing music videos, commercials and magazine features.",

      desc_paragraph2:
        "Yvette Lopez grew up in Santa Fe with a family of entertainers. She started competing in beauty pageants and was runner up as Miss Hawaiian Tropic. Yvette has been heavily involved in the fashion industry - from swimwear, lingerie to fashion shows and TV commercials, striking poses in exotic locations for top name brands and television ads.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/yvette-lopez/featured_image.jpg",
      images: ["/models/images/yvette-lopez/p1.jpg"],
    },

    {
      name: "Snoe Blac",
      slug: "snoe-blac",
      featured: false,
      tv_special: false,
      main_title: "",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Snoe Blac, a beautiful Korean American was our runner up in the Bahamas TV pilot 'Last Beauty Queen Standing', representing the Asia Beauty Queen Team. Snoe began modeling over six years ago and loves being in front of the camera modeling swimwear and fashion.",

      desc_paragraph1:
        "Snoe Blac, a beautiful Korean American was our runner up in the Bahamas TV pilot 'Last Beauty Queen Standing', representing the Asia Beauty Queen Team. Snoe began modeling over six years ago and loves being in front of the camera modeling swimwear and fashion.",

      desc_paragraph2:
        "Snoe has extensive experience in doing promotions, pageants, bikini contests, and fitness modeling. Her talents include dancing and she is increasing her acting skills with TV commercials.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/snoe-blac/featured_image.jpg",
      images: ["/models/images/snoe-blac/p1.jpg"],
    },

    {
      name: "Gina Deziree",
      slug: "gina-deziree",
      tv_special: false,
      featured: false,
      main_title: "",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Gina began modeling over six years ago and loves being in front of the camera modeling swimwear and fashion.",

      desc_paragraph1:
        "Gina began modeling over six years ago and loves being in front of the camera modeling swimwear and fashion.",

      desc_paragraph2:
        "Gina has extensive experience in doing promotions, pageants, bikini contests, and fitness modeling. Her talents include dancing and she is increasing her acting skills with TV commercials.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/gina-deziree/featured_image.jpg",
      images: ["/models/images/gina-deziree/p1.jpg"],
    },

    {
      name: "Marketa Janska",
      slug: "marketa-janska",
      featured: false,
      tv_special: false,
      main_title: "Playboy Playmate July 2003",
      titles: ["Professional Singer", "International Actress", "TV Host"],
      height: "5'7''",
      hair: "Blonde",
      eyes: "Green",
      category: "European",
      short_description:
        "Marketa Janska grew up in Czech Republic and loved being in front of the camera right from the start. As a teenager, she acted in play theatre shows and started competing in beauty pageants and kept on winning them, including Miss Teenage Czech Repubic 1996.",

      desc_paragraph1:
        "Marketa Janska grew up in Czech Republic and loved being in front of the camera right from the start. As a teenager, she acted in play theatre shows and started competing in beauty pageants and kept on winning them, including Miss Teenage Czech Repubic 1996.",

      desc_paragraph2:
        "According to Marketa, 'We all have the ability to do extraordinary and unique things and we all have a special purpose. It has to start with an appreciation for what is given to you. We're all different and have things about ourselves that we like and don't like... particularly models and actors.'",

      desc_paragraph3:
        "Marketa Janska was featured on the cover of Playboy in July 2003 as the Playboy Playmate and the featured centerfold which drew international attention to her beauty as well as singing and acting abilities. She has been featured on The Girls Next Door, the Sharon Osbourne show, MTV, and CSI Miami.",

      desc_paragraph4:
        "While looking over various acting opportunities, Marketa Janska keeps in the limelight as a professional singer and TV Host. Keep an eye out for Marketa as she is destined for stardom.",

      featured_image: "/models/images/marketa-janska/featured_image.jpg",
      images: ["/models/images/marketa-janska/p1.jpg"],
    },

    {
      name: "Olga",
      slug: "olga",
      featured: false,
      tv_special: false,
      main_title: "",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Olga grew up in Russia and loved being in front of the camera right from the start. As a teenager, she acted in theatre shows and started competing in beauty pageants, winning her first beauty pageant when she was 8 years old and winning 15 pageants in total.",

      desc_paragraph1:
        "Olga grew up in Russia and loved being in front of the camera right from the start. As a teenager, she acted in theatre shows and started competing in beauty pageants, winning her first beauty pageant when she was 8 years old and winning 15 pageants in total.",
      desc_paragraph2:
        "Olga competed for Miss Globe in Europe and after TV appearances, Olga came to America, where she was the host of her own Russian TV show for three years that has been broadcasted on different Networks and she interviewed celebrities such as Oprah Winfrey and many others.",

      desc_paragraph3:
        "Olga was featured in the TV Series ER and and just finish the pilot of her upcoming Talk show called Olga.",

      desc_paragraph4: "",

      featured_image: "/models/images/olga/featured_image.jpg",
      images: [],
    },

    {
      name: "Nina Kaczorowski",
      slug: "nina-kaczorowski",
      featured: false,
      tv_special: false,
      main_title: "Poland",
      titles: ["International Actress", "Magazize Cover Model"],
      height: "5'7''",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Nina K, as she is better known, has successfully combined her classic European looks with her spit-fire personality to land roles in blockbusters such as AUSTIN POWERS: GOLDMEMBER, MINORITY REPORT and A SIMPLE PLAN.",

      desc_paragraph1:
        "Nina K, as she is better known, has successfully combined her classic European looks with her spit-fire personality to land roles in blockbusters such as AUSTIN POWERS: GOLDMEMBER, MINORITY REPORT and A SIMPLE PLAN.",

      desc_paragraph2:
        "Nina has also graced the covers of many magazines, most recently MAXIM, FHM, and the cover of Men's EDGE. In addition, she has appeared in high profile films such as ONCE UPON A TIME IN AMERICA and TOMCATS. Most recently, Nina has just completed stunt work for the film TRANSFORMERS, directed by Michael Bay. Nina K, already a high profile cover model is well on her way to becoming a top actress.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/nina-kaczorowski/featured_image.jpg",
      images: [],
    },

    {
      name: "Alicia Caldwell",
      slug: "alicia-caldwell",
      featured: false,
      tv_special: false,
      main_title: "",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Exotic",
      short_description: "",

      desc_paragraph1: "",

      desc_paragraph2: "",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/alicia-caldwell/featured_image.jpg",
      images: [],
    },

    {
      name: "Sophia Ricciardelli",
      slug: "sophia-ricciardelli",
      featured: false,
      tv_special: true,
      main_title: "Italy 2015",
      titles: ["International Model", "Singer / Dancer"],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Sophia Ricciardelli is an International Model and Singer with great potential as a beauty queen representing Italy.",

      desc_paragraph1:
        "Sophia Ricciardelli is an International Model and Singer with great potential as a beauty queen representing Italy.",

      desc_paragraph2:
        "She won over the judges among many others seeking to be Italy Beauty Queen 2015 because of her many talents as a singer and dancer as well as her warm personality and determination to win and be very competitive.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/sophia-ricciardelli/featured_image.jpg",
      images: [
        "/models/images/sophia-ricciardelli/p1.jpg",
        "/models/images/sophia-ricciardelli/p2.jpg",
        "/models/images/sophia-ricciardelli/p3.jpg",
        "/models/images/sophia-ricciardelli/p4.jpg",
        "/models/images/sophia-ricciardelli/p5.jpg",
        "/models/images/sophia-ricciardelli/p6.jpg",
        "/models/images/sophia-ricciardelli/p7.jpg",
        "/models/images/sophia-ricciardelli/p8.jpg",
      ],
    },

    {
      name: "Julienne Deleon",
      slug: "juliene-deleon",
      featured: false,
      tv_special: true,
      main_title: "Philippines 2015",
      titles: ["International Model"],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Julienne DeLeon is a beauty queen from the Philippines, where she has strong family ties. Julienne is an International Model and aspiring actress with great potential representing the Philippines.",

      desc_paragraph1:
        "Julienne DeLeon is a beauty queen from the Philippines, where she has strong family ties. Julienne is an International Model and aspiring actress with great potential representing the Philippines.",

      desc_paragraph2:
        "She won over the judges to be Philippines Beauty Queen 2015 because of her many talents and determination to win and be very competitive. She is on her way to becoming an international artist and actress with a strong passion for international causes and charities.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/julienne-deleon/featured_image.jpg",
      images: [
        "/models/images/julienne-deleon/p1.jpg",
        "/models/images/julienne-deleon/p2.jpg",
        "/models/images/julienne-deleon/p3.jpg",
        "/models/images/julienne-deleon/p4.jpg",
        "/models/images/julienne-deleon/p5.jpg",
        "/models/images/julienne-deleon/p6.jpg",
        "/models/images/julienne-deleon/p7.jpg",
        "/models/images/julienne-deleon/p8.jpg",
      ],
    },

    {
      name: "Erica Vanlee",
      slug: "erica-vanlee",
      featured: false,
      tv_special: true,
      main_title: "Spain 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Erica Vanlee has a sharp wit with a great sense of humor. She has spent years working with circus performers maneuvering high above the stage in silks strung from the ceiling.",

      desc_paragraph1:
        "Erica Vanlee has a sharp wit with a great sense of humor. She has spent years working with circus performers maneuvering high above the stage in silks strung from the ceiling.",

      desc_paragraph2:
        "With her powerful talent and undeniable beauty, Erica won over the judges to represent Spain in Battle of the Beauty Queens!",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/erica-vanlee/featured_image.jpg",
      images: [
        "/models/images/erica-vanlee/p1.jpg",
        "/models/images/erica-vanlee/p2.jpg",
        "/models/images/erica-vanlee/p3.jpg",
        "/models/images/erica-vanlee/p4.jpg",
        "/models/images/erica-vanlee/p5.jpg",
        "/models/images/erica-vanlee/p6.jpg",
        "/models/images/erica-vanlee/p7.jpg",
      ],
    },

    {
      name: "Diem Tran",
      slug: "diem-tran",
      featured: false,
      tv_special: true,
      main_title: "Vietnam 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Diem Tran is from Vietnam, where she has strong family ties. Diem is an International Model and Photographer with great potential as a beauty queen representing Vietnam.",

      desc_paragraph1:
        "Diem Tran is from Vietnam, where she has strong family ties. Diem is an International Model and Photographer with great potential as a beauty queen representing Vietnam.",

      desc_paragraph2:
        "She won over the judges to be Vietnam Beauty Queen 2013 because of her many talents and determination to win and be very competitive. She is on her way to becoming a international DJ with a strong passion for music.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/diem-tran/featured_image.jpg",
      images: [
        "/models/images/diem-tran/p1.jpg",
        "/models/images/diem-tran/p2.jpg",
        "/models/images/diem-tran/p3.jpg",
        "/models/images/diem-tran/p4.jpg",
        "/models/images/diem-tran/p5.jpg",
      ],
    },

    {
      name: "Jamillette",
      slug: "jamillette",
      featured: false,
      tv_special: true,
      main_title: "Lebanon 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description: "",

      desc_paragraph1: "",

      desc_paragraph2: "",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/jamillette/featured_image.jpg",
      images: [
        "/models/images/jamillette/p1.jpg",
        "/models/images/jamillette/p2.jpg",
        "/models/images/jamillette/p3.jpg",
        "/models/images/jamillette/p4.jpg",
        "/models/images/jamillette/p5.jpg",
        "/models/images/jamillette/p6.jpg",
        "/models/images/jamillette/p7.jpg",
      ],
    },

    {
      name: "Rachelle Ryerson",
      slug: "rachelle-ryerson",
      featured: false,
      tv_special: true,
      main_title: "France 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Rachelle Ryerson is a International Model and Actress with great potential as a beauty queen representing France.",

      desc_paragraph1:
        "Rachelle Ryerson is a International Model and Actress with great potential as a beauty queen representing France.",

      desc_paragraph2:
        "She won over the judges among many others seeking to be France Beauty Queen 2013 because of her many talents as a singer and actress .Her role model is French actress Brigitte Bardot.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/rachelle-ryerson/featured_image.jpg",
      images: [
        "/models/images/rachelle-ryerson/p1.jpg",
        "/models/images/rachelle-ryerson/p2.jpg",
        "/models/images/rachelle-ryerson/p3.jpg",
        "/models/images/rachelle-ryerson/p4.jpg",
        "/models/images/rachelle-ryerson/p5.jpg",
        "/models/images/rachelle-ryerson/p6.jpg",
        "/models/images/rachelle-ryerson/p7.jpg",
      ],
    },

    {
      name: "Michelle Mccoy",
      slug: "michelle-mccoy",
      featured: false,
      tv_special: true,
      main_title: "Ireland 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Michelle McCoy is a International Model and Dancer with great potential as a beauty queen representing Ireland. Michelle has been a dancer since age 3, and a model since age 10 and easily won over the judges looking over many others seeking to be Ireland Beauty Queen 2013.",

      desc_paragraph1:
        "Michelle McCoy is a International Model and Dancer with great potential as a beauty queen representing Ireland. Michelle has been a dancer since age 3, and a model since age 10 and easily won over the judges looking over many others seeking to be Ireland Beauty Queen 2013.",

      desc_paragraph2:
        "Michelle is a competitive dancer, choreographer and over 14 years in beauty pageants, winning several titles.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/michelle-mccoy/featured_image.jpg",
      images: [
        "/models/images/michelle-mccoy/p1.jpg",
        "/models/images/michelle-mccoy/p2.jpg",
        "/models/images/michelle-mccoy/p3.jpg",
        "/models/images/michelle-mccoy/p4.jpg",
        "/models/images/michelle-mccoy/p5.jpg",
        "/models/images/michelle-mccoy/p6.jpg",
        "/models/images/michelle-mccoy/p7.jpg",
      ],
    },

    {
      name: "Lilian Aguilar",
      slug: "lilian-aguilar",
      featured: false,
      tv_special: true,
      main_title: "Mexico 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Latina",
      short_description:
        "Lilian Aguilar is from Nogales Sonora Mexico since age 14 Lilian has been very active in the world of pageants and modeling. Lilian won Miss Prensa Latina 2010, Miss Beauty Blue 2012 .",

      desc_paragraph1:
        "Lilian Aguilar is from Nogales Sonora Mexico since age 14 Lilian has been very active in the world of pageants and modeling. Lilian won Miss Prensa Latina 2010, Miss Beauty Blue 2012 .",

      desc_paragraph2:
        "After moving to the USA, on August 2012, Lilian became the first Latina to be crowned Ms USA Globe. Lilian was selected over twenty five other beauty queens from Mexico seeking to be Mexico Beauty Queen 2015.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/lilian-aguilar/featured_image.jpg",
      images: [
        "/models/images/lilian-aguilar/p1.jpg",
        "/models/images/lilian-aguilar/p2.jpg",
        "/models/images/lilian-aguilar/p3.jpg",
        "/models/images/lilian-aguilar/p4.jpg",
      ],
    },

    {
      name: "Victoria Zhong",
      slug: "victoria-zhong",
      featured: false,
      tv_special: true,
      main_title: "China 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Victoria Zhong is a International Model and Singer with great potential as a beauty queen representing China. Victoria graduated from the Xinghai Conservatory of Music, in Guangzhou,China.",

      desc_paragraph1:
        "Victoria Zhong is a International Model and Singer with great potential as a beauty queen representing China. Victoria graduated from the Xinghai Conservatory of Music, in Guangzhou,China.",

      desc_paragraph2:
        "Victoria has been a singer since age 18, and a model since age 16, easily winning over the judges and being selected over twenty other beauty queens seeking to be China Beauty Queen 2015. Victoria is a competitive singer,with over 6 years experience in beauty pageants, winning Miss Asia 2009, Best Talent Award.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/victoria-zhong/featured_image.jpg",
      images: [
        "/models/images/victoria-zhong/p1.jpg",
        "/models/images/victoria-zhong/p2.jpg",
        "/models/images/victoria-zhong/p3.jpg",
        "/models/images/victoria-zhong/p4.jpg",
        "/models/images/victoria-zhong/p5.jpg",
        "/models/images/victoria-zhong/p6.jpg",
        "/models/images/victoria-zhong/p7.jpg",
      ],
    },

    {
      name: "Veronica",
      slug: "veronica",
      featured: false,
      tv_special: true,
      main_title: "Puerto Rico 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Latina",
      short_description:
        "Veronica Rivera grew up in San Juan, Puerto Rico where she began her modeling career. She has been featured in many national calendars, magazines, and commercials. Throughout her career she has competed, and placed, in national pageants such as Hawaiian Tropics and Bikini Invitational.",

      desc_paragraph1:
        "Veronica Rivera grew up in San Juan, Puerto Rico where she began her modeling career. She has been featured in many national calendars, magazines, and commercials. Throughout her career she has competed, and placed, in national pageants such as Hawaiian Tropics and Bikini Invitational.",

      desc_paragraph2:
        "Veronica is a great dancer, and her wholesome personality and intellect won the judges over to represent Puerto Rico in the Battle of The Beauty Queens!",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/veronica/featured_image.jpg",
      images: [
        "/models/images/veronica/p1.jpg",
        "/models/images/veronica/p2.jpg",
        "/models/images/veronica/p3.jpg",
      ],
    },

    {
      name: "Cecilia Howard",
      slug: "cecilia-howard",
      featured: false,
      tv_special: true,
      main_title: "Uruguay 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Latina",
      short_description:
        "Cecilia Howard has proven to be a great potential to represent Uruguay with her many years of pageant experience and her competitive hunger to be the best!",

      desc_paragraph1:
        "Cecilia Howard has proven to be a great potential to represent Uruguay with her many years of pageant experience and her competitive hunger to be the best!",

      desc_paragraph2:
        "Cecilia moved to the United States at the age of 18, leaving everything behind seeking the American dream. Never afraid of challenges, Cecilia worked her way through college and has represented Uruguay in numerous beauty contests, leading her a position for the ultimate challenge on Battle of the Beauty Queens.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/cecilia-howard/featured_image.jpg",
      images: [
        "/models/images/cecilia-howard/p1.jpg",
        "/models/images/cecilia-howard/p2.jpg",
        "/models/images/cecilia-howard/p3.jpg",
        "/models/images/cecilia-howard/p4.jpg",
        "/models/images/cecilia-howard/p5.jpg",
        "/models/images/cecilia-howard/p6.jpg",
        "/models/images/cecilia-howard/p7.jpg",
      ],
    },

    {
      name: "Kristi Toguchi",
      slug: "kristi-toguchi",
      featured: false,
      tv_special: true,
      main_title: "",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Kristi Toguchi is a world class entertainer and athlete. Kristi continues the tradition of magic in her family as a 3rd generation magician,as well as the art of Aerial Silk and contortion.",

      desc_paragraph1:
        "Kristi Toguchi is a world class entertainer and athlete. Kristi continues the tradition of magic in her family as a 3rd generation magician,as well as the art of Aerial Silk and contortion.",

      desc_paragraph2:
        "With her Amazing variety of talent as well as beauty, it was an easy choice for the judges to have Kristi represent Japan!",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/kristi-toguchi/featured_image.jpg",
      images: [
        "/models/images/kristi-toguchi/p1.jpg",
        "/models/images/kristi-toguchi/p2.jpg",
        "/models/images/kristi-toguchi/p3.jpg",
        "/models/images/kristi-toguchi/p4.jpg",
        "/models/images/kristi-toguchi/p5.jpg",
      ],
    },

    {
      name: "Maha Bute",
      slug: "maha-bute",
      featured: false,
      tv_special: true,
      main_title: "Pakistan 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "Asia",
      short_description:
        "Well educated a beautiful, Maha is a great potential for the Battle of the Beauty Queens as a representative for Pakistan.",

      desc_paragraph1:
        "Well educated a beautiful, Maha is a great potential for the Battle of the Beauty Queens as a representative for Pakistan.",

      desc_paragraph2:
        "She is completely focused on properly representing modern Pakistan-American women throughout the competition, while still respecting her culture and religion at the same time. She won over the judges with her great looks, personality, and determination to win.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/maha-bute/featured_image.jpg",
      images: [
        "/models/images/maha-bute/p1.jpg",
        "/models/images/maha-bute/p2.jpg",
        "/models/images/maha-bute/p3.jpg",
        "/models/images/maha-bute/p4.jpg",
      ],
    },

    {
      name: "Vanda Dita Gallo",
      slug: "vanda-dita-gallo",
      featured: false,
      tv_special: true,
      main_title: "International Fashion Model",
      titles: ["TV Commercial Model"],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description:
        "Vanda Dita Gallo is a beauty queen from Slovkia, having won the Miss Beauty of Eastern Europe pageant in 2010. A well experience International fashion model in dozens of popular magazines plus over 100 Worldwide Fashion Runway Shows.",

      desc_paragraph1:
        "Vanda Dita Gallo is a beauty queen from Slovkia, having won the Miss Beauty of Eastern Europe pageant in 2010. A well experience International fashion model in dozens of popular magazines plus over 100 Worldwide Fashion Runway Shows.",

      desc_paragraph2:
        "Vanda is also an actress for TV commercials internationally and she won Slovkia Beauty Queen 2013, earning her to compete in Battle of the Beauty Queens TV show.",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/vanda-dita-gallo/featured_image.jpg",
      images: [
        "/models/images/vanda-dita-gallo/p1.jpg",
        "/models/images/vanda-dita-gallo/p2.jpg",
        "/models/images/vanda-dita-gallo/p3.jpg",
        "/models/images/vanda-dita-gallo/p4.jpg",
        "/models/images/vanda-dita-gallo/p5.jpg",
        "/models/images/vanda-dita-gallo/p6.jpg",
        "/models/images/vanda-dita-gallo/p7.jpg",
      ],
    },

    {
      name: "Maja",
      slug: "maja",
      featured: true,
      tv_special: true,
      main_title: "Crotia 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description: "",

      desc_paragraph1: "",

      desc_paragraph2: "",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/maja/featured_image.jpg",
      images: [
        "/models/images/maja/p1.jpg",
        "/models/images/maja/p2.jpg",
        "/models/images/maja/p3.jpg",
        "/models/images/maja/p4.jpg",
        "/models/images/maja/p5.jpg",
        "/models/images/maja/p6.jpg",
        "/models/images/maja/p7.jpg",
      ],
    },

    {
      name: "Mina",
      slug: "mina",
      featured: false,
      tv_special: true,
      main_title: "Canada 2015",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description: "",

      desc_paragraph1: "",

      desc_paragraph2: "",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/mina/featured_image.jpg",
      images: [
        "/models/images/mina/p1.jpg",
        "/models/images/mina/p2.jpg",
        "/models/images/mina/p3.jpg",
        "/models/images/mina/p4.jpg",
        "/models/images/mina/p5.jpg",
        "/models/images/mina/p6.jpg",
        "/models/images/mina/p7.jpg",
      ],
    },

    {
      name: "Sally",
      slug: "sally",
      featured: false,
      tv_special: true,
      main_title: "",
      titles: [""],
      height: "",
      hair: "",
      eyes: "",
      category: "European",
      short_description: "",

      desc_paragraph1: "",

      desc_paragraph2: "",

      desc_paragraph3: "",

      desc_paragraph4: "",

      featured_image: "/models/images/sally/featured_image.jpg",
      images: [
        "/models/images/sally/p1.jpg",
        "/models/images/sally/p2.jpg",
        "/models/images/sally/p3.jpg",
        "/models/images/sally/p4.jpg",
        "/models/images/sally/p5.jpg",
        "/models/images/sally/p6.jpg",
      ],
    },
  ],
};

export default data;
