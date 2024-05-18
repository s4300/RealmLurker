let links = document.querySelectorAll("a");
let spans = document.querySelectorAll("span");
let codesJson = [];

let existingJson = prompt("Insert existing code list json. (If there isn't any, just leave this blank!)");
try {
    if (JSON.parse(existingJson)) {
        codesJson = JSON.parse(existingJson);
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
        if (!codesJson["realms"].includes(code) && !codesJson["blocked_realms"].includes(code) && !codesJson["expired_realms"].includes(code)) {
            codesJson["realms"].push(code);
        };
    };
};

console.log(`New JSON (Paste into realmcodes.json file!): ${JSON.stringify(codesJson)}`)