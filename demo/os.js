const os = require('os');

console.log('Operation system: ', os.platform());
console.log('Processor achitecture: ', os.arch());
//console.log('Processor iformation: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('Home directory: ', os.homedir());
console.log('Time computer work: ', os.uptime());
