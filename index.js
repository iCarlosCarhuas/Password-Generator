const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//Settings
let passwordLenght = 15
//DOM
let passwordEl = document.getElementById("password-el") 

//Function to vary password keywords    
    function getRandomCharacter() {
        let random = Math.floor(Math.random()*characters.length )  
        return characters[random]
    }
    function renderPassword() {
        let randomPassword = ""
        for (let i = 0; i < passwordLenght; i++ ) {
            randomPassword += getRandomCharacter()
            passwordEl.textContent = randomPassword
        }
        return randomPassword
    }     
    function setPassword() {
        renderPassword()
    }
    
    
    
    function getNoSymbolsPassword() {
        let newRandom1 = Math.floor(Math.random()*charactersNoSymbols.length )  
        return charactersNoSymbols[newRandom1]
              
    }
    function renderSymbols() {
        let randomSymbols = ""
        for (let i = 0; i < passwordLenght; i++ ) {
            randomSymbols += getNoSymbolsPassword()
            passwordEl.textContent = randomSymbols
        }
        return randomSymbols
    }      
    function setSymbols() {
        renderSymbols()
    }
    
    function getNoNumbersPassword() {
        let newRandom2 = Math.floor(Math.random()*charactersNoNumbers.length)
        return charactersNoNumbers[newRandom2]
    }
    function renderNumbers(){
        let randomNumbers = ""
        for(let i = 0 ; i < passwordLenght; i++){
            randomNumbers += getNoNumbersPassword()
            passwordEl.textContent = randomNumbers
        }
    }
    function setNumbers() {
        renderNumbers()
    }
    
    
    
    
    
    