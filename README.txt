Projet-Todolist

Pr�-requis : avoir une base de donn�es mysql sur votre machine

Installation :

Une fois le git clon�, se rendre � la racine du projet et modifier les param�tres de connexion dans Database.js et node_modules/user.js  (insertion password et user de la base de donn�es pr�sente sur la machine).
Rendre les scripts install.sh et startup.sh �x�cutables en utilisant la commande 'chmod +x' sur ces derniers.
Lancer ./install.sh

Utilisation :

Une fois l'installation termin�e, pour d�marrer le serveur et naviguer sur le site �x�cuter './startup.sh'.

Pour les utilisateurs windows, il faut lancer la commande node app.js et aller sur localhost:8080 sur un navigateur/explorateur internet.

Le port peut etre modifi� en se rendant dans app.js.