# 1. Image de base
FROM node:20

# 2. Définir le répertoire de travail
WORKDIR /usr/src/app

# 3. Copier tout le code du back
COPY . .

# 4. Installer les dépendances
RUN npm install

# 5. Exposer le port 3000
EXPOSE 3000

# 6. Lancer le serveur Node (PID 1)
CMD ["node", "server.js"]
