import fs from "fs";
export default function logging(req, res, next) {
  fs.appendFile(
    "./data/logs.txt",
    `IP: ${req.ip}, ${req.method}, ${req.originalUrl}\n`,
    (err) => {
      console.log("Updated!");
    }
  );
  next();
}
