# Maya Shell — Setup Guide

A ~3MB Android WebView shell that loads your Vercel-hosted React app.
No code inside the APK. All updates happen via Git → Vercel automatically.

---

## 📋 Prerequisites (install these first)

- [Node.js](https://nodejs.org) (v18+)
- [Android Studio](https://developer.android.com/studio) (for building APK)
- Java JDK 17 (Android Studio installs this)

---

## 🚀 One-Time Setup

### Step 1 — Edit your Vercel URL

Open `capacitor.config.ts` and replace:
```
url: 'https://your-app.vercel.app',
```
with your actual Vercel URL.

---

### Step 2 — Install dependencies

```bash
npm install
```

---

### Step 3 — Add Android platform

```bash
npx cap add android
```

This generates the `android/` folder.

---

### Step 4 — Copy config files

After `cap add android`, copy the files from `android-config/` into your project:

```
android-config/AndroidManifest.xml  →  android/app/src/main/AndroidManifest.xml
android-config/styles.xml           →  android/app/src/main/res/values/styles.xml
android-config/colors.xml           →  android/app/src/main/res/values/colors.xml
```

On Mac/Linux:
```bash
cp android-config/AndroidManifest.xml android/app/src/main/AndroidManifest.xml
cp android-config/styles.xml android/app/src/main/res/values/styles.xml
cp android-config/colors.xml android/app/src/main/res/values/colors.xml
```

On Windows (PowerShell):
```powershell
cp android-config\AndroidManifest.xml android\app\src\main\AndroidManifest.xml
cp android-config\styles.xml android\app\src\main\res\values\styles.xml
cp android-config\colors.xml android\app\src\main\res\values\colors.xml
```

---

### Step 5 — Sync Capacitor

```bash
npx cap sync android
```

---

### Step 6 — Build the APK

Option A — Open Android Studio and build from there (easier):
```bash
npx cap open android
```
Then in Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**

Option B — Build from terminal:
```bash
cd android
./gradlew assembleDebug
```
APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🔄 Update Flow (after setup)

You NEVER need to rebuild the APK for UI/code changes.

```
Edit React code in your main repo
        ↓
git push
        ↓
Vercel auto-deploys
        ↓
App users get the update instantly on next open ✅
```

Only rebuild the APK if you change:
- App name or package ID
- App icon
- Android permissions
- Native features

---

## ✅ What This Fixes

| Problem | Fix |
|---|---|
| Android PWA splash screen | Removed via `AppTheme.NoActionBar` — no splash config |
| Autofill strip above keyboard | `android:importantForAutofill="no"` in manifest |
| Password/credit card suggestions | Killed by same autofill flag |
| Fonts not loading | Fonts are served from Vercel — will work fine |
| Heavy APK | Shell is ~3–5MB only |

---

## 📁 What NOT to commit to this repo

Add to `.gitignore`:
```
node_modules/
android/
```

The `android/` folder is generated — don't commit it.
Only commit: `package.json`, `capacitor.config.ts`, `www/`, `android-config/`
