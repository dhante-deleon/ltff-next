FROM node:18-slim

WORKDIR /app

# Copy package manifests first to leverage Docker cache
COPY package.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller runtime image by reusing node:18-slim
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
