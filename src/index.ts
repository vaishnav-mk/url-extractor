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

import tlds from "./tlds.js";
const main = async (text: string): Promise<string[] | null> => {
  const regex = new RegExp(
    `((https://)|(http://))?(([0-z|\\-]{1,63})[.])?([0-z|\\-]{1,63})[.](${tlds.join(
      "|"
    )})(\/[0-z|\/|&|%|\\-|_|.|+|=|~|:|;|?|#|@]{1,2048})?`,
    "g"
  );

  const matches: string[] = text?.match(regex) || [];

  console.log({ matches });

  return matches;
};

main(
  "Picking out google.com is trivial. As well as YOUTUBE.com,\nand even knows what is a real tld, and what is not.a.real.top-level-domain!"
);

export default main;
