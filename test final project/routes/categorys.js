const express = require("express")
const CheckId = require("../middleware/checkId")
const checkTokenBoss = require("../middleware/checkTokenBoss")
const validateBody = require("../middleware/validateBody")
const router = express.Router()
const { Category, categoryJoi } = require("../Model/Category")
router.get("/", async (req, res) => {
  let category = await Category.find().limit(50)

  res.json(category)
})
router.post("/", checkTokenBoss, validateBody(categoryJoi), async (req, res) => {
  try {
    const { name, decscription, post,type } = req.body

    const category = new Category({
      name,
      decscription,
      post,
      type,
    })
    await category.save()
    res.json(category)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.put("/:id", checkTokenBoss, CheckId, validateBody(categoryJoi), async (req, res) => {
  try {
    const { name } = req.body

    const category = await Category.findByIdAndUpdate(req.params.id, { $set: { name } }, { new: true })
    if (!category) return res.status(404).send("category is not found")
    res.json("category is edit")
  } catch (error) {
    res.status(500).send(error.message)
  }
})
router.delete("/:id", checkTokenBoss, async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (!category) return res.status(404).json("category not found")
  await category.remove()
  res.json("category removed")
})

module.exports = router
