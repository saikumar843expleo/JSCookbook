# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if necessary, e.g., for React or TypeScript projects)
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

# Create and set a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app .

# Install only production dependencies
RUN npm install --only=production

# Ensure the node_modules directory is owned by the non-root user
RUN chown -R appuser:appgroup /app/node_modules

# Switch to the non-root user
USER appuser

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]

# If you have a start script defined in package.json
# CMD ["npm", "start"]