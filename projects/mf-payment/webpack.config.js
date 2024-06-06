const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  name: 'mfPayment',

// questo non è un modulo, però è es uno standalone Component, si comporta come modulo.
  exposes: {
    './PaymentComponent': './projects/mf-payment/src/app/payment/payment.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

  // Tutti tree progetti devono usare la libreria commons-lib
  sharedMappings: [
    "commons-lib"
  ]
});

moduleFederationConfig.output.publicPath = 'http://localhost:4202/'
module.exports = moduleFederationConfig;