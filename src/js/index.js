 const bash = require('@anas2479/bash-mirror')
 const bash_v = require('@anas2479/bash-mirror/package.json').version

 let bashElement = document.getElementById('mybash')

 let mybash = new bash.Bash(bashElement,{
     sign:'$'
 })

 mybash.outPut(`<span>v${bash_v}</span>`)
 mybash.runCommand('mkdir','Welcome')
 mybash.runCommand('touch','welcome.g')
 mybash.runCommand('ls')


 let vText = document.getElementById('versionText')
vText.innerHTML = `v${bash_v}`




