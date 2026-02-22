# Stage 1 : Build de l'application Angular
FROM node:20 AS build

WORKDIR /app

# Copie du reste du code source
COPY . .

# Installation des dépendances
RUN npm install

# Build de l'application en mode production
RUN npm run build 

# Stage 2 : Configuration et exécution avec NGINX
FROM nginx:alpine

# Copie des fichiers de build depuis le stage précédent
COPY --from=build /app/dist/angular-esgi-form-app/browser /usr/share/nginx/html

# Copie du fichier de configuration NGINX
COPY nginx.conf /etc/nginx/conf.d/

# Exposition du port 80
EXPOSE 80

# Lancement de NGINX
CMD ["nginx", "-g", "daemon off;"]
