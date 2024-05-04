import img1 from '../Assets/Tesla_Model_Y_1X7A6211.jpg'
import img2 from '../Assets/Honda.jpg';
import img3 from '../Assets/Audi.jpg';
import img4 from '../Assets/toyota.png';
import img5 from '../Assets/BMW_F44_1X7A6109.jpg';
import img6 from '../Assets/bmw.jpg';
import img7 from '../Assets/Mercedes-Maybach_Z223_680_1X7A5831.jpg'
import img8 from '../Assets/Mercedes-Benz_X296_1X7A6955.jpg';
import img9 from '../Assets/x.png';
import img10 from '../Assets/landRover.jpg';
import img11 from '../Assets/Toyota_Mirai.jpg';
import img12 from '../Assets/y.jpg';
import img13 from '../Assets/Chevrolet Equinox LS.jpg'
import img14 from '../Assets/Mini-Cooper-S-Clubman-main.jpg';
import img15 from '../Assets/nissan_sentra_angularfront.jpg';
import img16 from '../Assets/2019_Audi_Q3_S_Line_35_TFSi_1.5.jpg';
import img17 from '../Assets/2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg';

let all_product = [
    {
        id: 1,
        name: "Tesla Model 3 Standard Range",
        category:"registered",
        images: img1, // Corrected path
        subImages: [img1, img1, img1],
        new_price: 5690,
        old_price: 4987,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        emailAddress: "rumandasenanayake@gmail.com",
        description: "The Tesla Model 3 Standard Range is a sleek and efficient electric vehicle designed for urban commuters. With its rear-wheel drive and spacious interior, it offers a comfortable and eco-friendly driving experience",
    },
    {
        id: 2,
        name: "Honda Pilot Touring 7-Passenger",
        category:"Unregistered",
        images: img2, // Corrected path
        subImages: [img2, img2, img2],
        new_price: 4375,
        old_price: 4575,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        emailAddress: "rumandasenanayake@gmail.com",
        description: "The Honda Pilot Touring 7-Passenger is a spacious and versatile SUV ideal for families and adventurers alike. With its luxurious features and ample seating for seven passengers, it offers comfort and convenience on every journey.",
    
    },
    {
        id: 3,
        name: "Chevrolet Equinox LS",
        category:"Unregistered",
        images: img3, // Corrected path
        subImages: [img3, img3, img3],
        new_price: 1375,
        old_price: 1575,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Chevrolet Equinox LS is a stylish and practical compact SUV perfect for urban driving and weekend getaways. With its sleek design and advanced features, it offers a comfortable ride and impressive fuel efficiency. Whether you're commuting to work or exploring the great outdoors, the Equinox LS is ready for any adventure.",
    },
    {
        id: 5,
        name: "BMW F44 1X7A6109",
        category:"registered",
        images: img5, // Corrected path
        subImages: [img5, img5, img3],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The BMW F44 1X7A6109 combines luxury and performance in a sleek and sophisticated package. With its powerful engine and agile handling, this coupe delivers an exhilarating driving experience. Its premium interior features cutting-edge technology and superior comfort, making every journey a pleasure. ",
    },
    {
        id: 6,
        name: "BMW F44 1X7A6109",
        category:"Unregistered",
        images: img8, // Corrected path
        subImages: [img8, img8, img8],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "In this modified component, I added a paragraph element (<p>{description}</p>) below the main image to display the product description. Adjust the styling in the CSS file (ProductDisplay.css) to ensure proper layout and alignment.",
    },
    {
        id: 7,
        name: "Mercedes-Maybach Z223 680",
        category:"registered",
        images: img7, // Corrected path
        subImages: [img7, img7, img7],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Mercedes-Maybach Z223 680 is the epitome of luxury. With its elegant design, opulent interior, and powerful performance, this sedan offers an unmatched driving experience. Crafted with the finest materials and equipped with sophisticated features, it represents automotive excellence at its finest.",
    },
    {
        id: 8,
        name: "Mercedes-Benz X296",
        category:"Unregistered",
        images: img6, // Corrected path
        subImages: [img6, img6, img6],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Mercedes-Benz X296 is a versatile and stylish SUV that combines luxury with practicality. With its sleek design, advanced technology, and powerful performance, it's the perfect vehicle for those who demand both comfort and capability. Whether navigating city streets or venturing off-road, the X296 delivers an exceptional driving experience.",
    },
    {
        id: 9,
        name: "2024 Kia Sorento SUV",
        category:"Unregistered",
        images: img9, // Corrected path
        subImages: [img9, img9, img9],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The 2024 Kia Sorento SUV is a blend of style, comfort, and performance. With its spacious interior, advanced safety features, and versatile design, it's ready to tackle any adventure. Whether you're cruising through city streets or exploring off the beaten path, the Sorento delivers a smooth and enjoyable ride for you and your passengers.",
    },
    {
        id: 10,
        name: "Land Rover Velar P250 R",
        category:"Unregistered",
        images: img10, // Corrected path
        subImages: [img10, img10, img10],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Land Rover Velar P250 R is the epitome of luxury and performance. With its sleek design, powerful engine, and cutting-edge technology, it offers an unparalleled driving experience. Whether you're navigating city streets or tackling rugged terrain, the Velar delivers unmatched comfort, refinement, and capability.",
    },
    {
        id: 11,
        name: "Toyota Mirai (JPD20)",
        category:"registered",
        images: img11, // Corrected path
        subImages: [img11, img11, img11],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Toyota Mirai (JPD20) is a groundbreaking hydrogen fuel cell vehicle that represents the future of sustainable transportation. With its innovative technology and zero-emission performance, the Mirai offers a clean and efficient driving experience. Experience the thrill of driving the Mirai while contributing to a greener, more sustainable future.",
    },
    {
        id: 12,
        name: "Chevrolet Equinox LS",
        category:"registered",
        images: img17, // Corrected path
        subImages: [img17, img17, img17],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Chevrolet Equinox LS is a reliable and versatile SUV designed for everyday adventures. With its spacious interior, advanced technology features, and smooth performance, the Equinox LS delivers comfort and convenience for both city driving and long road trips. Whether you're commuting to work or exploring new destinations, the Equinox LS is ready to take you there in style.",
    },
    {
        id: 13,
        name: "Chevrolet Equinox LS",
        category:"Unregistered",
        images: img13, // Corrected path
        subImages: [img13, img13, img13],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Chevrolet Equinox LS offers a perfect blend of comfort, performance, and style. With its sleek design and powerful engine, this SUV is ready to conquer any road with confidence. Whether you're running errands around town or heading out on a weekend getaway, the Equinox LS provides ample space, advanced safety features, and intuitive technology to enhance your driving experience.",
    },
    {
        id: 14,
        name: "MINI Clubman-2019 ",
        category:"registered",
        images: img14, // Corrected path
        subImages: [img14, img14, img14],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The MINI Clubman 2019 is a stylish and compact car that packs a punch. With its iconic design and powerful performance, this registered vehicle is perfect for those who appreciate both style and substance. Whether you're navigating city streets or cruising on the highway, the Clubman delivers a smooth and responsive ride.",
    },
    {
        id: 15,
        name: "Nissan sentra angularfront",
        category:"Unregistered",
        images: img15, // Corrected path
        subImages: [img15, img15, img15],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The Nissan Sentra Angularfront is a sleek and modern sedan designed to turn heads. With its bold lines and dynamic stance, this unregistered vehicle exudes confidence and style. Equipped with advanced technology and safety features, the Sentra offers a comfortable and secure driving experience.",
    },
    {
        id: 16,
        name: "2019 Audi Q3 S Line 35 TFSi",
        category:"registered",
        images: img16, // Corrected path
        subImages: [img16, img16, img16],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The 2019 Audi Q3 S Line 35 TFSi is a premium compact SUV designed for those who value luxury and performance. With its sleek and sophisticated design, this registered vehicle makes a statement on the road. Equipped with advanced features and cutting-edge technology, the Audi Q3 offers a comfortable and exhilarating driving experience. ",
    },
    {
        id: 17,
        name: "2018 Audi S5 TFSi Quattro Automatic",
        category:"registered",
        images: img12, // Corrected path
        subImages: [img12, img12, img12],
        new_price: 71415,
        old_price: 15755,
        year: 2019,
        drive: "Rear-WheelDrive",
        fuel: "Electric",
        capacity: 5,
        image: img1,
        phoneNumber: 1111111,
        description: "The 2018 Audi S5 TFSi Quattro Automatic is a high-performance coupe that exudes style and sophistication. As a registered vehicle, it combines luxury with powerful performance, making it an ideal choice for those who seek both elegance and exhilaration on the road.",
    },
    // Other products...
];

export default all_product;
