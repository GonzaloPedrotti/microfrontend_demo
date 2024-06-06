const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfShopping',

  // dobbiamo fare un export dei moduli che usiamo fuori, in questo caso, il modulo ProductsModule 
  exposes: {
    './ProductModule': './projects/mf-shopping/src/app/products/products.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

    // Tutti tree progetti devono usare la libreria commons-lib
    sharedMappings: [
      "commons-lib"
    ]
});
