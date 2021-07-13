const http = require('http')
const fs = require('fs')
const myfirstmodule = require('./module.js')

const server = http.createServer((req,res) => {
    // res.end('Moja pierwsza aplikacja na node!')
    fs.readFile('index.html', function(err,data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(`${data} ${myfirstmodule.myFunction()}`)
        return res.end()
    })

})

server.listen(3000, () => {
    console.log('Twój node serwer ruszył :-)')
})