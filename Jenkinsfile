pipeline {
     agent {
        node {
            label 'master'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'printenv'
                sh 'node ./scripts/index.js'
            }
        }
    }
}