import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(readFileSync(filePath, "utf8"));

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(packageJson);
}
