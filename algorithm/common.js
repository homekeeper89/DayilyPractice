const dev_console = (...args)=>{
  let colors = ['green', 'blue', 'red']
  console.log(`%cinput ${args[0]}`, `color: ${colors[0]}`)
  console.log(`%cres:${args[1]}`, `color: ${colors[1]}`)
}