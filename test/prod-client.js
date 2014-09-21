
var seneca = require('seneca')()

      .use('redis-transport')

      .client({port:9003,pin:'role:run,cmd:execute'})

      .listen({type:'redis',pin:'role:run,info:report'})

      .add('role:run,info:report',function(args,done){
        console.log(args)
        done()
      })

      .act('role:run,cmd:execute,name:npm-all')
