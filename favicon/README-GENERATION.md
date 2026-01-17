# Génération des fichiers favicon PNG

## ⚠️ IMPORTANT
Les balises favicon ont été ajoutées dans toutes les pages HTML, mais les fichiers PNG suivants doivent être générés :

- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

## 🎯 Solution recommandée : RealFaviconGenerator

1. **Va sur** : https://realfavicongenerator.net/
2. **Upload** le fichier `favicon.svg` existant
3. **Configure** les options (couleurs, etc.)
4. **Télécharge** le package généré
5. **Extrais** tous les fichiers dans le dossier `favicon/`

## ✅ Fichiers requis

Une fois générés, placez ces fichiers dans `favicon/` :

```
favicon/
├── favicon.svg (déjà présent)
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
└── android-chrome-512x512.png
```

## 📱 Compatibilité

Une fois les fichiers générés, le favicon fonctionnera sur :
- ✅ Safari (desktop et iOS)
- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Android
- ✅ iOS (écran d'accueil)


