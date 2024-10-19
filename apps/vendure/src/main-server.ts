import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { JobQueueService, bootstrap, mergeConfig, runMigrations } from '@vendure/core';
import * as path from 'path';
import { config, uiExtensionsConfig } from './vendure-config';

const ADMIN_UI_DEV_MODE = process.env.ADMIN_UI_DEV_MODE == 'true';

const mergedConfig = mergeConfig(config, {
  plugins: [
    ...config.plugins,
    AdminUiPlugin.init({
      port: +process.env.API_INTERNAL_PORT + 3,
      route: 'admin',
      app: ADMIN_UI_DEV_MODE
        ? require('@vendure/ui-devkit/compiler').compileUiExtensions({
            outputPath: path.join(__dirname, '../__temp-admin-ui'),
            extensions: uiExtensionsConfig,
            devMode: true,
            command: 'npm',
          })
        : {
            path: path.join(process.cwd(), 'dist/admin-ui/dist'),
          },
    }),
  ],
});

runMigrations(mergedConfig)
  .then(() => bootstrap(mergedConfig))
  .then((app) => {
    if (process.env.RUN_JOB_QUEUE === '1') {
      app.get(JobQueueService).start();
    }
  })
  .catch((err: any) => {
    // tslint:disable-next-line:no-console
    console.log(err);
    process.exit(1);
  });
