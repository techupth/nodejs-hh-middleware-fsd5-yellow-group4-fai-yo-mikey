export default function validateAssignmentData(req, res, next) {
  const requestBody = req.body;

  if (!requestBody.title) {
    return res.status(400).json({ message: "Required title" });
  }
  if (!requestBody.description) {
    return res.status(400).json({ message: "Required description" });
  }
  if (!requestBody.categories) {
    return res.status(400).json({ message: "Required at least 1 Categories" });
  }

  if (!requestBody.title.length > 35) {
    return res.status(400).json({ message: "Title exceed 35 characters" });
  }
  if (!requestBody.description.length > 150) {
    return res
      .status(400)
      .json({ message: "Description exceed 150 characters" });
  }
  if (!Array.isArray(requestBody.categories || requestBody.length < 1)) {
    return res
      .status(400)
      .json({ message: "Categories must be array and have at least 1 value" });
  }
}
