/*const fetchTLDs = async () => {
  return await fetch("https://data.iana.org/TLD/tlds-alpha-by-domain.txt")
    .then((res) => res.text())
    .then((text) => {
      return text
        .split("\n")
        .filter((i) => i.length > 0)
        .slice(1)
        .map((i) => i.trim().toLocaleLowerCase());
    });
};*/

import { tlds } from "./tlds.json";
const main = async (text: string): Promise<string[] | null> => {

  text = text.replace("\n", " ").replace("\r", " ").replace("\t", "    ").replace("\u200b", " ").trim();

  console.log({text})

  const regex = new RegExp(
    `((https://)|(http://))?(([0-z|\\-]{1,63})[.])?([0-z|\\-]{1,63})[.](${tlds.join(
      "|"
    )})(\/[0-z|\/|&|%|\\-|_|.|+|=|~|:|;|?|#|@]{1,2048})?`,
    "gui"
  );

  const matches: string[] = text?.match(regex) || [];

  matches.forEach((match, index) => {
    if (match.startsWith("http://") || match.startsWith("https://")) {
      matches[index] = match;
    } else {
      matches[index] = "https://" + match;
    }
  });

  return matches;
};

main("https://google.com").then((res) => console.log(res));

export default main;
