const dev_console = (...args)=>{
  let colors = ['green', 'blue', 'red']
  console.log(`%cinput ${args[0]} %cres:${args[1]} %cexpected:${args[2]}`,
          `color: ${colors[0]}`,`color: ${colors[1]}`, `color: ${colors[2]}`)
}

const dev_console_two = (level, ...args) =>{
  var err = new Error();
  var caller_line = err.stack.split("\n")[2];
  var index = caller_line.indexOf("at ");
  var clean = caller_line.slice(index+2, caller_line.length);
  console.log(clean);
}

if(level == 'normal'){
  console.log('normal log')
}else if(level == 'warn'){
  console.warn('warn')
}else if(level=='error'){
  console.error('error')
}