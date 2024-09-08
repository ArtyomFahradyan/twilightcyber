# Image with Node.js and Bun
FROM node:20 AS base

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set environment variables
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun vite build

# Production image
FROM node:20 AS production

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set environment variables
ENV NODE_ENV=production
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=base /app/build ./build

# Install the 'serve' package to serve the built files
RUN bun add serve

# Expose port 80
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "serve", "-s", "build"]