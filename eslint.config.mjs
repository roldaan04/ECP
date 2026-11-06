import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  ...nextVitals,
  // eslint-config-next ya registra el plugin jsx-a11y: aquí solo endurecemos sus reglas.
  {
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      // role="list" en <ul>/<ol> con list-style:none es intencionado (Safari/VoiceOver pierde la semántica).
      'jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'node_modules/**',
    'test-results/**',
    'playwright-report/**',
    'ecp-assets/**',
  ]),
]);
