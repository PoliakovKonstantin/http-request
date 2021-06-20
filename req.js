const http=require('http')
const readline=require('readline')
const input=readline.createInterface(process.stdin)

const path=require('path')
var dotenv = require('dotenv').config({path: path.join(__dirname, '.env')}).parsed.key.toString()
console.log("Введите ваше местоположение")
input.on('line',(data)=>{
    const url='http://api.weatherstack.com/current?access_key='+dotenv+'&query='+data
    http.get(url,(res)=>{
        res.setEncoding('utf-8')
        res.on('data', (chunk) => {
            console.log(chunk)});
    })
})
