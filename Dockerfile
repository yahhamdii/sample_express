# Utilisez une image de base Node.js
FROM node:19

# Créez un répertoire de travail pour l'application
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le code de l'application dans le répertoire de travail
COPY . .

# Exposez le port 3000 pour les connexions entrantes
EXPOSE 3000

# Démarrez l'application lorsque le conteneur Docker est lancé
CMD [ "npm", "start" ]
