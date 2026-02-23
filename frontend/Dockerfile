# Utilisation de l'image NGINX
FROM nginx:stable-alpine

# Copie du fichier de configuration NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copie des fichiers HTML
COPY index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
