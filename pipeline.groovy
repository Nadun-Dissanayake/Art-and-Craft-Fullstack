pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Nadun-Dissanayake/Art-and-Craft-Fullstack.git'
        BRANCH = 'main'
        APP_NAME = 'Art and Craft Ecommerce Website'
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

        stage('Verify Directory Structure') {
            steps {
                script {
                    def backendDir = new File("${WORKSPACE}/api")
                    def frontendDir = new File("${WORKSPACE}/client")
                    
                    if (!backendDir.exists()) {
                        error "Directory 'aoi' not found!"
                    }
                    if (!frontendDir.exists()) {
                        error "Directory 'client' not found!"
                    }
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

        stage('Push Docker Images') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker-compose push'
                    } else {
                        bat 'docker-compose push'
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

    post {
        always {
            script {
                echo 'Cleaning up...'
                if (isUnix()) {
                    sh 'docker-compose down'
                } else {
                    bat 'docker-compose down'
                }
            }
        }
    }
}
