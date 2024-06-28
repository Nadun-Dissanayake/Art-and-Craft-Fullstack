pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Nadun-Dissanayake/Art-and-Craft-Fullstack.git'
        BRANCH = 'main'
        APP_NAME = 'Art and Craft Ecommerce Website'
        FRONTEND_IMAGE = 'ndissanayake/devops_frontend:latest'
        BACKEND_IMAGE = 'ndissanayake/devops_backend:latest'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Clone Repository') {
            steps {
                retry(3) {
                    git branch: "${BRANCH}", url: "${REPO_URL}"
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker-compose build'
                    } else {
                        bat 'docker-compose build'
                    }
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'duckerhubpassword', variable: 'mernapp')]) {
                    script {
                        bat "docker login -u ndissanayake -p ${mernapp}"
                    }
                }
            }
        }

        stage('Add tag to Image Frontend') {
            steps {
                bat 'docker tag devops-frontend:latest ndissanayake/devops_frontend:latest'
            }
        }

        stage('Add tag to Image Backend') {
            steps {
                bat 'docker tag devops-backend:latest ndissanayake/devops_backend:latest'
            }
        }

        stage('Push Image Frontend') {
            steps {
                bat 'docker push ndissanayake/devops_frontend:latest'
            }
        }

        stage('Push Image Backend') {
            steps {
                bat 'docker push ndissanayake/devops_backend:latest'
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                        docker-compose down
                        docker-compose up -d
                        '''
                    } else {
                        bat '''
                        docker-compose down
                        docker-compose up -d
                        '''
                    }
                }
            }
        }
    }
}
