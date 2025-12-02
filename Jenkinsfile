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

        /* 🚀 3. PARALLÉLISME : BUILD + TEST */
        stage('Build & Tests (Parallel)') {
            parallel {

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

                stage('Lint Code') {
                    steps {
                        catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
                            dir("${APP_PATH}") {
                                echo "Running ESLint..."
                                bat "npm run lint || echo 'Lint warnings only'"
                            }
                        }
                    }
                }

            } // ← FIN PARALLEL
        }

        /* 4. SMOKE TEST */
        stage('Smoke Test') {
            steps {
                script {
                    echo "🚦 Running smoke test..."

                    def imageName = "${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}"

                    // Remove old container if exists
                    bat 'docker rm -f react_test >nul 2>&1 || echo "No old container"'

                    // Run new container
                    bat "docker run -d -p 3000:3000 --name react_test ${imageName}"

                    echo "⏳ Waiting for application to start..."
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

        /* 5. PUSH DOCKER IMAGE ON MASTER */
        stage('Push to Docker Hub') {
            when { branch "master" }
            steps {
                echo "Pushing image to Docker Hub..."

                withCredentials([usernamePassword(
                    credentialsId: '178ee507-e30c-4e10-8f1b-aff4213f4f79',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat """
                        docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                        docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}
                    """
                }
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
