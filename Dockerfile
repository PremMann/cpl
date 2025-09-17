FROM node:18-buster

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install 

# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application after ensuring database is in sync
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
