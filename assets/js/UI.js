class UI {
    allSelectors(){
        const passwordResult = document.querySelector('.result')
        const copyBtnElm = document.querySelector('#clipBtn')
        const upperCaseCheckElm = document.querySelector('#upperCaseOpt')
        const passwordLengthElm = document.querySelector('#passLength')
        const lowerCaseCheckElm = document.querySelector('#lowercaseOpt')
        const numberCheckElm = document.querySelector('#numberOpt')
        const syboleCheckElm = document.querySelector('#symbolsOpt')
        const generateBtn = document.querySelector('#passBtn')

        return {
            passwordResult,
            copyBtnElm,
            upperCaseCheckElm,
            passwordLengthElm,
            lowerCaseCheckElm,
            numberCheckElm,
            syboleCheckElm,
            generateBtn
        }
    }

    initialize(){
        const {copyBtnElm, generateBtn, passwordResult} = this.allSelectors()

        copyBtnElm.addEventListener('click', e => {
            if(this.validPassResultField()){
                this.copyToClipBoardFunc()
            }
        })
        
        generateBtn.addEventListener('click', () => {
            this.genPass()
            const finalPassWord = this.genPass()
            passwordResult.textContent = finalPassWord
        })
        
    }

    genPass(){
        const {
            upperCaseCheckElm,
            passwordLengthElm,
            lowerCaseCheckElm,
            numberCheckElm,
            syboleCheckElm
        } = this.allSelectors()
        
        let lettersUpper = '';
        let numbers = '';
        let lettersLower = '';
        let symbols = '';

        let randomNumber = 0;
        let randomSymbolNum = 0;
        let randomUpperLetNum = 0;
        let randomLowerLetNum = 0;
        let password = '';

        // upper case check
        if(upperCaseCheckElm.checked){
            lettersUpper = "ABCDEFGHIJKLMNOPQRSTUBWXYZ"   
        }
        // lower case check
        if(lowerCaseCheckElm.checked){
            lettersLower = "abcdefghijklmnopqrstuvwxyz"
        }
        // number case check
        if(numberCheckElm.checked){
            numbers = "0123456789"
        }
        // symbol case check
        if(syboleCheckElm.checked){
            symbols = "!@#$%^&*()"; 
        }

        for(let i = 0; i <= passwordLengthElm.value; i++){
            randomNumber = Math.floor(Math.random() * numbers.length)
            randomSymbolNum = Math.floor(Math.random() * symbols.length)
            randomUpperLetNum = Math.floor(Math.random() * lettersUpper.length)
            randomLowerLetNum = Math.floor(Math.random() * lettersUpper.length)

            password += symbols.substring(randomSymbolNum, randomSymbolNum+1)
            password += numbers.substring(randomNumber, randomNumber+1)
            password += lettersLower.substring(randomLowerLetNum, randomLowerLetNum+1)
            password += lettersUpper.substring(randomUpperLetNum, randomUpperLetNum+1)
        }
               
        const finalPassWord = password.slice(0, passwordLengthElm.value)
        return finalPassWord
    }

    validPassResultField(){
        const {passwordResult} = this.allSelectors()

        if(passwordResult.textContent){
            alert('PassWord Copied')
            return true
        }else{
            alert('Please Generate a password')
            return false
        }
    }

    copyToClipBoardFunc(){
        const {passwordResult} = this.allSelectors()
        const copiedPass = navigator.clipboard.writeText(passwordResult.textContent)  
        // console.log(passwordResult.textContent);
        // return copiedPass
    }

}

const ui = new UI()
export default ui