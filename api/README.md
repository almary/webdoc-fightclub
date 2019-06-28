# API-fightclub

API du webdocumentaire. 

Pour ce projet, nous utilisons MongoDB comme base de donnée.

## Installer et utiliser l'API

1. Cloner le repository

2. Installer les dépendances
`npm i`

3. Importer la base de donnée `mongoimport --db fightclub --collection contents --type json --file content.json --jsonArray --maintainInsertionOrder`

4. Lancer MongoDB `mongod`

5. Lancer le serveur `node server.js`

## Url de gestion du contenu

localhost:xxxx/Login
