pipeline {
<<<<<<< HEAD
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
=======
  agent {
    node {
      label 'nodejs-test'
    }

  }
  stages {
    stage('setup') {
      steps {
        sh 'npm install'
      }
    }

  }
>>>>>>> 5c9bf582a2f2452abcc094da244457acb0372d5d
}