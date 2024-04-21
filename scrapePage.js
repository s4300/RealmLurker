let links = document.querySelectorAll("a");
let spans = document.querySelectorAll("span");
let codesFound = [];

let existingJson = prompt("Insert existing code list json (If there isn't any, just leave this blank!)");
try {
    if (JSON.parse(existingJson)) {
        codesFound = JSON.parse(existingJson);
    };
} catch {
    console.log("Error loading JSON.");
};

for (const link of links) {
    let href = link.href;
    if (href.startsWith("https://realms.gg/") && codesFound.includes(href) !== true) {
        let code = href.replace("https://realms.gg/", "");
        if (code.startsWith("/")) {
            code = code.replace("/", "");
        };
        //codesFound.push({"code": code});
        codesFound.push(code);
    };
};
// for (const span of spans) {
//     let text = span.textContent.toLowerCase();
//     if (text.startsWith("realm code: ") && codesFound.includes(text) !== true) {
//         codesFound.push(text);
//     };
//     if (text.startsWith("code: ") && codesFound.includes(text) !== true) {
//         codesFound.push(text);
//     };
// };

console.log(`New JSON (Paste into realmcodes.json file!): ${JSON.stringify(codesFound)}`)