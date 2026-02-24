import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.maya.app',
  appName: 'Maya',
  webDir: 'www',
  server: {
    // ← YOUR VERCEL URL GOES HERE
    url: 'https://maya-pearl.vercel.app',
    cleartext: false,
    // This makes the WebView always load from Vercel, not local files
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false, // set true during dev if needed
  },
};

export default config;
