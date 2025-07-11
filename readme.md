# 🏡 Holiday Home Booking System

> **Transforming Stays Into Unforgettable Experiences Effortlessly**

A full-featured web application framework tailored for property rental platforms. This project provides a scalable backend architecture with integrated middleware, cloud-based media management, and reusable views — enabling developers to build secure, user-friendly booking systems efficiently.

[🔗 View Live Demo](https://swiftstay-frn6.onrender.com)
---
![Dashboard Preview](./public/preview.png)


## 🌟 Features

### Core Functionality
- 📝 User Authentication & Authorization (Register / Login / Logout)
- 🏠 Property Listing Management (Create / Edit / Delete)
- 💬 Reviews & Ratings system
- 🔍 Dynamic property search and filtering

### Technical Features
- 📸 Cloud-based image uploads with **Cloudinary**
- 🌙 Session-based Flash messaging
- 📊 Middleware-based server error handling
- 📑 Responsive, mobile-friendly design via **Bootstrap 5**
- 🌟 Star rating UI integration
- 💸 Tax toggle functionality for pricing breakdown
- 📃 Robust data validation for all forms

---

## 🛠️ Technologies Used

**Frontend:**  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-85ba4e?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

**Backend:**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-E10098?style=for-the-badge&logo=mongoose)

**Cloud Services:**  
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

**Utilities / Tools:**  
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge)
![dotenv](https://img.shields.io/badge/.env-5E5C5C?style=for-the-badge)
![method-override](https://img.shields.io/badge/Method--Override-000000?style=for-the-badge)
![connect-flash](https://img.shields.io/badge/Connect--Flash-F47C48?style=for-the-badge)
![express-session](https://img.shields.io/badge/Express--Session-509941?style=for-the-badge)
![passport](https://img.shields.io/badge/Passport-34d058?style=for-the-badge)
![passport-local](https://img.shields.io/badge/Passport--Local-264653?style=for-the-badge)
![multer](https://img.shields.io/badge/Multer-ff595e?style=for-the-badge)
![connect-mongo](https://img.shields.io/badge/Connect--Mongo-023047?style=for-the-badge)
![ejs-mate](https://img.shields.io/badge/EJS--Mate-8ac926?style=for-the-badge)

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following keys:

```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
SECRET=your_session_secret
```
---

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/AjeetKu143/Holiday-Home-Booking-System.git
cd Holiday-Home-Booking-System
npm install
nodemon app.js
```
- Access at: http://localhost:7070
---
## 🎯 Future Enhancements
- 🗺️ Google Maps property location integration

- 📩 Email notifications with NodeMailer

- 📊 Booking analytics dashboard

- 📱 PWA support for offline experience

- 💰 Payment gateway integration
