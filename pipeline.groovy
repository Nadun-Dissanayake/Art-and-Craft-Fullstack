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

        stage('Tag Docker Images') {
            steps {
                script {
                    if (isUnix()) {
                        sh """
                        docker tag devops_frontend:latest ${FRONTEND_IMAGE}
                        docker tag devops_backend:latest ${BACKEND_IMAGE}
                        """
                    } else {
                        bat """
                        docker tag devops_frontend:latest ${FRONTEND_IMAGE}
                        docker tag devops_backend:latest ${BACKEND_IMAGE}
                        """
                    }
                }
            }
        }

        stage('Verify Docker Images') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker images'
                    } else {
                        bat 'docker images'
                    }
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'duckerhubpassword', variable: 'DOCKER_HUB_PASSWORD')]) {
                    script {
                        if (isUnix()) {
                            sh 'echo $DOCKER_HUB_PASSWORD | docker login -u ndissanayake --password-stdin'
                        } else {
                            bat 'docker login -u ndissanayake -p %DOCKER_HUB_PASSWORD%'
                        }
                    }
                }
            }
        }

        stage('Push Image Frontend') {
            steps {
                script {
                    if (isUnix()) {
                        sh "docker push ${FRONTEND_IMAGE}"
                    } else {
                        bat "docker push ${FRONTEND_IMAGE}"
                    }
                }
            }
        }

        stage('Push Image Backend') {
            steps {
                script {
                    if (isUnix()) {
                        sh "docker push ${BACKEND_IMAGE}"
                    } else {
                        bat "docker push ${BACKEND_IMAGE}"
                    }
                }
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
