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

        /* 5. SMOKE TEST */
        stage('Smoke Test') {
            steps {
                script {
                    echo "🚦 Running smoke test..."

                    def imageName = "${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}"

                    // Remove old container only before test
                    bat 'docker rm -f react_test >nul 2>&1 || echo "No old container"'

                    // Run new container
                    bat "docker run -d -p 3000:3000 --name react_test ${imageName}"

                    echo "⏳ Waiting for application to start..."
                    sleep 5

                    echo "🌐 Checking HTTP status on http://localhost:3000"
                    bat 'curl -I http://localhost:3000 > http_response.txt 2>&1'

                    // Check for HTTP 200
                    def passed = bat(returnStatus: true, script: 'findstr /C:"HTTP/1.1 200" http_response.txt') == 0

                    if (passed) {
                        echo "✅ SMOKE TEST PASSED"
                    } else {
                        echo "❌ SMOKE TEST FAILED"
                        currentBuild.result = 'UNSTABLE'
                    }
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
        success {
            echo "✨ SUCCESS — The container is kept running (react_test)!"
            echo "👉 Access it here: http://localhost:3000"
        }
        failure {
            echo "❌ Pipeline failed — container is kept for debugging"
        }
    }
}

