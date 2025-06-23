# Étape 1 : installer les dépendances
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Étape 2 : copier le code et démarrer
FROM node:18-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
EXPOSE 3001
CMD ["node", "src/index.js"]