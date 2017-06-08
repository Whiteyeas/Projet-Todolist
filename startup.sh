#!/bin/bash


echo "Lancement du Serveur..."
node app.js &
echo "Ouverture Navigateur Web + Localhost"
/etc/alternatives/x-www-browser localhost:8080
