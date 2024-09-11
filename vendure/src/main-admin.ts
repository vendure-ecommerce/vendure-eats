import {compileUiExtensions} from '@vendure/ui-devkit/compiler';
import path from 'path';
import {uiExtensionsConfig} from "./vendure-config";

compileUiExtensions({
  outputPath: path.join(__dirname, '../../dist/admin-ui'),
  extensions: uiExtensionsConfig,
  devMode: false,
  command: 'npm',
})
  .compile?.()
  .then(() => {
    process.exit(0);
  });
