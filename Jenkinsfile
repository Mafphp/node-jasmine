pipeline {
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
}