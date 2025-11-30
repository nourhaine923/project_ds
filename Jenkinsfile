pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "nourhaine123"
        IMAGE_NAME     = "frontend_de_react"
        APP_PATH       = "client/projet_ds"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Pulling repository..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${APP_PATH}") {
                    echo "Installing dependencies..."
                    bat "npm install"
                }
            }
        }

        stage('Build React (Vite)') {
            steps {
                dir("${APP_PATH}") {
                    echo "Building project using Vite..."
                    bat "npm run build"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat "docker build -t ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER} ${APP_PATH}"
            }
        }

        stage('Smoke Test') {
            steps {
                script {
                    echo "🚦 Running smoke test..."
                    def imageName = "${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}"

                    bat 'docker rm -f react_test >nul 2>&1 || echo "No old container"'
                    bat "docker run -d -p 3000:3000 --name react_test ${imageName}"

                    echo "⏳ Waiting for app to start..."
                    sleep 5

                    echo "🌐 Checking HTTP status on http://localhost:3000"
                    bat 'curl -I http://localhost:3000 > http_response.txt 2>&1'

                    def passed = bat(returnStatus: true, script: 'findstr /C:"HTTP/1.1 200" http_response.txt') == 0

                    if (passed) {
                        echo "✅ SMOKE TEST PASSED"
                        writeFile file: 'smoke_test_result.log', text: 'PASSED'
                    } else {
                        echo "❌ SMOKE TEST FAILED"
                        writeFile file: 'smoke_test_result.log', text: 'FAILED'
                        currentBuild.result = 'UNSTABLE'
                    }
                }
            }
        }

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
            echo "Cleaning up container..."
            bat 'docker rm -f react_test >nul 2>&1 || echo "Container already removed"'

            echo "📦 Archiving artifacts..."
            archiveArtifacts artifacts: "${APP_PATH}/dist/**", fingerprint: true
            archiveArtifacts artifacts: "smoke_test_result.log", fingerprint: true
            archiveArtifacts artifacts: "http_response.txt", fingerprint: true
        }

        success {
            echo "✅ Pipeline completed successfully!"
        }

        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
