'use strict';

require('dotenv').config();
const SSH2_SFTP_Client = require('ssh2-sftp-client')
const sftpClient = new SSH2_SFTP_Client();

sftpClient.connect({
  host: process.env.DEPLOY_SSH_HOSTNAME,
  username: process.env.DEPLOY_SSH_USERNAME,
  password: process.env.DEPLOY_SSH_PASSWORD,
  //	port: process.env.DEPLOY_SSH_PORT ?? 22,
  debug: console.log,
}).then(async () => {
  await sftpClient.uploadDir('blog.mattlohkamp.com','/home/public/blog.mattlohkamp.com');
}).then(()=>{
  sftpClient.end();
}).catch(err => {
  console.log(err, 'catch error');
});