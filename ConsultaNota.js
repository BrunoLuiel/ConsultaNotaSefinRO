const puppeteer = require('puppeteer');

//Função que busca a situação na web
async function Consulta(doc){
    const browser = await puppeteer.launch({headless: false,});
    const page = await browser.newPage();
    //Faz acesso a pagina para login
    await page.goto('https://portalcontribuinte.sefin.ro.gov.br/Publico/consultaInternamentoNFe.jsp');
    //Aguardar a pagina carregar (tem no documentation)
    await page.waitForXPath('//*[@id="list-scroll"]/table/tbody/tr[1]/td[2]/input[1]')
    const chave = await page.$x('//*[@id="list-scroll"]/table/tbody/tr[1]/td[2]/input[1]');
    await chave[0].click();
    await page.type('[name="chaveAcesso"]', doc);
    const enter = await page.$x('//*[@id="form-content"]/table/tbody/tr/td[2]/div[1]/a')
    await enter[0].click()


    //await browser.close();
}

// video para o readline https://www.youtube.com/watch?v=bNKi8_J4TLI
const readline = require('readline')
const fs = require('fs'); //Manipula arquivos
const { time } = require('console');
 

async function Execute(){
    const readable = fs.createReadStream('dbTeste.txt')//Arquivo para leitura  
    const rl = readline.createInterface({//Não entendi a necessidade e porque desta instancia
        input: readable,
    })
    
    const asd = rl.on('line', (line) =>{
        console.log(line)
    })
        
}

Consulta('42220204128801000430550010000047621413146688')

