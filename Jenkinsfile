def image_fe = 'report_fe'
def jfrogUrl = '171.244.27.138:8082/'      
//No change
def jfrogServer = 'jfrogar1'
def jfrogRepo = 'vnpost_bank_gateway'
def registry_fe = "mbewallet-vnpost/${image_fe}"
def jFrogReg_fe = "${jfrogRepo}/${image_fe}"
node ('jenkins_build'){
    try {
        stage('Checkout Git') {
            checkout scm
            stage('Docker build') {
                echo  "${params.imageTag}"
                sh "npm install -y"
                sh "npm i gzipper -g"
                sh "npm run prod"
                sh 'rm -rf node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file__'
                docker.build("mbewallet-vnpost/report_fe"+ ":${params.imageTag}" , "-f Dockerfile .")
            }    
        }
        withCredentials([usernamePassword(credentialsId: 'jfrogserver', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh "docker login -u $USERNAME -p $PASSWORD $jfrogUrl$jfrogRepo"
        }
        sh "docker tag  ${registry_fe}:${params.imageTag} ${jfrogUrl}${jFrogReg_fe}:${params.imageTag}"
        sh "docker push ${jfrogUrl}${jFrogReg_fe}:${params.imageTag}"
    }catch (e) {
        currentBuild.result = 'FAILED'
        throw e
    } finally {
    }   
}