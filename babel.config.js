'use strict';

module.exports = (/** @type any */ api) => {
  const isTest = api.env('test');

  if (isTest) {
    return {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    };
  }

  return {};
};
