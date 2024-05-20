const fs = require("fs");

exports.urlToImage = (url, savePath) => {
  const base64Data = url.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  fs.writeFile(savePath, binaryData, "binary", (err) => {
    if (err) {
      throw new Error(err);
    }
    return true;
  });
};

exports.parseCookies = (cookieHeader) => {
  if (!cookieHeader?.length) return {};
  const cookies = cookieHeader.split(";");
  const parsedCookies = {};

  cookies.forEach((cookie) => {
    const parts = cookie.split("=");
    const name = parts[0].trim();
    const value = parts[1].trim();
    parsedCookies[name] = value;
  });

  return parsedCookies;
};
