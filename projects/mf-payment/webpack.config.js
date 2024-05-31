const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfPayment',

// questo non è un modulo, però è es uno standalone Component, si comporta come modulo.
  exposes: {
    './PaymentComponent': './projects/mf-payment/src/app/payment/payment.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // Tutti tree progetti devono usare la libreria commons-lib
  sharedMappings: [
    "@commons-lib"
  ]
});
