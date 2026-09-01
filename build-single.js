// Spaja index.html i data/*.js u jednu samostalnu HTML datoteku (build/gradivo.html)
// i varijantu bez <html>/<head>/<body> omotača (build/gradivo-artifact.html).
// Pokretanje: node build-single.js
const fs = require("fs");
const path = require("path");

const root = __dirname;
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");

html = html.replace(/<script src="(data\/[^"]+)"><\/script>/g, (m, rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) {
    console.warn("UPOZORENJE: nedostaje " + rel + " — preskačem");
    return "";
  }
  return "<script>\n" + fs.readFileSync(p, "utf8") + "\n</script>";
});

fs.mkdirSync(path.join(root, "build"), { recursive: true });
fs.writeFileSync(path.join(root, "build", "gradivo.html"), html);

// artifact varijanta: samo sadržaj glave (title/link/style) + tijela
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta[^>]*>/g, "").trim();
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1].trim();
fs.writeFileSync(path.join(root, "build", "gradivo-artifact.html"), head + "\n" + body + "\n");

console.log("OK: build/gradivo.html i build/gradivo-artifact.html");
