pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "nourhaine123"
        IMAGE_NAME = "frontend_de_react"
        APP_PATH = "client/projet_ds"
    }

    stages {

        /* 1. CHECKOUT */
        stage('Checkout') {
            steps {
                echo "Pulling repository..."
                checkout scm
            }
        }

        /* 2. INSTALL */
        stage('Install Dependencies') {
            steps {
                dir("${APP_PATH}") {
                    echo "Installing dependencies..."
                    bat "npm install"
                }
            }
        }

        /* 3. BUILD VITE */
        stage('Build React (Vite)') {
            steps {
                dir("${APP_PATH}") {
                    echo "Building project using Vite..."
                    bat "npm run build"
                }
            }
        }

        /* 4. BUILD DOCKER IMAGE */
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat "docker build -t ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER} ${APP_PATH}"
            }
        }

        /* 5. SMOKE TEST (Vérifier container) */
        stage('Smoke Test') {
            steps {
                script {
                    echo "Running smoke test..."

                    // Stop container if it exists
                    bat 'docker rm -f react_test || echo "Container not running"' 

                    // Run container
                    bat "docker run -d -p 3000:3000 --name react_test ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}"

                    sleep 5

                    // Test HTTP response
                    bat 'curl -I http://localhost:3000'
                }
            }
        }

        /* 6. PUSH DOCKER IMAGE ON MAIN */
        stage('Push to Docker Hub') {
            when { branch "main" }
            steps {
                echo "Pushing image to Docker Hub..."
                bat """
                    docker login -u ${DOCKERHUB_USER} -p ${DOCKERHUB_PASSWORD}
                    docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}
                """
            }
        }
    }

    post {
        always {
            bat 'docker rm -f react_test || echo "Container cleaned"'
        }
        success {
            echo "✅ Pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
