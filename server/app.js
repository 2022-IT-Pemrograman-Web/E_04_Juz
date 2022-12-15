const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./api.json");
// it can be like this
// const app = require('express')();
const path = require("path");
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/surat", async (req, res) => {
  try {
    const response = db.collection("jus30".get());
  } catch (error) {}
});
// create document in collection
app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    //const id = req.body.email;
    // const playlist = {
    //   id: req.body.id,
    //   nama: req.body.nama,
    //   surats: req.body.surats,
    // };
    const response = db.collection("playlist").doc(req.body.id).set({
      id: req.body.id,
      nama: req.body.nama,
      surats: req.body.surats,
    });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
//get all data
app.get("/read", async (req, res) => {
  try {
    const userRef = db.collection("jus30");
    const response = await userRef.orderBy("nomor", "desc").get();
    let responseArr = [];
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
    console.log(responseArr);
    console.log("responseArr");
  } catch (error) {
    res.send(error);
  }
});
//get data by param
app.get("/read/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const userRef = db.collection("jus30");
    const response = await userRef.where("nomor", "==", id).get();
    let responseArr = [];
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch (error) {
    res.send(error);
  }
});
app.put("/playlists/:id", async (req, res) => {
  //const id = req.body.id;
  const userRef = await db.collection("playlist").doc(req.params.id).update({
    surats: req.body.surats,
  });
  res.send(userRef);
});
//update data
app.put("/update/:id/:idx", async (req, res) => {
  // try {
  //   // const id = req.body.id;
  //   // const newContent = "Main dota2 5 jam";
  //   // yang dimasukin di jsonnya id documentnya
  //   const userRef = await db.collection("playlist").doc(req.params.id).update({
  //     surats: surats.splice(req.params.idx, 1),
  //   });
  //   res.send(response);
  // } catch (error) {
  //   res.send(error);
  // }
});

//delete data
app.delete("/delete/:id", async (req, res) => {
  try {
    //req.params.id itu id yg dimasukin diroutenya
    const response = await db
      .collection("playlist")
      .doc(req.params.id)
      .delete();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/playlist", async (req, res) => {
  try {
    const userRef = db.collection("playlist");
    const response = await userRef.get();
    let responseArr = [];
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch (error) {
    res.send(error);
  }
});

app.get("/playlist/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const userRef = db.collection("playlist");
    const response = await userRef.where("id", "==", id).get();
    let responseArr = [];
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch (error) {
    res.send(error);
  }
});
app.listen(8082, () => {
  console.log("server is listening on port 8082...");
});
