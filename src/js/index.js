 const bash = require('@anas2479/bash-mirror')
 const bash_v = require('@anas2479/bash-mirror/package.json').version

 let bashElement = document.getElementById('mybash')

 let mybash = new bash.Bash(bashElement,{
     sign:'$'
 })

 mybash.input(`What's your name?`, (name)=>{
     if(name.length){
         mybash.outPut(`🎉 Welcome <b>${_.capitalize(name)}</b>. `)

         mybash.input(`So, <b>${_.capitalize(name)}</b>,  you new to Bash Mirror? - Y or N`, (answer)=>{
             if(answer === 'y' || answer === 'Y'){
                 mybash.outPut(`
                 <p>That's perfectly fine <b>${_.capitalize(name)}</b> 😀.</p>
                 <p> You can start with the documentation <a href="https://www.notion.so/Bash-Mirror-3c01c079baef45a6be1e86132e853a0c">here</a>,</p>
                 <p> or you can check out the <a href="https://github.com/anas2479/bash-mirror">Github repo</a>.</p>

                 `)
             }else if( answer === 'n'|| answer === 'N'){
                 mybash.outPut(`
                 <p> Well <b>${_.capitalize(name)}</b>, Bash Mirror is at v${bash_v} currently.</p> <p> You can check out whats new in this version at <a href="https://github.com/anas2479/bash-mirror/releases/tag/v${bash_v}">Github</a>
                 `)
             }
         })
     }
 })


 let vText = document.getElementById('versionText')
vText.innerHTML = `v${bash_v}`




