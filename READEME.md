# Déploiement en Local – Stela Style Coiffure

Ce fichier décrit les étapes nécessaires pour installer et exécuter l’application **Stela Style Coiffure** en local sur votre machine à l’aide de XAMPP (ou d’un serveur Apache équivalent).

---

## 📋 Prérequis

1. **Serveur local Apache + PHP**  
   - Télécharger et installer **XAMPP** (https://www.apachefriends.org/fr/index.html) ou tout autre équivalent (MAMP, WAMP, LAMP).  
   - XAMPP version ≥ 8.0 (incluant PHP ≥ 7.4) est recommandée.

2. **Navigateur web moderne**  
   - Chrome, Firefox, Edge ou Safari avec accès à la console de développement (touche F12).

3. **Connexion Internet** (pour charger Google Fonts et la carte Google Maps).

---

## 📂 Structure du Projet


- **`front-end/index.html`** : page principale (Accueil, Tarifs, Réservation, Carte).  
- **`front-end/screen.css`** : styles CSS.  
- **`front-end/script.js`** : logique JavaScript (injection des tarifs, animations, bouton “Retour en haut”).  
- **`front-end/image/`** : toutes les images utilisées par le site.  
- **`back-end/`** : dossier à compléter si vous ajoutez ultérieurement un traitement PHP pour les réservations.

---

## 🚀 Étapes de Déploiement en Local

1. ### Cloner le dépôt Git

   Ouvrez un terminal (Git Bash, PowerShell, Terminal macOS ou Linux) et exécutez :

   ```bash
   git clone https://github.com/KlausAbut/Stela-Style-Coiffure.git

2. ### Démarrer XAMPP (ou équivalent)
    Ouvrez le XAMPP Control Panel.

    Cliquez sur Start à côté de Apache.

    (Optionnel) Si vous prévoyez d’ajouter une base de données MySQL plus tard, démarrez aussi MySQL.

3. ### Copier le projet dans htdocs

    -Sur Windows, copiez le dossier complet Stela-Style-Coiffure dans :
    C:\xampp\htdocs\

    -Sur macOS (MAMP) ou Linux, copiez le dossier dans :
    /Applications/XAMPP/htdocs/    ← (macOS)
    /opt/lampp/htdocs/             ← (Linux)

    -Vous pouvez renommer le dossier Stela-Style-Coiffure en quelque chose de plus court, par exemple :
    C:\xampp\htdocs\stela-coiffure




    ## Support / Contact
    ## Auteur : Klaus Abut
    ## GitHub : https://github.com/KlausAbut/Stela-Style-Coiffure

