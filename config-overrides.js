const { override, overrideDevServer, useBabelRc } = require("customize-cra");

const { isEqual } = require("lodash");

const configureDevServer = () => (config) => {
  return {
    ...config,
  };
};

module.exports = {
  webpack: function (config, env) {
    //For React-Pdf Warnings
    const updatedRules = config.module.rules.filter(
      (rule) => !isEqual(rule, { parser: { requireEnsure: false } })
    );
    config.module.rules = updatedRules;
    const baseConfigFn = override(useBabelRc());
    let overridedConfig = baseConfigFn(config, env);
    return overridedConfig;
  },
  devServer: overrideDevServer(configureDevServer()),
};
