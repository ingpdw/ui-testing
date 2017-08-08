/*
 * main test js
 */

var kpop = require( '../task/kpop.js' );
var editor = require( '../task/editor.js' );

function getTask(){
  var task = {};
  var sites = process.argv[ 3 ];

  if( sites == 'kpop' ){
    Object.assign( task, kpop );
  }

  if( sites == 'editor' ){
    Object.assign( task, editor );
  }

  return task;
}

module.exports = getTask();
