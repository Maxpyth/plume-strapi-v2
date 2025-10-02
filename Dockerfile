# Utilise une image Node légère
FROM node:20-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie uniquement package.json et package-lock.json
COPY package*.json ./

# Installe uniquement les dépendances de prod
RUN npm install --production

# Copie le reste du code
COPY . .

# Build Strapi (interface admin + API)
RUN npm run build

# Expose le port Strapi
EXPOSE 1337

# Démarrage de Strapi en mode prod
CMD ["npm", "run", "start"]
