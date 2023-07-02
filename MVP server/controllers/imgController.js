const img = require("../modules/img");

const getAllImg = async (req, res) => {
  try {
    const img = await Img.find({});
    res.json(img);
  } catch (err) {
    console.log(err);
  }
};
//POST*************

const postOneImg = async (req, res) => {
  try {
    const newImg = await post.create(req.body);
    newImg.save();
    res.status(201).json({ msg: "img uploaded" });
  } catch (error) {
    res.status(409).json({ msg: error.msg });
  }
};
// app.post("/upload", async (req, res) => {
//   try {
//     const newImg = await post.create(req.body);
//     newImg.save();
//     res.status(201).json({ msg: "img uploaded" });
//   } catch (error) {
//     res.status(409).json({ msg: error.msg  });
//   }
// });

// app.post("/", upload.single("image"), (req, res, next) => {
//     const data = {image: req.file.path,};
//     cloudinary.uploader.upload(data.image).then((result) => {
//         const image = new imgModel({
//             img: result.url,
//         });
//         const response = image.save();
//         res.status(200).send({
//             message: "success",
//             result,
//         });
//     })
//     .catch((error) => {
//         res.status(500).send({
//             message: "failure",
//             error,
//         });
//     });
// });

// const postOneTodo = async (req, res) => {
//     try {
//       const newTodo = await Todo.create(req.body);
//       //res.json(newTodo);
//       res.json({ msg: "success" });
//     } catch (err) {
//       res.send(err);
//     }
//   };
module.exports = { getAllImg, postOneImg };
