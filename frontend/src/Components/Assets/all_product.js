import img1 from '../Assets/allionfront.png'
import img2 from '../Assets/allionint.png';
import img3 from '../Assets/allionrear.png';
import img4 from '../Assets/altofront.png';
import img5 from '../Assets/altoint.jpeg';
import img6 from '../Assets/altorear.png';
import img7 from '../Assets/wagonrfront.jpg'
import img8 from '../Assets/wagonrint.png';
import img9 from '../Assets/wagonrrear.png';
import img10 from '../Assets/kdhfront.png';
import img11 from '../Assets/kdhint.png';
import img12 from '../Assets/kdhrear.png';
import img13 from '../Assets/pradofront.png'
import img14 from '../Assets/pradorear.png';
import img15 from '../Assets/pradoint.png';
import img16 from '../Assets/monterofront.png';
import img17 from '../Assets/monterorear.png';
import img18 from '../Assets/monteroint.png';
import img19 from '../Assets/premioffront.png';
import img20 from '../Assets/premiorear.png';
import img21 from '../Assets/premioint.png';
import img22 from '../Assets/civicfront.png';
import img23 from '../Assets/civicrear.png';
import img24 from '../Assets/civicint.png';
import img25 from '../Assets/clafront.jpg';
import img26 from '../Assets/clarear.png';
import img27 from '../Assets/claint.png';
import img28 from '../Assets/lcfront.png';
import img29 from '../Assets/lcreaar.png';
import img30 from '../Assets/lcint.png';
import img31 from '../Assets/hrvfront.png';
import img32 from '../Assets/hrvrear.png';
import img33 from '../Assets/hrvint.png';
import img34 from '../Assets/priusfront.png';
import img35 from '../Assets/priusrear.png';
import img36 from '../Assets/priusint.png';
import img37 from '../Assets/accordfront.png';
import img38 from '../Assets/accordrear.png';
import img39 from '../Assets/accordint.png';
import img40 from '../Assets/rav4front.png';
import img41 from '../Assets/rav4rear.png';
import img42 from '../Assets/rav4int.png';
import img43 from '../Assets/miragefront.png';
import img44 from '../Assets/miragerear.png';
import img45 from '../Assets/mirageint.png';
import img46 from '../Assets/outlanderfront.png';
import img47 from '../Assets/outlanderrear.png';
import img48 from '../Assets/outlanderint.png';








let all_product = [
    {
        id: 1,
        name: "Toyota Allion",
        category:"registered",
        images: img1, // Corrected path
        subImages: [img1, img2, img3],
        new_price: 14000000,
        old_price: 14500000,
        year: 2017,
        drive: "Front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img1,
        phoneNumber: 775558996,
        emailAddress: "rumandasenanayake@gmail.com",
        description: "Allion is a good family car which has a good fuel effiency and a space with luxury",
    },
    {
        id: 2,
        name: "Suzuki Alto",
        category:"registered",
        images: img4, // Corrected path
        subImages: [img4, img5, img6],
        new_price: 2800000,
        old_price: 2900000,
        year: 2015,
        drive: "Front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img4,
        phoneNumber:775558996 ,
        emailAddress: "rumandasenanayake@gmail.com",
        description: " Alto is a budjet car for a small family who looks for economy with a budjet range price",
    
    },
    {
        id: 3,
        name: "Suzuki Wagonr",
        category:"registered",
        images: img7, // Corrected path
        subImages: [img7, img8, img9],
        new_price: 6000000,
        old_price: 6250000,
        year: 2018,
        drive: "Front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img7,
        phoneNumber: 775558996,
        description: "Wagonr is a good japanese city car which has plenty of space and good fuel consumption",
    },
    {
        id: 4,
        name: "Toyota Hiace",
        category:"registered",
        images: img10, // Corrected path
        subImages: [img10, img11, img12],
        new_price: 18000000,
        old_price: 18200000,
        year: 2015,
        drive: "Rear-WheelDrive",
        fuel: "Diesel",
        capacity: 14,
        image: img10,
        phoneNumber: 775558996,
        description: "Consist of 3000cc 1KD engine and has 14 seating Capacity. Ideal for tourism ",
    },
    {
        id: 5,
        name: "Totota Prado",
        category:"registered",
        images: img13, // Corrected path
        subImages: [img13, img14, img15],
        new_price: 32000000,
        old_price: 32500000,
        year: 2015,
        drive: "Four-WheelDrive",
        fuel: "Diesel",
        capacity: 7,
        image: img13,
        phoneNumber: 775558996,
        description: "Prado is a luxury vehicle which is capable of offroading.Consits of 7 seats",
    },
    {
        id: 6,
        name: "Mitshubishi Montero",
        category:"registered",
        images: img16, // Corrected path
        subImages: [img16, img17, img18],
        new_price: 25000000,
        old_price: 25500000,
        year: 2013,
        drive: "Four-WheelDrive",
        fuel: "Diesel",
        capacity: 7,
        image: img16,
        phoneNumber: 775558996,
        description: "Montero is a luxury vehicle with a powerful 4m41 engine which is capable of offroading",
    },
    {
        id: 7,
        name: "Toyota Premio",
        category:"registered",
        images: img19, // Corrected path
        subImages: [img19, img20, img21],
        new_price: 15500000,
        old_price: 15700000,
        year: 2018,
        drive: "Front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img19,
        phoneNumber: 775558996,
        description: "Toyota premio is a luxury vehicle with a elegent design with economy",
    },
    {
        id: 8,
        name: "Honda civic",
        category:"registered",
        images: img22, // Corrected path
        subImages: [img22, img23, img24],
        new_price: 4500000,
        old_price: 4700000,
        year: 2004,
        drive: "Front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img22,
        phoneNumber: 775558996,
        description: "Honda civic is a reliable car which has a good driving pleasure",
    },
    {
        id: 9,
        name: "Benz CLA200",
        category:"Unregistered",
        images: img25, // Corrected path
        subImages: [img25, img26, img27],
        new_price: 25000000,
        old_price: 25500000,
        year: 2024,
        drive: "Rear-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img25,
        phoneNumber: 775558996,
        description: " The Mercedes-Benz CLA class is a series of luxury compact executive cars manufactured by Mercedes-Benz since 2013",
    },
    {
        id: 10,
        name: "Toyota Landcruiser LC300",
        category:"Unregistered",
        images: img28, // Corrected path
        subImages: [img28, img29, img30],
        new_price: 50000000,
        old_price: 50000000,
        year: 2024,
        drive: "All-WheelDrive",
        fuel: "Diesel",
        capacity: 7,
        image: img28,
        phoneNumber: 775558996,
        description: "In line with modern downsizing trends, the LC's erstwhile 4.5-litre V8 diesel makes way for a 3.3-litre twin-turbo V6 diesel, which makes more power and torque at 309hp and 700Nm, respectively.",
    },
    {
        id: 11,
        name: "Honda HRV",
        category:"Unregistered",
        images: img31, // Corrected path
        subImages: [img31, img32, img33],
        new_price: 20000000,
        old_price: 20000000,
        year: 2023,
        drive: "Front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img1,
        phoneNumber: 775558996,
        description: "The Honda HR-V is a subcompact crossover SUV (B-segment) manufactured and marketed by Honda over three generations. Honda HR-V. Honda HR-V (RV5).",
    },
    {
        id: 12,
        name: "Toyota Prius",
        category:"Unregistered",
        images: img34, // Corrected path
        subImages: [img34, img35, img36],
        new_price: 21000000,
        old_price: 21200000,
        year: 2022,
        drive: "Front-WheelDrive",
        fuel: "Hybrid",
        capacity: 5,
        image: img34,
        phoneNumber: 775558996,
        description: "The 2020 Toyota Prius has evolved from dullard to daring, with better fuel economy, better driving dynamics, and up to 196 horsepower.",
    },
    {
        id: 13,
        name: "Honda Accord ",
        category:"Unregistered",
        images: img37, // Corrected path
        subImages: [img37, img38, img39],
        new_price: 22000000,
        old_price: 22200000,
        year: 2024,
        drive: "front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img37,
        phoneNumber: 775558996,
        description: "Honda has a long-standing reputation for producing durable and dependable vehicles, and the Accord is no exception. Many owners report driving their Accords well beyond the 100,000-mile mark with minimal issues. ",
    },
    {
        id: 14,
        name: "Toyota Rav4",
        category:"Unregistered",
        images: img40, // Corrected path
        subImages: [img40, img41, img42],
        new_price: 25000000,
        old_price: 25000000,
        year: 2023,
        drive: "All-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img40,
        phoneNumber: 775558996,
        description: "The Toyota RAV4 vehicle rating for the 2024 model year rests at a good status and is a Top Safety Pick, a distinction it also enjoyed for the 2023 model year.",
    },
    {
        id: 15,
        name: "Mitsubishi Mirage",
        category:"Unregistered",
        images: img43, // Corrected path
        subImages: [img43, img44, img45],
        new_price: 5500000,
        old_price: 5700000,
        year: 2022,
        drive: "front-WheelDrive",
        fuel: "Petrol",
        capacity: 5,
        image: img1,
        phoneNumber: 775558996,
        description: "The new 2024 Mitsubishi Mirage is the compact hatchback that's a match for everyone. Explore the reliable and economical compact car that meets your budget . ",
    },
    {
        id: 16,
        name: "Mitsubshi Outlander",
        category:"registered",
        images: img46, // Corrected path
        subImages: [img46, img47, img48],
        new_price: 23000000,
        old_price: 23000000,
        year: 2024,
        drive: "All-WheelDrive",
        fuel: "Plugin Hybrid",
        capacity: 5,
        image: img46,
        phoneNumber: 775558996,
        description: "The Mitsubishi Outlander is a compact crossover SUV manufactured by Japanese automaker Mitsubishi Motors since 2001. ",
    },
    // Other products...
];

export default all_product;
