// Learn more: https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ship the prebuilt SQLite database as an app asset.
config.resolver.assetExts.push('db');

// The edition (see src/edition.ts; here only "sw") bundles its own database: a require
// of assets/db/bible.db resolves to bible-<edition>.db.
const edition = process.env.BIBLE_EDITION || editionFromGradleProperties() || 'sw';

// The generated Android project records its edition (plugins/withAndroidRelease.js).
function editionFromGradleProperties() {
  try {
    const text = require('fs').readFileSync(require('path').join(__dirname, 'android', 'gradle.properties'), 'utf8');
    const m = /^bible\.edition=(\w+)/m.exec(text);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}
config.cacheVersion = `edition-${edition}`;
const defaultResolve = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  const target = moduleName.endsWith('/assets/db/bible.db') ? moduleName.replace(/bible\.db$/, `bible-${edition}.db`) : moduleName;
  return defaultResolve ? defaultResolve(context, target, platform) : context.resolveRequest(context, target, platform);
};

module.exports = config;
