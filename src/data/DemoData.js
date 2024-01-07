// BLOXAT BUILT'S DEMO DATA
// User Data
export const currentUserData = {
  id: 1,
  first_name: "Seif",
  last_name: "Radwane",
  email: "seif@gmail.com",
  avatar_url:
    "https://media.publit.io/file/StockPics/ezgif.com-png-to-webp-converter.webp",
  // avatar_url: "https://media.publit.io/file/StockPics/DefaultProfilePic-h.webp",
  company: "Bloxat Inc.",
  company_link: "bloxat.com",
  role_company: null,
  country: "United States",
  currency: "$",
  activated: true,
  date_last_annual: "03/12/2021",
  is_project_owner: true,
  is_admin: false,
  is_pm: false,
  player_id_web: null,
  player_id_app: null,
  projects: [
    {
      project_id: 1,
      id: 1,
      app_name: "My App",
      app_icon: "https://media.publit.io/file/StockPics/new-demo-app-icon.webp",
      user_id: 1,
      annual_maintenance_cost: 5000,
      signed_contract_upload_date: "07-11-2022 01:02 PM",
      project_manager_id: 1,
    },
  ],
};

// PROJECT DATA
export const projectData = {
  project_id: 1,
  id: 1,
  app_name: "My App",
  app_icon: "https://media.publit.io/file/StockPics/iconnnn.webp",
  // app_icon: "https://media.publit.io/file/StockPics/new-demo-app-icon.webp",
  // app_icon: "https://media.publit.io/file/stockimageswebp/appstore-7.png",
  user_id: 1,
  // description: "description is here",
  project_cost: 25000,
  deposit: 12500,
  remaining_amount: 12500,
  annual_maintenance_cost: 1000,
  project_progress: 4,
  app_status: "Under development",
  release_date: "20/9/2022",
  teams_url: "https://contactteams.whtaver",
  contract: "test",
  signed_contract:
    "https://firebasestorage.googleapis.com/v0/b/roboot-a1329.appspot.com/o/App%20test_Orascom_Naguib_userId%3A1%2Fcontracts%2Fsigned_contract_07-11-2022%2001%3A02%3A18?alt=media&token=d2aec725-75c9-4867-97bb-1832509ded5b",
  signed_contract_upload_date: "07-1-2023 01:02 PM",
  brand_docs:
    "https://firebasestorage.googleapis.com/v0/b/roboot-a1329.appspot.com/o/App%20test_Orascom_Naguib_userId%3A1%2Fbranding%2Fbrand_files_15-10-2022%2010%3A46%3A39_smile.zip?alt=media&token=aed4ca10-2d01-4c86-ab07-771d99005017",
  team_timezone: "GMT+2",
  project_manager_id: 8,
  createdAt: "2022-10-04T04:02:41.000Z",
  updatedAt: "2022-11-22T05:36:22.000Z",
  tasks: [
    {
      task_title: "Google Sign-In",
      task_icon: "https://media.publit.io/file/StockPics/google.webp",
      brief_description:
        "Logging users into your App using their active Google account with a personalized sign-in button or One Tap and Automatic sign-in for users already logged in to their Google account.",
      due_date: "1/1/2022",
      assigned_team: "https://media.publit.io/file/StockPics/DevTeam.svg",
      progress: 1,
    },
    {
      task_title: "Facebook Pixel",
      task_icon: "https://media.publit.io/file/StockPics/facebook.webp",
      brief_description:
        "The Facebook pixel is a piece of code for your app that lets you measure, optimize and build audiences for your ad campaigns. You can think of this as an analytics tool that allows you to measure the effectiveness of your advertising by understanding the actions people take on your app.",
      due_date: "1/1/2022",
      assigned_team: "https://media.publit.io/file/StockPics/DevTeam.svg",
      progress: 0,
    },
    {
      task_title: "Stripe Checkout",
      task_icon: "https://media.publit.io/file/StockPics/stripe-small.webp",
      brief_description:
        "Integrating Stripe Checkout into Your App (conversion-optimized).",
      due_date: null,
      assigned_team: null,
      progress: 2,
    },
  ],
  bugs: [
    {
      bug_id: 24,
      id: 24,
      project_id: 1,
      bug_title: "Example Bug",
      brief_description: "An example of a bug fix.",
      due_date: "1",
      assigned_team: "https://media.publit.io/file/StockPics/DevTeam.svg",
      request_approved: true,
      progress: 2,
      priority: "Medium",
      screenshots:
        '["https://media.publit.io/file/StockPics/app-screenshot-1.webp","https://media.publit.io/file/StockPics/app-screenshot-2.webp","https://media.publit.io/file/StockPics/app-screenshot-3.webp","https://media.publit.io/file/StockPics/app-screenshot-4.webp"]',
    },
  ],

  app_releases: [
    {
      id: 8,
      project_id: 1,
      version: "1.2.0",
      type: "Live",
      expected_feedback_date: "1/29/2023",
      status: "Accepted",
      app_store_link: "google.com",
      play_store_link: "google.com",
      createdAt: "2022-11-23T06:22:02.000Z",
      updatedAt: "2022-11-23T06:22:02.000Z",
    },
    {
      id: 6,
      project_id: 1,
      version: "1.0.0",
      type: "Beta",
      expected_feedback_date: "1/20/2023",
      status: "Accepted",
      app_store_link: "google.com",
      play_store_link: "google.com",
      createdAt: "2022-11-02T16:36:04.000Z",
      updatedAt: "2022-11-02T16:36:04.000Z",
    },
  ],
};

// STORE DATA
export const storeData = {
  store_id: 1,
  id: 1,
  project_id: 1,
  ar_products_limit: 17,
  products_csv: "sdfjkldsjflkdsjflk",
  regions_fees_csv: "dsfkljdfdsf",
  store_manager_link: "google.com",
  store_username: "Seif",
  store_password: "123456",
  onesignal_api_key: "1234567890987656534",
  cart_notifications: true,
  payment_recovery: false,
  third_party_store: false,
  createdAt: "2022-10-04T09:40:23.000Z",
  updatedAt: "2022-11-01T06:48:05.000Z",
};

// AR PRODUCTS DATA
export const arProductData = {
  count: 10,
  rows: [
    {
      id: 10,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/App%20test_Orascom_Naguib_userId%3A1%2Far_products%2Fglb%2F01-11-2022%2007%3A14%3A31_nike.glb?alt=media&token=1f5ece18-7bec-440b-9429-f2080a012121",
      measurements: "EU, 33.5",
      product_name: "Nike Shoes",
      product_price: "123",
      currency: "USD",
      sku: "123",
      live: true,
    },
    {
      id: 9,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fair_pods.glb?alt=media&token=8f3a197b-e9d4-49a1-ae46-31d6ed530f41",
      measurements: "Earphones: 1.59 x 0.71 x 0.65”",
      product_name: "AirPods",
      product_price: "123",
      currency: "USD",
      sku: "123",
      live: true,
    },
    {
      id: 8,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fmacbook_air_m1_chip_silver.glb?alt=media&token=c36c496d-0180-4850-9d60-3719fc044cac",
      measurements: "11.97 x 8.36 x 0.63”",
      product_name: "MacBook Air M1 Chip",
      product_price: "dsfsdafsdfs",
      currency: "USD",
      sku: "dfsadfsdafasdfsdfdf",
      live: true,
    },
    {
      id: 7,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fblue_vans_shoe.glb?alt=media&token=fce66793-d1c3-4643-ab72-a8d73ce0dc02",
      measurements: "EU, 39",
      product_name: "Vans Old Skool Laced Up",
      product_price: "299",
      currency: "USD",
      sku: "asdfdsf",
      live: true,
    },
    {
      id: 6,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fhelmet.glb?alt=media&token=797b9347-c8d3-4e5a-830f-b04f9cc9743d",
      measurements: "Medium: 51 - 52",
      product_name: "Scorpion EVO Modular Helmet",
      product_price: "300",
      currency: "EUR",
      sku: "skfsdjlffjsdklafjlkdsjfkdfsdf3432423erfd",
      live: true,
    },
    {
      id: 11,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fapple_watch_series_5.glb?alt=media&token=bfc18bff-3d39-4c6b-8c27-ef0732631cac",
      measurements: "Screen Size: 40 Millimeters",
      product_name: "Apple Watch Series 5",
      product_price: "123",
      currency: "USD",
      sku: "123",
      live: true,
    },
    {
      id: 5,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fmercedes_v8.glb?alt=media&token=b357fb5f-9754-40d6-9131-95e4759d3940",
      measurements:
        "Length of 4544mm, width of 2075mm and a wheelbase of 2630mm.",
      product_name: "Mercedes-AMG V8",
      product_price: "29999",
      currency: "USD",
      sku: "ewrehf@*(#*hjkdfhsd",
      live: true,
    },

    {
      id: 4,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fskele-kitty_toy.glb?alt=media&token=63ebb8c6-9055-4c42-aa92-5b2ecf4cd913",
      measurements: "9.5” H X 8” L X 5.5” W",
      product_name: "Skelekitty Toy",
      product_price: "29999",
      currency: "USD",
      sku: "ewrehf@*(#*hjkdfhsd",
      live: true,
    },
    {
      id: 3,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fdeadmau5_figure_v3.glb?alt=media&token=5389b301-c36a-4ddf-a489-ae5cf5fbf513",
      measurements: "4 to 6.5 inches",
      product_name: "deadmau5 Figurine",
      product_price: "asdfaasdfasdf",
      currency: "USD",
      sku: "asdfsdfsdf",
      live: true,
    },

    {
      id: 2,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fmicrosoft_headphones_surface_2.glb?alt=media&token=3e074e42-0170-4235-966b-011e7f4a46a8",
      measurements:
        "Length: 8.03” (204 mm) Width: 7.68” (195 mm) Depth: 1.89” (48 mm)",
      product_name: "Surface Headphones 2",
      product_price: "29999",
      currency: "USD",
      sku: "ewrehf@*(#*hjkdfhsd",
      live: true,
    },

    {
      id: 1,
      glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fjaguars_t-shirt_-_black.glb?alt=media&token=41d9aaaf-7885-4461-804b-2ac8890c1db3",
      measurements: "CHEST: 39”-40”, FRONT LENGTH: 29”, SLEEVE LENGTH: 8.5”",
      product_name: "Jaguars Tshirt",
      product_price: "fdsafdsfasd",
      currency: "USD",
      sku: "dsafsdfsdf",
      live: true,
    },
  ],
};

// Demo Simple App Data
export const demoAppProducts = [
  // Apple Watch
  {
    id: 1,
    product_name: "Apple Watch Series 5",
    glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fapple_watch_series_5.glb?alt=media&token=bfc18bff-3d39-4c6b-8c27-ef0732631cac",
    product_img:
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/w/t/wt03s-30-10-1.jpg",
    regular_price: "$199",
    sale_price: "$189",
    color_code: "#EDEADE",
    color_name: "White",
    overview: [
      "Electrical and optical heart sensors",
      "Always-On Retina display",
      "30% larger screen",
    ],
    rate: "4.8",
    customer_number: "87",
    related: [
      {
        id: 2,
        product_name: "Vans Old Skool Laced Up",
        product_img:
          "https://m.media-amazon.com/images/I/61SWZNDO7rL._AC_UF1000,1000_QL80_.jpg",
        regular_price: "$70",
        sale_price: "$65",
      },
      {
        id: 3,
        product_name: "MacBook Air M1 Chip",
        product_img:
          "https://media.btech.com/media/catalog/product/cache/2263cd383aff97b1dabf39e431e10909/a/p/apple-macbook-air-m1-256gb-8gb-7c-gpu-sp-gy.jpg",
        regular_price: "$1,199",
        sale_price: "$999",
      },
    ],
  },
  // Vans
  {
    id: 2,
    product_name: "Vans Old Skool Laced Up",
    glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fblue_vans_shoe.glb?alt=media&token=fce66793-d1c3-4643-ab72-a8d73ce0dc02",
    product_img:
      "https://m.media-amazon.com/images/I/61SWZNDO7rL._AC_UF1000,1000_QL80_.jpg",
    regular_price: "$70",
    sale_price: "$65",
    color_code: "#75bcff",
    color_name: "Blue",
    overview: [
      "Vans provide you with the premium quality",
      "Trendy and simple for everyday",
      "Comfortable, stylish, Versatile and Attractive",
    ],
    rate: "4.9",
    customer_number: "297",
    related: [
      {
        id: 3,
        product_name: "MacBook Air M1 Chip",
        product_img:
          "https://media.btech.com/media/catalog/product/cache/2263cd383aff97b1dabf39e431e10909/a/p/apple-macbook-air-m1-256gb-8gb-7c-gpu-sp-gy.jpg",
        regular_price: "$1,199",
        sale_price: "$999",
      },
      {
        id: 1,
        product_name: "Apple Watch Series 5",
        product_img:
          "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/w/t/wt03s-30-10-1.jpg",
        regular_price: "$199",
        sale_price: "$189",
      },
    ],
  },
  // Makebook Air
  {
    id: 3,
    product_name: "MacBook Air M1 Chip",
    glb: "https://firebasestorage.googleapis.com/v0/b/roboot-admin.appspot.com/o/demo_glb_products%2Fmacbook_air_m1_chip_silver.glb?alt=media&token=c36c496d-0180-4850-9d60-3719fc044cac",
    product_img:
      "https://media.btech.com/media/catalog/product/cache/2263cd383aff97b1dabf39e431e10909/a/p/apple-macbook-air-m1-256gb-8gb-7c-gpu-sp-gy.jpg",
    regular_price: "$1,199",
    sale_price: "$999",
    color_code: "#808080",
    color_name: "Space Gray",
    overview: [
      "M1 chip with 8-core CPU and 7-core GPU",
      "16-core Neural Engine",
      "256GB SSD storage",
    ],
    rate: "4.5",
    customer_number: "499",
    related: [
      {
        id: 1,
        product_name: "Apple Watch Series 5",
        product_img:
          "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/w/t/wt03s-30-10-1.jpg",
        regular_price: "$199",
        sale_price: "$189",
      },
      {
        id: 2,
        product_name: "Vans Old Skool Laced Up",
        product_img:
          "https://m.media-amazon.com/images/I/61SWZNDO7rL._AC_UF1000,1000_QL80_.jpg",
        regular_price: "$70",
        sale_price: "$65",
      },
    ],
  },
];

// APP IN COUNTRIES DATA
export const countriesData = [
  {
    id: 1,
    country_id: 1,
    project_id: 1,
    name: "United States",
    country_alpha_code: "US",
    currency: "USD",
    language: "EN",
    status: "Added",
    request_approved: true,
    due_date: "20/9/2022",
    enabled: true,
    cost: 200,
    createdAt: "2022-10-08T04:03:38.000Z",
    updatedAt: "2022-10-08T04:37:12.000Z",
  },
  {
    id: 2,
    country_id: 2,
    project_id: 1,
    name: "London",
    country_alpha_code: "GB",
    currency: "EUR",
    language: "EN",
    status: "Added",
    request_approved: true,
    due_date: "20/9/2022",
    enabled: true,
    cost: 200,
    createdAt: "2022-10-08T04:21:36.000Z",
    updatedAt: "2022-10-08T04:31:58.000Z",
  },
];

// NOTIFICATIONS DATA
export const notificationsData = [];

// EXPECTED FEEDBACKS DATA
export const expectedFeedbacksData = [
  {
    id: 23,
    user_id: 1,
    title: "Feedback for Live release v.1.2.0",
    expected_feedback_date: "1/29/2023",
    approved: true,
    type: "Live",
    route: "/app",
    createdAt: "2022-11-23T06:22:02.000Z",
    updatedAt: "2022-11-23T06:22:17.000Z",
  },
  {
    id: 22,
    user_id: 1,
    title: "Feedback for Beta release v.1.0.0",
    expected_feedback_date: "1/20/2023",
    approved: true,
    type: "Beta",
    route: "/app",
    createdAt: "2022-11-23T06:21:33.000Z",
    updatedAt: "2022-11-23T06:22:15.000Z",
  },
];

// PAYMENT METHODS DATA
export const paymentMethodsData = [
  {
    id: 1,
    payment_method_id: 1,
    project_id: 1,
    payment_title: "Apple pay",
    icon: "https://media.publit.io/file/StockPics/apple-pay.webp",
    icon_dark: "https://media.publit.io/file/StockPics/apple-pay-dark.webp",
    cost: 200,
    due_date: "20/9/10",
    request_approved: true,
    status: "Integrating",
    enabled: true,
    createdAt: "2022-10-12T06:23:54.000Z",
    updatedAt: "2022-10-31T06:37:19.000Z",
  },
  {
    id: 2,
    payment_method_id: 2,
    project_id: 1,
    payment_title: "Google pay",
    icon: "https://media.publit.io/file/StockPics/g-pay.webp",
    icon_dark: "https://media.publit.io/file/StockPics/g-pay-dark.webp",
    cost: 200,
    due_date: "20/9/10",
    request_approved: true,
    status: "Integrating",
    enabled: true,
    createdAt: "2022-10-12T06:24:23.000Z",
    updatedAt: "2022-10-31T06:33:57.000Z",
  },
  {
    id: 3,
    payment_method_id: 3,
    project_id: 1,
    payment_title: "Stripe",
    icon: "https://media.publit.io/file/StockPics/stripe.webp",
    icon_dark: "https://media.publit.io/file/StockPics/stripe.webp",
    cost: 200,
    due_date: "20/9/10",
    request_approved: true,
    status: "Functional",
    enabled: true,
    createdAt: "2022-10-12T06:24:41.000Z",
    updatedAt: "2022-10-31T06:37:31.000Z",
  },
];

// FEATURES DATA
export const featuresData = [
  {
    id: 9,
    feature_title: "Multi-Currency Support",
    description:
      "Facilitate global transactions effortlessly.",
    added: false,
  },
  {
    id: 8,
    feature_title: "Order Tracking",
    description:
      "Allowing customers to monitor the status and estimated delivery time.",
    added: true,
  },
  {
    id: 7,
    feature_title: "Product Reviews",
    description:
      "Enabling users to share feedback and make informed purchasing decisions.",
    added: true,
  },
  {
    id: 6,
    feature_title: "Push Notifications",
    description:
      "Send push notifications to your users, promote your offers and communicate directly with them.",
    added: true,
  },
  {
    id: 5,
    feature_title: "17 AR Products",
    description: "AR uses a real-world setting to display your products.",
    added: true,
  },
  {
    id: 4,
    feature_title: "Battery Preservation",
    description:
      "Ensures a prolonged experience and sustained battery life for the end-user.",
    added: true,
  },
  {
    id: 3,
    feature_title: "Dark mode",
    description:
      "Screen setting designed to make the best use of dim light situations, particularly at night.",
    added: true,
  },
  {
    id: 2,
    feature_title: "Search Functionality",
    description:
      "Helping customers quickly find specific products within your extensive inventory.",
    added: true,
  },
  {
    id: 1,
    feature_title: "Geolocation",
    description:
      "The identification of the geographic location of a user or computing device via a variety of data collection mechanisms.",
    added: true,
  },
];

// APPROVED FEATURES DATA
export const approvedFeaturesData = [
  {
    id: 8,
    feature_id: 8,
    project_id: 1,
    feature_title: "Order Tracking",
    description:
      "Allowing customers to monitor the status and estimated delivery time.",

    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 7,
    feature_id: 7,
    project_id: 1,
    feature_title: "Product Reviews",
    description:
      "Enabling users to share feedback and make informed purchasing decisions.",
    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 6,
    feature_id: 6,
    project_id: 1,
    feature_title: "Push Notifications",
    description:
      "Send push notifications to your users, promote your offers and communicate directly with them.",
    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 5,
    feature_id: 5,
    project_id: 1,
    feature_title: "17 AR Products",
    description: "AR uses a real-world setting to display your products.",
    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 4,
    feature_id: 4,
    project_id: 1,
    feature_title: "Battery Preservation",
    description:
      "Ensures a prolonged experience and sustained battery life for the end-user.",

    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 3,
    feature_id: 3,
    project_id: 1,
    feature_title: "Dark mode",
    description:
      "Screen setting designed to make the best use of dim light situations, particularly at night.",

    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 2,
    feature_id: 2,
    project_id: 1,
    feature_title: "Search Functionality",
    description:
      "Helping customers quickly find specific products within your extensive inventory.",

    request_approved: true,
    status: "Added",
    enabled: true,
  },
  {
    id: 1,
    feature_id: 1,
    project_id: 1,
    feature_title: "Geolocation",
    description:
      "The identification of the geographic location of a user or computing device via a variety of data collection mechanisms.",

    request_approved: true,
    status: "Added",
    enabled: true,
  },
];
