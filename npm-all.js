/* Copyright (c) 2014 Richard Rodger, MIT License */
/* jshint node:true, asi:true, eqnull:true */
"use strict";


var fs = require('fs')

var request = require('request')
var through = require('through')


try {
  var outfile = process.argv[2] || './outfile'

  var sink = fs.createWriteStream( outfile)

  var source = request({url:'http://registry.npmjs.org/-/all'})

  var count = 0, last = 0

  source
    .pipe(through(function(data){
      count += data.length
      if( (1024*1024) < count - last ) {
        process.stdout.write(count+',')
        last = count
      }
      this.queue(data)
    }, function(end){
      console.log('DONE '+count)
      this.queue(null)
    }))
    .pipe(sink)

}
catch(e) {
  console.log('FAILED '+count)
  console.error(e)
  process.exit(1)
}
