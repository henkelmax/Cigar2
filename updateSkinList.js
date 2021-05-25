const fs = require("fs")
const path = require("path")
const folderContents = fs.readdirSync(path.join(__dirname, "web", "skins"))
const pngFileNames = folderContents.filter(f => f.endsWith(".png"))

if (folderContents.length !== pngFileNames.length) {
  const nonPngFileNames = folderContents.filter(f => !f.endsWith(".png"));
  console.warn("Warning: found " + nonPngFileNames.length + " non-PNG skins, these will not be loaded! (" + nonPngFileNames.join(", ") + ")");
}

fs.writeFileSync(path.join(__dirname,"web", "skinList.txt"), pngFileNames.map(f => f.slice(0, -4)).join());
console.log("Successfully updated skinList.txt");
