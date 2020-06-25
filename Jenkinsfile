pipeline {
     agent {
        node {
            label 'master'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'node ./scripts/index.js'
            }
        }
    }
}