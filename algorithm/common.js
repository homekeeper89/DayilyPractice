const dev_console = (...args)=>{
  let colors = ['green', 'blue', 'red']
  console.log(`%cinput ${args[0]} %cres:${args[1]} %cexpected:${args[2]}`,
          `color: ${colors[0]}`,`color: ${colors[1]}`, `color: ${colors[2]}`)
}