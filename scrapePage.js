let links = document.querySelectorAll("a");
let spans = document.querySelectorAll("span");
let codesFound = [];

let existingJson = prompt("Insert existing code list json. (If there isn't any, just leave this blank!)");
try {
    if (JSON.parse(existingJson)) {
        codesFound = JSON.parse(existingJson);
    };
} catch {
    console.log("Error loading JSON.");
};

for (const link of links) {
    let href = link.href;
    if (href.startsWith("https://realms.gg/")) {
        // Extracts the actual code from the link
        let code = href.replace("https://realms.gg/", "");
        if (code.startsWith("/")) {
            code = code.replace("/", "");
        };
        // Check if code is already in the list, if so, then skip this code.
        if (codesFound.includes(code)) break;
        //codesFound.push({"code": code});
        codesFound.push(code);
    };
};

console.log(`New JSON (Paste into realmcodes.json file!): ${JSON.stringify(codesFound)}`)