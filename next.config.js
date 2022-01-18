const basePath = process.env.NODE_ENV === "production" ? "/data-start" : "";

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  basePath,
  assetPrefix: `${basePath}/`,
};
