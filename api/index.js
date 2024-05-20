// const express = require("express");
// const cors = require("cors");
// const { default: mongoose } = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("./models/User.js");
// const Place = require("./models/Place.js");
// const cookieParser = require("cookie-parser");
// const imageDownloader = require("image-downloader");
// const multer = require("multer");
// const fs = require("fs");
// require("dotenv").config();
// const app = express();

// const bcryptSalt = bcrypt.genSaltSync(10);
// const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

// app.use(express.json());
// app.use(cookieParser());
// app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );

// mongoose.connect(process.env.MONGO_URL).then(() => {
//   console.log("DB connection successful");
// });

// app.get("/test", (req, res) => {
//   res.send("Ire oooooo");
// });

// app.post("/register", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { name, email, password } = req.body;
//   try {
//     const userDoc = await User.create({
//       name,
//       email,
//       password: bcrypt.hashSync(password, bcryptSalt),
//     });
//     res.json(userDoc);
//   } catch (e) {
//     res.status(422).json(e);
//   }
// });

// app.post("/login", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { email, password } = req.body;
//   const userDoc = await User.findOne({ email });
//   if (userDoc) {
//     const passOk = bcrypt.compareSync(password, userDoc.password);
//     if (passOk) {
//       jwt.sign(
//         {
//           email: userDoc.email,
//           id: userDoc._id,
//         },
//         jwtSecret,
//         {},
//         (err, token) => {
//           if (err) throw err;
//           res.cookie("token", token).json(userDoc);
//         }
//       );
//     } else {
//       res.status(422).json("pass not ok");
//     }
//     // res.json('found')
//   } else {
//     res.json("not found");
//   }
// });

// // app.get('/profile', (req, res) => {

// //     // mongoose.connect(process.env.MONGO_URL);
// //     const {token} = req.cookies;
// //     res.json({token})
// //     if (token) {
// //       jwt.verify(token, jwtSecret, {}, async (err, userData) => {
// //         if (err) throw err;
// //         const {name,email,_id} = await User.findById(userData.id);
// //         res.json({name,email,_id});
// //       });
// //     } else {
// //       res.json(null);
// //     }
// //   });

// app.get("/profile", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//       if (err) {
//         console.error("JWT verification error:", err);
//         return res.status(500).json({ error: "Internal Server Error" });
//       }
//       try {
//         const { name, email, _id } = await User.findById(userData.id);
//         res.json({ name, email, _id });
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });
//   } else {
//     res.json(null);
//   }
// });

// app.post("/upload-by-link", async (req, res) => {
//   const { link } = req.body;
//   const newName = "photo" + Date.now() + ".jpg";
//   const options = {
//     url: link,
//     dest: __dirname + "/uploads/" + newName,
//   };
//   await imageDownloader.image(options);
//   res.json(newName);
// });

// const photosMiddleware = multer({ dest: "uploads/" });
// app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
//   console.log("Na dest oo");
//   const uploadedFiles = [];
//   for (let i = 0; i < req.files.length; i++) {
//     const { path, originalname } = req.files[i];
//     const parts = originalname.split(".");
//     const ext = parts[parts.length - 1];
//     const newPath = path + "." + ext;
//     fs.renameSync(path, newPath);
//     console.log(newPath.replace(/uploads\\/g, ""));
//     // uploadedFiles.push(newPath.replace('uploads/', ''))
//     uploadedFiles.push(newPath.replace(/uploads\\/g, ""));
//   }
//   res.json(uploadedFiles);
// });

// app.post("/places", (req, res) => {
//   const { token } = req.cookies;
//   console.log("token: ", token);
//   const {
//     title,
//     address,
//     addedPhotos,
//     description,
//     price,
//     perks,
//     extraInfo,
//     checkIn,
//     checkOut,
//     maxGuests,
//   } = req.body;

//   console.log(req.body);
//   jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//     console.log(err, "<= err");
//     if (err) throw err;
//     const placeDoc = await Place.create({
//       owner: userData.id,
//       price,
//       title,
//       address,
//       photos: addedPhotos,
//       description,
//       perks,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests,
//     });
//     res.json(placeDoc);
//   });
// });

// // Place.create({
// // title: String,
// // owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
// // address: String,
// // photos: [String],
// // description: String,
// // perks: [String],
// // extraInfo: String,
// // checkIn: Number,
// // checkOut: Number,
// // maxGuests: Number,
// // })
// // })

// app.post("/logout", (req, res) => {
//   res.cookie("token", "").json(true);
// });

// app.listen(4000, () => {
//   console.log(`App running on port 4000...`);
// });
// // mongodb://localhost:27017
// //127.0.0.1:4000
