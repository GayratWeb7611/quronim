// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const handler = async (req, res) => {
  const data = await fetch("https://islom.uz/");
  const buffer = await data.arrayBuffer();
  const buf = Buffer.from(buffer, "utf8");

  const dom = new JSDOM(buf);
  const container = dom.window.document.querySelectorAll(".in_cricle");

  const times = [];
  for (const child of container) {
    times.push({
      time: child.children[1].textContent,
      name: child.children[child.children.length - 1]?.textContent,
    });
  }

  return res.status(200).json({ data: times });
};

export default handler;
