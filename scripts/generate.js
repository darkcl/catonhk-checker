const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream('./input-table/cantohk');
  const result = {}

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    var tabs = line.split('\t');

    if (!result[tabs[1]]) {
      result[tabs[1]] = [];
    }
    result[tabs[1]].push(tabs[0]);
  }

  fs.writeFileSync('./output.json', JSON.stringify(result), 'utf8')
}

processLineByLine();