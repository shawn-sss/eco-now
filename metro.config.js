// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
module.exports = (async () => {
  const {
    // This adds support for CSS files in Metro for the web platform.
    // The configuration includes default values ​​from the first configuration
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname, { isCSSEnabled: true });
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      // This block comes from the second configuration.
      // It extends the original sourceExts with svg and excludes svg from assetExts.
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
