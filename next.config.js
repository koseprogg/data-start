const basePath = process.env.NODE_ENV === "production" ? "/repo" : "";

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  basePath,
  assetPrefix: `${basePath}/`,
};
