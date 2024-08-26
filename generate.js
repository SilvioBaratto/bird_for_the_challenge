const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

// Define paths
const APP_MODULE_PATH = path.join(__dirname, 'src/app/app.module.ts');
const CORE_PATH = 'src/app/core';
const SHARED_PATH = 'src/app/shared';
const FEATURES_PATH = 'src/app/features';

// Run shell commands to generate components, services, etc.
function runCommand(command) {
  if (shell.exec(command).code !== 0) {
    shell.echo('Error: Command failed');
    shell.exit(1);
  }
}

// Generate Core Guards
runCommand(`ng generate guard ${CORE_PATH}/guards/auth --implements CanActivate --skip-tests`);

// Generate Core Interceptors
runCommand(`ng generate service ${CORE_PATH}/interceptors/auth --skip-tests`);
runCommand(`ng generate service ${CORE_PATH}/interceptors/csrf --skip-tests`);

// Generate Core Models
const models = [
  'advertisement',
  'challenge',
  'community',
  'invitation',
  'league',
  'notification',
  'ranking',
  'statistic',
  'user-ad-interaction',
  'user',
];

models.forEach(model => {
  runCommand(`ng generate class ${CORE_PATH}/models/${model} --type=model --skip-tests`);
});

// Generate Core Services
const services = [
  'advertisement',
  'auth',
  'challenge',
  'community',
  'invitation',
  'league',
  'notification',
  'ranking',
  'statistic',
  'user-ad-interaction',
  'user',
];

services.forEach(service => {
  runCommand(`ng generate service ${CORE_PATH}/services/${service} --skip-tests`);
});

// Generate Core Utilities
runCommand(`ng generate class ${CORE_PATH}/utils/date --type=util --skip-tests`);

console.log("Core components created successfully!");

// Generate Shared Components
runCommand(`ng generate component ${SHARED_PATH}/components/header --inline-style --skip-tests --skip-import`);
runCommand(`ng generate component ${SHARED_PATH}/components/footer --inline-style --skip-tests --skip-import`);

// Generate Shared Directives
runCommand(`ng generate directive ${SHARED_PATH}/directives/highlight --skip-tests --skip-import`);

console.log("Shared components and directives created successfully!");

// Generate Feature Components
const features = [
  'auth/login',
  'auth/register',
  'challenges',
  'communities',
  'dropdown',
  'group',
  'home',
  'league/create',
  'league/view',
  'ranking',
  'statistics',
  'user/profile',
  'user/settings',
  'welcome',
];

features.forEach(feature => {
  runCommand(`ng generate component ${FEATURES_PATH}/${feature} --skip-tests --skip-import`);
});

console.log("Feature components created successfully!");

// Function to update app.module.ts
function updateAppModule() {
  let appModule = fs.readFileSync(APP_MODULE_PATH, 'utf8');

  // Add imports for new components and directives
  const imports = [
    ...models.map(model => `import { ${capitalize(model)}Service } from './core/services/${model}.service';`),
    'import { HighlightDirective } from \'./shared/directives/highlight.directive\';',
    'import { HeaderComponent } from \'./shared/components/header/header.component\';',
    'import { FooterComponent } from \'./shared/components/footer/footer.component\';',
  ];

  const declarations = `
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  `;

  const providers = models.map(model => `${capitalize(model)}Service,`).join('\n');

  // Add imports
  appModule = appModule.replace(/(@NgModule\({\s*imports:.*\s*)/, `$1\n${imports.join('\n')}\n`);

  // Add declarations
  appModule = appModule.replace(/(declarations:\s*\[)/, `$1\n${declarations}\n`);

  // Add providers
  appModule = appModule.replace(/(providers:\s*\[)/, `$1\n${providers}\n`);

  fs.writeFileSync(APP_MODULE_PATH, appModule, 'utf8');
}

// Utility function to capitalize strings
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Update app.module.ts with new components, directives, and services
updateAppModule();
console.log("app.module.ts updated successfully!");
