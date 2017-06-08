Projet-Todolist

Pré-requis : avoir une base de données mysql sur votre machine

Installation :

Une fois le git cloné, se rendre à la racine du projet et modifier les paramètres de connexion dans Database.js et node_modules/user.js  (insertion password et user de la base de données présente sur la machine).
Rendre les scripts install.sh et startup.sh éxécutables en utilisant la commande 'chmod +x' sur ces derniers.
Lancer ./install.sh

Utilisation :

Une fois l'installation terminée, pour démarrer le serveur et naviguer sur le site éxécuter './startup.sh'.

Pour les utilisateurs windows, il faut lancer la commande node app.js et aller sur localhost:8080 sur un navigateur/explorateur internet.

Le port peut etre modifié en se rendant dans app.js.