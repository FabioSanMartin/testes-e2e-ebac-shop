pipeline{
    agent any

    stages{
        stage('Clonar o repositório') {
            steps{
                git branch: 'main', url: 'https://github.com/FabioSanMartin/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps{
                bat 'npm install'
            }
        }
        stage('Realizar os testes') {
            steps{
         bat 'npm run cy:run'       
            }
        }

    }
}