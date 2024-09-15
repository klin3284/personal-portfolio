import fs from "fs";
import path from "path";

export async function GET() {
  const foodsDirectory = path.join(process.cwd(), "public/foods");
  const filenames = fs.readdirSync(foodsDirectory);
  const filePaths = filenames.map((filename) => `/foods/${filename}`);
  return new Response(JSON.stringify(filePaths), {
    headers: { "Content-Type": "application/json" },
  });
}
