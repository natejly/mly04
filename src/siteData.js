const wixImage = (name, width = 1200, height = 900, fit = 'fill') =>
  `https://static.wixstatic.com/media/${name}/v1/${fit}/w_${width},h_${height},q_85,enc_avif,quality_auto/${name}`

export const profile = {
  name: 'Melana Ly',
  title: 'Mechanical Engineer',
}

export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Engineering Projects', href: '/engineering-projects' },
  { label: 'Co-op Experience', href: '/co-op-experience' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  contact: { label: 'Contact', href: '/contact' },
  resume: {
    label: 'Resume',
    href: 'https://86e2a733-f536-49f8-a542-baea4e9dde02.filesusr.com/ugd/36a6a2_5ef1716027764675989a7c70ee1e509d.pdf',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/melana-ly/',
  },
}

export const homePage = {
  heroHeading: 'Hello! I’m Melana.',
  portrait: {
    src: wixImage('36a6a2_23a89288e0c042e49570b50325b538b1~mv2.jpg', 900, 1150),
    alt: 'Melana Ly portrait',
  },
  aboutParagraphs: [
    "I'm Melana, and I'm currently in my last semester of mechanical engineering at Northeastern University. I'm passionate about designing innovative solutions to real-world problems. Engineering to me isn't just about the calculations, but about understanding the needs of the people it helps and creating solutions that make a difference. In classic mechanical engineering fashion, I was inspired by Legos and high school robotics. I fell in love with the prototype to production process and continued that journey through college.",
    "I've completed two co-ops while at Northeastern. I was a quality assurance engineer co-op at Ginger Labs, creators of the well-known iPad app Notability. My second one was as a product engineer co-op at MilliporeSigma, where I worked on single-use bioprocessing bags and assemblies that help safely manufacture medicines and vaccines.",
    'Outside of engineering, I enjoy staying active through indoor rock climbing and running, exploring my creative side with crocheting and photography, and unwinding with a good book.',
    "My diverse experiences have reinforced that effective engineering requires both technical competence and strong communication skills. Understanding people's needs, collaborating across disciplines, and clearly conveying complex concepts are essential to developing successful solutions. As I approach graduation, I look forward to leveraging both my technical foundation and collaborative approach to drive innovation and create impactful engineering solutions.",
  ],
  featureCards: [
    {
      title: 'Engineering Projects',
      description: 'A combination of club, class, and personal builds.',
      href: '/engineering-projects',
      image: wixImage('36a6a2_1940a4f9f1ff44e98b2a97364eb7a107~mv2.jpg', 800, 800),
      alt: 'Engineering projects preview',
    },
    {
      title: 'Co-op Experience',
      description: 'Quality assurance and product engineering work across two teams.',
      href: '/co-op-experience',
      image: wixImage('36a6a2_4ea99980cd8e4831add557c200462f53~mv2.png', 800, 800),
      alt: 'Co-op experience preview',
    },
    {
      title: 'Resume',
      description: 'Open the latest PDF resume from the original portfolio.',
      href: footerLinks.resume.href,
      external: true,
      image: wixImage('36a6a2_dc919323107e44f9ab0f7cf4f5474875~mv2.jpg', 800, 800),
      alt: 'Resume preview',
    },
    {
      title: 'Photography',
      description: 'A film and digital gallery centered on New York.',
      href: '/photography',
      image: wixImage('36a6a2_f044e13e059a42989beb922bc69ecaaa~mv2.jpg', 800, 800),
      alt: 'Photography preview',
    },
  ],
}

export const coopExperience = {
  roles: [
    {
      company: 'Ginger Labs / Notability',
      title: 'Quality Assurance Engineer Co-op',
      logo: wixImage('36a6a2_7efeefe6d0a5456da4d8591e80f04dd9~mv2.png', 600, 240, 'fit'),
      bullets: [
        'Validated cross-platform alpha builds of the Notability app, identifying and documenting 30+ bugs, while working closely with developers, product managers, and UX/UI designers to refine performance.',
        'Crafted technical documents, including bug reports, test run summaries, and product documentation, to facilitate cross-team communication and address beta feedback for user-facing updates.',
        'Executed ~40 test cases weekly to support weekly release cycles across devices and OS versions.',
      ],
    },
    {
      company: 'MilliporeSigma',
      title: 'Product Engineer Co-op',
      logo: wixImage('36a6a2_c0a4799adc87410e86b1040c26fddb98~mv2.png', 600, 240, 'fit'),
      bullets: [
        'Analyzed the top customer-reported defect, port breakage in single-use bioprocessing bags, by designing a custom vacuum test fixture, testing 114 samples across 5 assembly parameters, and evaluating alternative plastic materials.',
        'Remodeled barb geometry in SolidWorks and analyzed improvements through FEA, increasing factor of safety by 2.5x.',
        'Presented risk assessment findings to Head of Quality and senior management based on FMEA of change risks and mitigation priorities.',
      ],
      additionalHeading: 'Additional Projects',
      additionalBullets: [
        'Authored an SOP for a new bag folding procedure designed to reduce leaks and ensure consistency.',
        'Investigated fastening interference in an ISO Class 7 cleanroom and evaluated ergonomic impact on operators.',
      ],
    },
  ],
}

export const photographyPage = {
  gear: [
    'Sony Alpha 7 III',
    'Tamron 28-200 F/2.8-5.6 Di III RXD',
    'Canon Sureshot130u 35mm',
  ],
  intro:
    "I've always liked composing beautiful photos. It wasn't until I decided to take Intro to Photography for a general elective that I really fell in love with the hobby. Bringing a camera around brings me comfort in an indescribable way. I hope others can sense the same amazement and wonder I have for the world as I capture it through my lens.",
  albums: [
    {
      title: 'New York: Home',
      images: [
        '36a6a2_cf9906bb54bb4f6c9901702cafb099c9~mv2.jpg',
        '36a6a2_502e25967c634dc4b3d294585035d013~mv2.jpg',
        '36a6a2_08fa82b0fa9f4a03ac76b60dc8e4fb85~mv2.jpg',
        '36a6a2_1248abb87da64c7f8f72da04ba199156~mv2.jpg',
        '36a6a2_de6324ab94eb4ec79feb1aa7b79f3eab~mv2.jpg',
        '36a6a2_9df70d265f3b49d882af598beaa0de00~mv2.jpg',
        '36a6a2_b9aa9ba089194e57a4451b1a31175838~mv2.jpg',
        '36a6a2_a18470ccee8840c3ba8b636b0f8eea50~mv2.jpg',
      ].map((name, index) => ({
        src: wixImage(name, 900, 1320),
        alt: `New York gallery image ${index + 1}`,
      })),
    },
    {
      title: 'New York City',
      images: [
        '36a6a2_aaf16044b81b49828f3dcb46b1fb89ad~mv2.jpg',
        '36a6a2_afdf6cb04fdd4df1903178abe3195216~mv2.jpg',
        '36a6a2_6f7f5a4baf7b42e88f42f053ed3cc7d4~mv2.jpg',
        '36a6a2_e745300566e64be8be52218b5af1b323~mv2.jpg',
        '36a6a2_e7621050bc2f45a3a4c999d0e755310b~mv2.jpg',
        '36a6a2_fc59ac0a66b6440d890a74d8958a6b0d~mv2.jpg',
        '36a6a2_ff0cba7f640d4c1ca75200a8b4edb936~mv2.jpg',
        '36a6a2_653e0ca885a8433fa5f76ad6a6cf7bea~mv2.jpg',
      ].map((name, index) => ({
        src: wixImage(name, 900, 1320),
        alt: `New York City gallery image ${index + 1}`,
      })),
    },
  ],
}

export const engineeringProjects = {
  heading: 'Engineering Projects',
  subheading: 'A combination of club, class and personal projects.',
  note: 'Feel free to scroll or click on an image to learn more.',
  overviewCards: [
    {
      title: 'Bicycle Flywheel',
      meta: 'Capstone Project / Ongoing',
      image: wixImage('36a6a2_da08d857d59543bdaad8b67455b14a99~mv2.png', 720, 720),
      alt: 'Bicycle flywheel preview',
      anchor: 'bicycle-flywheel',
    },
    {
      title: 'Turtle Basking Area',
      meta: 'Personal Project / May 2025 - September 2025',
      image: wixImage('36a6a2_9b1cd657f0dd4042b08aa07c3411e98a~mv2.png', 720, 720),
      alt: 'Turtle basking area project preview',
      anchor: 'turtle-basking-area',
    },
    {
      title: 'Bedside Phone Holder',
      meta: 'Personal Project / July 2025',
      image: wixImage('36a6a2_34afbb61a418418ab219f78144117b97~mv2.png', 720, 720),
      alt: 'Bedside phone holder preview',
      anchor: 'bedside-phone-holder',
    },
    {
      title: 'Blue Spirit Costume',
      meta: 'Personal Project / October 2024',
      image: wixImage('36a6a2_3224b80f97df4cfeb33cacb53254bf61~mv2.jpg', 720, 720),
      alt: 'Blue Spirit costume preview',
      anchor: 'blue-spirit-costume',
    },
    {
      title: 'Pool Triangle',
      meta: 'Personal Project / October 2023',
      image: wixImage('36a6a2_e027c6537df54c489d871f5e86bf07d5~mv2.jpg', 720, 720),
      alt: 'Pool triangle preview',
      anchor: 'pool-triangle',
    },
    {
      title: 'Microfluidic Channels',
      meta: 'Research Project / December 2022 - May 2023',
      image: wixImage('36a6a2_b4e2c167f1de43d1b55a36e8779bafc6~mv2.jpg', 720, 720),
      alt: 'Microfluidic channels preview',
      anchor: 'microfluidic-channels',
    },
    {
      title: 'Upset Birds',
      meta: 'Cornerstone Project / January 2023 - April 2023',
      image: wixImage('36a6a2_ac4e85159e9c49b1b5fa0058dc950703~mv2.png', 720, 720),
      alt: 'Upset Birds preview',
      anchor: 'upset-birds',
    },
    {
      title: 'Ablative Nozzle',
      meta: 'Club Project / October 2022 - April 2023',
      image: wixImage('36a6a2_5f733d6090eb493eb1db64e80985a1dd~mv2.png', 720, 720),
      alt: 'Ablative nozzle preview',
      anchor: 'ablative-nozzle',
    },
    {
      title: 'Intake System',
      meta: 'High School Robotics Project / January 2022 - April 2022',
      image: wixImage('36a6a2_82d3d057f0f24a4394bf0bd6307b22b9~mv2.png', 720, 720),
      alt: 'Intake system preview',
      anchor: 'intake-system',
    },
  ],
  sections: [
    {
      anchor: 'bicycle-flywheel',
      kicker: 'Capstone Project',
      title: 'Bicycle Flywheel',
      meta: 'Ongoing',
      summary: [
        'Our group capstone project is currently ongoing. We are planning on creating a kinetic energy recovery system for a bicycle by integrating a flywheel into the rear wheel of the bicycle.',
        "Over the summer, we've researched the project and other types of kinetic energy recovery systems. We've looked into other versions that people have attempted, and we plan to use those as inspiration to make ours the most effective modular design.",
      ],
      skills: [
        'Collaborating',
        'CAD Modeling',
        'Material Selection',
        'Research and Technical Documentation',
      ],
      gallery: [
        {
          title: 'Concept',
          caption: 'Early concept work from the ongoing capstone.',
          image: wixImage('36a6a2_da08d857d59543bdaad8b67455b14a99~mv2.png', 900, 900),
          alt: 'Bicycle flywheel concept image',
        },
        {
          title: 'Current CAD',
          caption: 'Current design study for the bicycle flywheel system.',
          image: wixImage('36a6a2_03920d126b2740ef861641e0ecb4b3e5~mv2.png', 900, 900),
          alt: 'Bicycle flywheel CAD image',
        },
      ],
    },
    {
      anchor: 'turtle-basking-area',
      kicker: 'Personal Project',
      title: 'Turtle Basking Area',
      meta: 'May 2025 - September 2025',
      summary: [
        'I recently adopted two baby turtles, Willis and Leon, named after Willis Hall on Leon Street where I lived for two years. Setting up their habitat required significant investment in filters, UV lamps, and other essential supplies. When it came to the basking platform, another crucial requirement for turtle health, I decided to build one myself rather than purchase yet another expensive component.',
        "I designed a 3D printed basking platform with detachable hooks for cleaning ease. I felt safe using PLA since it has food-grade purposes, and people generally think it's safe in aquariums. I included little slots so that the turtles could easily climb up. The turtles liked basking on the platform, but over time the combination of heat and the turtles' weight pushed the platform down.",
        "In two days there was already deformation. The basking area still worked, so I kept it for a while, but then Willis made his first escape. I couldn't simply lower the platform because the water line needs to stay high for the filter to work and for the platform to remain completely dry.",
        "To fix the deformation issue, I moved to PETG for the next iteration and then built a larger system around a polypropylene box from Target. I cut a hole large enough for a turtle to get in, printed a new ladder-style platform, tied it into the box, and added acrylic panels that both prevent escape and reduce evaporation.",
      ],
      skills: [
        'CAD Modeling',
        '3D Printing and Fabrication',
        'Material Selection',
        'Shop Tools',
      ],
      bullets: [
        'Non-toxic material',
        'Can hold the weight of 2 turtles',
        'Temperature of the basking area is 90-95°F',
        'Turtles should be able to get up to the area',
        'Turtles need to be able to completely dry',
        'No sharp edges',
        'Aquarium-safe',
        'Sturdy',
        'Heat resistance',
        'Climbable',
        'Above water level',
        'Safe',
        'PLA is food-safe and aquarium safe',
        'PLA is sturdy, so the platform was printed thick',
        'PLA glass transition temperature is 131-140°F',
        "Add little holes for the turtles to grip into but not get their nails stuck",
        "Put it high enough that the filter still works but the platform isn't submerged",
        'Fillet and file anything that seems sharp',
      ],
      gallery: [
        {
          title: 'Willis and Leon',
          caption: 'Willis on the left and Leon on the right.',
          image: wixImage('36a6a2_ef9e335fd6fd422d8365d97dea438ab0~mv2.png', 900, 900),
          alt: 'Willis and Leon turtles',
        },
        {
          title: 'Initial Platform',
          caption: 'First PLA basking platform prototype.',
          image: wixImage('36a6a2_9b1cd657f0dd4042b08aa07c3411e98a~mv2.png', 900, 900),
          alt: 'Turtle basking area prototype',
        },
        {
          title: 'Version 2',
          caption: 'Material and geometry update after the first platform deformed.',
          image: wixImage('36a6a2_7c01bc93647546a3b370de82d5bfabed~mv2.png', 900, 900),
          alt: 'Turtle basking area version 2',
        },
        {
          title: 'Version 3',
          caption: 'Polypropylene box and ladder system that prevented further escapes.',
          image: wixImage('36a6a2_54615853c03646998f4e5894f7573f07~mv2.jpg', 900, 900),
          alt: 'Turtle basking area version 3',
        },
      ],
    },
    {
      anchor: 'bedside-phone-holder',
      kicker: 'Personal Project',
      title: 'Bedside Phone Holder',
      meta: 'July 2025',
      summary: [
        "I moved into a new apartment over the summer, and I no longer had a place to put my phone overnight. I needed it nearby my head since it was my morning alarm, but I don't like having it on my bed. To solve this issue, I fabricated a press-fit bedside phone holder designed to sit on top of my bed post.",
        'This is how I originally had my phone charging overnight. My solution fit my phone perfectly and stopped it from falling when the alarm rang.',
        "I originally made the charger holder too small because I didn't know the diameter of my cord, but I filed it out so it could fit and then redesigned the CAD accordingly. Having the charger port built in was essential because I no longer had to reach to the ground for the charger every night.",
        "For the next iteration, I could add holders for glasses and jewelry, since I often take those off while in bed and sometimes lose my rings. A water bottle holder would also be useful to avoid reaching to the floor. Ultimately there are endless possibilities for improvements, and I'm appreciative that I can bring these ideas to life through hands-on fabrication.",
      ],
      skills: ['CAD Modeling', '3D Printing'],
      gallery: [
        {
          title: 'Before',
          caption: 'Original bedside setup.',
          image: wixImage('36a6a2_f009782ed81440219c671244c8eec7a9~mv2.png', 900, 900),
          alt: 'Bedside phone holder before state',
        },
        {
          title: 'After',
          caption: 'Installed holder solution.',
          image: wixImage('36a6a2_34afbb61a418418ab219f78144117b97~mv2.png', 900, 900),
          alt: 'Bedside phone holder after state',
        },
        {
          title: 'Charger Port Revision',
          caption: 'Iteration after resizing the charger opening.',
          image: wixImage('36a6a2_87403f28453c4ef191c104a2c5fa52aa~mv2.png', 900, 900),
          alt: 'Bedside phone holder detail',
        },
      ],
    },
    {
      anchor: 'blue-spirit-costume',
      kicker: 'Personal Project',
      title: 'Blue Spirit Costume',
      meta: 'October 2024',
      summary: [
        'I wanted to create a last-minute Halloween costume that was unique and affordable. I have always loved Avatar the Last Airbender, so I decided to make the Blue Spirit, a more niche character who mostly wears black but carries a mask and dual swords.',
        "I didn't design the mask myself. I found it on Thingiverse, printed the parts scaled to my face height, glued them together with superglue, painted it, and glued scrap cloth on the back so it could be tied on.",
        'I used pictures from the show to model the sword in SolidWorks. I had the blade laser cut and the handle 3D printed, then connected them with superglue.',
        "Overall, I enjoyed using multiple different media to get to the final product. I received a lot of compliments because of how well made it was, and it was much cheaper than buying one online because I already had most of the materials.",
      ],
      skills: ['CAD Modeling', '3D Printing and Fabrication', 'Sewing'],
      gallery: [
        {
          title: 'Completed Costume',
          caption: 'Finished Blue Spirit build.',
          image: wixImage('36a6a2_3224b80f97df4cfeb33cacb53254bf61~mv2.jpg', 900, 900),
          alt: 'Blue Spirit costume',
        },
        {
          title: 'Mask',
          caption: 'Mask fabrication detail.',
          image: wixImage('36a6a2_86d5d3c21ee649579d3815dcc7bc3949~mv2.png', 900, 900),
          alt: 'Blue Spirit mask detail',
        },
        {
          title: 'Swords',
          caption: 'Sword prop detail.',
          image: wixImage('36a6a2_9ecbcf9aba284a2cb8ca0fbb99ece483~mv2.png', 900, 900),
          alt: 'Blue Spirit swords detail',
        },
      ],
    },
    {
      anchor: 'pool-triangle',
      kicker: 'Personal Project',
      title: 'Pool Triangle',
      meta: 'October 2023',
      summary: [
        "I wanted to hone my woodworking skills, because I'd mostly used wood for prototyping rather than actual application. I wanted to make something with purpose, so I asked friends if they needed anything. One friend said his dorm pool triangle had gone missing, and he'd been using his arms to rack the balls.",
        "That made a pool triangle a good way to practice simple woodworking techniques while making something practical. Northeastern's makerspace woodshop wasn't functional at the time, so I visited a friend at Boston College who worked at their makerspace.",
        'I used SolidWorks to model the dimensions I wanted. I used a miter saw, belt sander, and orbital sander to achieve a smooth and accurate pool triangle.',
        "Although it was simple, it was fun to make something practical. Because of my enjoyment for woodworking, it's one of my goals to have a woodshop when I have my own house so I can build furniture for myself, friends, and family.",
      ],
      skills: ['Woodworking', 'CAD Modeling'],
      gallery: [
        {
          title: 'Finished Piece',
          caption: 'Pool triangle shown in use.',
          image: wixImage('36a6a2_e027c6537df54c489d871f5e86bf07d5~mv2.jpg', 900, 900),
          alt: 'Pool triangle project',
        },
        {
          title: 'Material Detail',
          caption: 'Additional fabrication view.',
          image: wixImage('36a6a2_4e515337974a40b1a0f1cc71063be167~mv2.jpg', 900, 900),
          alt: 'Pool triangle fabrication detail',
        },
        {
          title: 'Finish',
          caption: 'Completed woodwork detail.',
          image: wixImage('36a6a2_25a46387f43c47359ec572fa1ef2993a~mv2.jpg', 900, 900),
          alt: 'Pool triangle finished detail',
        },
      ],
    },
    {
      anchor: 'microfluidic-channels',
      kicker: 'Research Project',
      title: 'Microfluidic Channels',
      meta: 'December 2022 - May 2023',
      summary: [
        'I joined a microfluidic research lab during the second semester of my first year. There, I learned about microfluidics and diffusiophoresis, made several tools for the lab, and delivered weekly presentations to my PI to explain my findings.',
        'I designed a microscope slide holder for the lab. I wanted to minimize the space it took up, so it holds the slide vertically, and I included chamfers to make placing the slides easier.',
        'I also designed a Coplin jar, which is used to submerge and either stain or wash slides. A typical Coplin jar can only hold five, but my jar was designed to hold ten and uses a screw-on cap to reduce spills.',
        'There were three different versions of the Y-channel I made. The changes were small dimensional adjustments to better fit the tubing available. To make the actual channel, I had the mold SLA printed, poured in PDMS, cured it, bonded the PDMS to a microscope slide with plasma treatment, and then punched in the tubing holes.',
        'This took quite a bit of iteration because there were issues with PDMS curing, PDMS adhering to the slide, and dust getting into the channels. Eventually I produced laminar flow with dyed salt water and used the Zeiss microscope to photograph the result.',
      ],
      skills: ['CAD Modeling', 'Soft Lithography', 'Presenting', 'Microscopy'],
      gallery: [
        {
          title: 'Microscope Slide Holder',
          caption: 'Fixture study shown on the original page.',
          image: wixImage('36a6a2_b4e2c167f1de43d1b55a36e8779bafc6~mv2.jpg', 900, 900),
          alt: 'Microscope slide holder project image',
        },
        {
          title: 'Coplin Jar',
          caption: 'Supporting fabrication or testing detail.',
          image: wixImage('36a6a2_fca871513614400abfc9d85e42147416~mv2.png', 900, 900),
          alt: 'Coplin jar project image',
        },
        {
          title: 'Y-Channels',
          caption: 'Channel geometry exploration.',
          image: wixImage('36a6a2_e5633aec9cd84703a8dfe701184995b0~mv2.png', 900, 900),
          alt: 'Y-channels project image',
        },
      ],
    },
    {
      anchor: 'upset-birds',
      kicker: 'Cornerstone Project',
      title: 'Upset Birds',
      meta: 'January 2023 - April 2023',
      summary: [
        "For our Cornerstone 2 project, we designed and constructed a carnival game inspired by Angry Birds. The tabletop game integrated wooden structural elements, 3D-printed components, and Arduino microcontrollers for automated scoring and game mechanics.",
        'I wanted to design a game where one person shoots at targets while another person moves the target, using belts to transfer motion. To make it more interesting, we implemented a slingshot instead of simple ball throwing, and I crocheted a pouch for the ball.',
        'I designed and built the target movement mechanism using 3D-printed pulleys with duct tape belts. The system featured motor-driven pulleys for bidirectional target control, custom target mounts with integrated button sensors for hit detection, and a front-facing display showing real-time scores.',
        'The main challenge was achieving proper belt tension for reliable operation. During the actual carnival, the project was a success, and it was relieving to see everything working properly by then.',
      ],
      skills: ['CAD Modeling', 'Collaboration', 'Prototyping'],
      gallery: [
        {
          title: 'Proof of Concept',
          caption: 'Initial concept view.',
          image: wixImage('36a6a2_ac4e85159e9c49b1b5fa0058dc950703~mv2.png', 900, 900),
          alt: 'Upset Birds proof of concept',
        },
        {
          title: 'Prototype',
          caption: 'Refined build snapshot.',
          image: wixImage('36a6a2_54615853c03646998f4e5894f7573f07~mv2.jpg', 900, 900),
          alt: 'Upset Birds prototype',
        },
        {
          title: 'Final Build',
          caption: 'Completed project view.',
          image: wixImage('36a6a2_a5f0ffda6c5d4485814715655986602e~mv2.jpg', 900, 900),
          alt: 'Upset Birds final build',
        },
      ],
    },
    {
      anchor: 'ablative-nozzle',
      kicker: 'Club Project',
      title: 'Ablative Nozzle',
      meta: 'October 2022 - April 2023',
      summary: [
        "I designed an ablative nozzle in my freshman year of college for the AeroNU propulsion group. I used Rao's approximation based on our engine specs to model the nozzle. The nozzle was made from a silica tubing sleeve and phenolic resin to create a silica phenolic ablative composite. The nozzle was successfully made after many mold iterations, but we were unable to hot fire it due to time constraints.",
        'The mold was printed out of PLA, and then I would put the silica tubing around the mold and mix and pour the viscous resin into the mold. The resin took 24 hours to set.',
        "After the resin was set, it was brittle and hard. It wouldn't easily pry out of the mold, and it broke while I was attempting to break off the PLA.",
        "Even though we didn't have time on our hot fire day to fire my nozzle, I'm still proud of the work put into it to make a successful nozzle. Going through this process was also helpful because the next year I went on to mentor new AeroNU members on ablative nozzles.",
      ],
      skills: ['CAD Modeling', '3D Printing', 'Injection Molding'],
      bullets: [
        'For the second iteration, I thought that if the plastic was thinner, it would remove more easily, so I added holes into the design. I also made the outer cavity two parts for easy separation. However the inner part of the mold was not centered, so the nozzle geometry would come out incorrectly.',
        'To fix the centering issue, I designed a new bottom plate to hold the other cavities in place.',
        'The mold was at a good place, but there were still issues with the resin sticking to the 3D printed part. I then theorized to use silicone resin as the actual mold cavities to the nozzle, and the 3D part as the mold for the silicone resin.',
        'The new design was now a mold for the silicone resin instead of a direct mold for the phenolic resin. This design was thankfully successful, and the nozzle was able to easily detach from the silicone.',
        "I don't have any pictures from when it was freshly casted, but this is a picture of the nozzle after a month. Some of the bolt holes, used to attach to the engine, expanded from the humidity in the lab, so there are a lot of cracks.",
      ],
      gallery: [
        {
          title: 'Nozzle Design',
          caption: "CAD based on Rao's approximation.",
          image: wixImage('36a6a2_5f733d6090eb493eb1db64e80985a1dd~mv2.png', 900, 900),
          alt: 'Ablative nozzle design image',
        },
        {
          title: 'Mold Iterations',
          caption: 'Selected mold development images from the original page.',
          image: wixImage('36a6a2_7c01bc93647546a3b370de82d5bfabed~mv2.png', 900, 900),
          alt: 'Ablative nozzle mold iteration',
        },
        {
          title: 'Nozzle! (plus a month)',
          caption: 'Finished nozzle after environmental exposure.',
          image: wixImage('36a6a2_d091ee0b50cb4d6cbe2fe74195d032a8~mv2.png', 900, 900),
          alt: 'Finished ablative nozzle',
        },
      ],
    },
    {
      anchor: 'intake-system',
      kicker: 'High School Robotics Project',
      title: 'Intake System',
      meta: 'January 2022 - April 2022',
      summary: [
        'FIRST Robotics during high school was where I found my love for engineering. I wish we had more time to do robotics, but COVID cut out more than a year. During my senior year, I was in charge of the intake system for the game Rapid React, where our robot had to intake balls and shoot them into a goal.',
        'My intake system was a piston-actuated, roller intake mechanism utilizing 2 rows of mecanum wheels to center and lift the ball into the hopper. The rubber wheels in the front exerted a frictional force that stopped the ball from rolling away.',
        'I had to be away for a weekend, so I made instructions for my other team members to mount the intake so we could have the robot tested as soon as possible.',
      ],
      skills: ['CAD Modeling', 'Shop Tools', 'Collaboration'],
      gallery: [
        {
          title: 'Intake Mechanism',
          caption: 'Primary CAD and mechanism view.',
          image: wixImage('36a6a2_82d3d057f0f24a4394bf0bd6307b22b9~mv2.png', 1000, 720),
          alt: 'Intake mechanism render',
        },
        {
          title: 'Assembly Detail',
          caption: 'Additional fabrication detail from the original gallery.',
          image: wixImage('36a6a2_7fbc0b1ced5c4d9a80f57b01aa1f4926~mv2.png', 1000, 720),
          alt: 'Intake assembly detail',
        },
        {
          title: 'Mounting Instructions',
          caption: 'Reference image associated with the handoff instructions.',
          image: wixImage('36a6a2_fe41e8fcddf54d509d7c93aa62177d35~mv2.png', 1000, 720),
          alt: 'Intake mounting instructions',
        },
      ],
    },
  ],
}

export const contact = {
  phoneDisplay: '646-705-8605',
  phoneDigits: '+16467058605',
  email: 'ly.me@northeastern.edu',
  linkedinDisplay: 'www.linkedin.com/in/melana-ly/',
  linkedinHref: footerLinks.linkedin.href,
}
