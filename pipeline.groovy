pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout Frontend') {
            steps {
                retry(3) {
                    git branch: 'master', url: 'https://github.com/Nadun-Dissanayake/Fullstack-Art-And-Craft-Freelancing---Frontend.git'
                }
            }
        }
        stage('Build Docker Image Frontend') {
            steps {  
                bat 'docker build -t ndissanayake/mern_app_frontend_new:latest .'
            }
        }
        stage('SCM Checkout Backend') {
            steps {
                retry(3) {
                    git branch: 'master', url: 'https://github.com/Nadun-Dissanayake/Fullstack-Art-And-Craft-Freelancing---Backend.git'
                }
            }
        }
        stage('Build Docker Image Backend') {
            steps {  
                bat 'docker build -t ndissanayake/mern_app_backend_new:latest .'
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
        stage('Push Image Frontend') {
            steps {
                bat 'docker push ndissanayake/mern_app_frontend_new:latest'
            }
        }
        stage('Push Image Backend') {
            steps {
                bat 'docker push ndissanayake/mern_app_backend_new:latest'
            }
        }
        stage('Build Docker Images'){
            steps{
                script{
                    sh 'docker-compose build'
                }
            }
        }

        stage('Docker Compose Up'){
            steps{
                script{
                    sh 'docker-compose down'
                    sh 'docker-compose up'
                }
            }
        }

    }
    post {
        always {
            bat 'docker logout'
        }
    }
}