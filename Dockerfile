# Development stage
FROM node:25-alpine AS dev

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY .env ./   
COPY src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Build stage
FROM node:25-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src


RUN npm run build

# Production stage
FROM node:25-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/app.js"]
