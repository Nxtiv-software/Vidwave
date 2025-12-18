# VidWave Landing Page - Docker Deployment Guide

## 🐳 Docker Setup

This guide covers how to build and deploy your VidWave landing page using Docker.

## Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed (included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

Your app will be available at: http://localhost:3000

### Option 2: Using Docker Commands

```bash
# Build the image
docker build -t vidwave-landing:latest .

# Run the container
docker run -d -p 3000:80 --name vidwave-landing vidwave-landing:latest

# View logs
docker logs -f vidwave-landing

# Stop the container
docker stop vidwave-landing

# Remove the container
docker rm vidwave-landing
```

## 🚀 Deployment Commands

### Local Development

```bash
# Build and run in detached mode
docker-compose up -d --build

# Rebuild after code changes
docker-compose up -d --build --force-recreate

# View real-time logs
docker-compose logs -f vidwave

# Stop and remove containers
docker-compose down
```

### Production Deployment

#### 1. Build for Production

```bash
# Build the production image
docker build -t vidwave-landing:v1.0.0 .

# Tag for your registry (replace with your details)
docker tag vidwave-landing:v1.0.0 your-registry/vidwave-landing:v1.0.0
docker tag vidwave-landing:v1.0.0 your-registry/vidwave-landing:latest
```

#### 2. Push to Container Registry

**Docker Hub:**
```bash
docker login
docker push your-username/vidwave-landing:v1.0.0
docker push your-username/vidwave-landing:latest
```

**AWS ECR:**
```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account-id.dkr.ecr.us-east-1.amazonaws.com

# Create repository (first time only)
aws ecr create-repository --repository-name vidwave-landing --region us-east-1

# Tag and push
docker tag vidwave-landing:v1.0.0 your-account-id.dkr.ecr.us-east-1.amazonaws.com/vidwave-landing:v1.0.0
docker push your-account-id.dkr.ecr.us-east-1.amazonaws.com/vidwave-landing:v1.0.0
```

**Google Container Registry:**
```bash
# Configure Docker for GCR
gcloud auth configure-docker

# Tag and push
docker tag vidwave-landing:v1.0.0 gcr.io/your-project-id/vidwave-landing:v1.0.0
docker push gcr.io/your-project-id/vidwave-landing:v1.0.0
```

#### 3. Deploy to Server

**Via SSH:**
```bash
# SSH into your server
ssh user@your-server.com

# Pull the latest image
docker pull your-registry/vidwave-landing:latest

# Stop and remove old container
docker stop vidwave-landing || true
docker rm vidwave-landing || true

# Run new container
docker run -d \
  -p 80:80 \
  --name vidwave-landing \
  --restart unless-stopped \
  your-registry/vidwave-landing:latest

# Or use docker-compose on the server
docker-compose pull
docker-compose up -d
```

## 🌐 Cloud Platform Deployment

### Deploy to AWS ECS

```bash
# Create ECS cluster
aws ecs create-cluster --cluster-name vidwave-cluster

# Create task definition (use the example below)
aws ecs register-task-definition --cli-input-json file://ecs-task-definition.json

# Create service
aws ecs create-service \
  --cluster vidwave-cluster \
  --service-name vidwave-landing \
  --task-definition vidwave-landing:1 \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxx],securityGroups=[sg-xxx],assignPublicIp=ENABLED}"
```

### Deploy to Google Cloud Run

```bash
# Build and deploy in one command
gcloud run deploy vidwave-landing \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 80
```

### Deploy to Azure Container Instances

```bash
# Create resource group
az group create --name vidwave-rg --location eastus

# Deploy container
az container create \
  --resource-group vidwave-rg \
  --name vidwave-landing \
  --image your-registry/vidwave-landing:latest \
  --dns-name-label vidwave-landing \
  --ports 80
```

### Deploy to DigitalOcean App Platform

```bash
# Using doctl CLI
doctl apps create --spec .do/app.yaml

# Or deploy via web interface:
# 1. Go to https://cloud.digitalocean.com/apps
# 2. Click "Create App"
# 3. Select your container registry
# 4. Configure port 80
# 5. Deploy
```

## 🔧 Useful Docker Commands

```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# View images
docker images

# Remove unused images
docker image prune -a

# View container logs
docker logs vidwave-landing

# Follow logs in real-time
docker logs -f vidwave-landing

# Execute command in running container
docker exec -it vidwave-landing sh

# View container resource usage
docker stats vidwave-landing

# Inspect container
docker inspect vidwave-landing

# Remove stopped containers
docker container prune

# Remove everything (use with caution!)
docker system prune -a --volumes
```

## 🔄 CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy VidWave Landing

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: |
            your-username/vidwave-landing:latest
            your-username/vidwave-landing:${{ github.sha }}
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            docker pull your-username/vidwave-landing:latest
            docker stop vidwave-landing || true
            docker rm vidwave-landing || true
            docker run -d -p 80:80 --name vidwave-landing --restart unless-stopped your-username/vidwave-landing:latest
```

## 🌍 Environment Variables

If you need environment variables, create a `.env` file:

```env
VITE_API_URL=https://api.vidwave.com
VITE_APP_ENV=production
```

Then update `docker-compose.yml`:

```yaml
services:
  vidwave:
    # ... other config
    env_file:
      - .env
```

Or pass them directly:

```bash
docker run -d \
  -p 3000:80 \
  -e VITE_API_URL=https://api.vidwave.com \
  --name vidwave-landing \
  vidwave-landing:latest
```

## 🔐 Security Best Practices

1. **Use specific Node version** - Already using `node:20-alpine`
2. **Multi-stage builds** - Reduces final image size
3. **Non-root user** - Nginx runs as non-root by default
4. **Security headers** - Configured in nginx.conf
5. **Scan for vulnerabilities**:
   ```bash
   docker scan vidwave-landing:latest
   ```

## 📊 Monitoring

### Health Check

Add to `docker-compose.yml`:

```yaml
services:
  vidwave:
    # ... other config
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## 🆘 Troubleshooting

### Container won't start
```bash
docker logs vidwave-landing
docker inspect vidwave-landing
```

### Port already in use
```bash
# Change port in docker-compose.yml or use different port:
docker run -d -p 8080:80 --name vidwave-landing vidwave-landing:latest
```

### Build fails
```bash
# Clean build cache
docker builder prune -a

# Build without cache
docker build --no-cache -t vidwave-landing:latest .
```

### Out of disk space
```bash
# Clean up Docker resources
docker system prune -a --volumes
```

## 📝 Notes

- The app runs on **port 80 inside the container**
- Default mapping is **port 3000 on host → port 80 in container**
- Change the host port in `docker-compose.yml` if needed
- Nginx serves the static files and handles SPA routing
- Build time: ~2-5 minutes (depending on your system)
- Final image size: ~50-60MB (optimized with Alpine Linux)

## 🎯 Next Steps

1. Set up a custom domain with a reverse proxy (nginx/Caddy)
2. Add SSL/TLS certificates (Let's Encrypt)
3. Set up CI/CD pipeline
4. Configure monitoring and logging
5. Set up automatic backups
6. Implement blue-green deployment strategy

---

**Happy Deploying! 🚀**

