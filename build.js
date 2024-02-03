const fs = require('fs');
const { GasPlugin } = require('esbuild-gas-plugin');

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    plugins: [GasPlugin],
    platform: 'node',
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

fs.copyFileSync('appsscript.json', 'dist/appsscript.json');
