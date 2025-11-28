pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "nourhaine123"  
        IMAGE_NAME = "frontend_de_react"       
    }

    options {
        skipStagesAfterUnstable()
    }

    stages {

        /* 1) CHECKOUT */
        stage('Checkout') {
            steps {
                echo "Cloning repository..."
                checkout scm
            }
        }

        /* 2) INSTALL DEPENDENCIES */
        stage('Install') {
            steps {
                echo "Installing React dependencies..."
                sh 'npm install'
            }
        }

        /* 3) BUILD REACT APP */
        stage('Build') {
            steps {
                echo "Building React app..."
                sh 'npm run build'
            }
        }

        /* 4) BUILD DOCKER IMAGE */
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER} .client"
            }
        }

        /* 5) RUN DOCKER CONTAINER */
        stage('Run Docker Container') {
            steps {
                echo "Starting container with Docker Compose..."
                sh "docker-compose up -d --build"
            }
        }

        /* 6) RUN TESTS */
        stage('Smoke Test') {
            steps {
                echo "Running React tests..."
                sh 'npm test'
            }
        }

        /* 7) PUSH IMAGE TO DOCKER HUB ONLY ON MAIN */
        stage('Push Docker Image') {
            when { branch 'main' }
            steps {
                script {
                    echo " Pushing Docker image to Docker Hub..."
                    sh """
                        docker login -u ${DOCKERHUB_USER} -p ${DOCKERHUB_PASSWORD}
                        docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:${env.BUILD_NUMBER}
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline finished successfully!"
        }
        failure {
            echo "❌ Pipeline failed."
        }
    }
}
