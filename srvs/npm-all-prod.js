
var seneca = require('seneca')()
      .use('redis-transport')
      .use('run')
      .client({type:'redis',pin:'role:run,info:report'})
      .listen()
