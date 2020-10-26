let calc = {
    cliker:0,
    numbers: [],
    operations:[],
    
    
    isValue(event){
       
        if (typeof +event.target.id === 'number' && !isNaN(+event.target.id )){
            
            this.viewNumber(+event.target.id);
            
            
        } else if (event.target.id === 'sum' || event.target.id === 'clean' || event.target.id === 'multiply' || event.target.id === 'division'
                  || event.target.id === 'degree'){
            
            this.hasNumber();
            this.hasOperations(event.target.innerHTML);
            view.clearOperators();
            view.clearNumbers();
            this.cliker = 0;
            view.wathOperatipons(event.target.innerHTML);
            
        }  else if ( event.target.id === 'equally' ){
            let stringHeader = document.querySelector('.numbers');
            this.numbers.push(stringHeader.innerHTML);
            let result = this.hasEqually();
            view.clearOperators();
            view.clearNumbers()
            view.clear();
            view.wathOperatipons(event.target.innerHTML);
            view.wath(result);
        } else if ( event.target.id === 'clear' ){
            
            view.clear();
            
        }
        
        
    },
    viewNumber(num) {
        if(this.cliker < 7){
        view.wath(num);
            
        }
        this.cliker++;
      
      
        
    },
    
    hasNumber(){
        
        let stringHeader = document.querySelector('.numbers');
        this.numbers.push(stringHeader.innerHTML);
    },
    
    hasOperations(operations){
        
        this.operations.push(operations);
    },
    hasEqually(){
        
        let result = +this.numbers[0];
        
        for(let i = 0; i < this.numbers.length - 1; i++){
            
            if (this.operations[i] === '+'){
                
                result += +this.numbers[i+1];
                
            } else if ( this.operations[i] === '*' ) {
                
                result *= +this.numbers[i+1];
                
            } else if (this.operations[i] === '-'){
                
                result -= +this.numbers[i+1];
                
            } else if (this.operations[i] === 'x <sup>n</sup>'){
                       
                       result **= +this.numbers[i+1];
                       
                       
            } else if (this.operations[i] === '/' && +this.numbers[i+1] !== 0){
                
                result /= +this.numbers[i+1];
                
            } else {
                
                result = 'Ошибка!';
                break;
            }
        }
        console.log(result);
        return (result < 2**53) ? result : 'Слишком большое число!';
    }
    
};

let view = {
    
    wath(str){
        
        let stringHeader = document.querySelector('.numbers');
        stringHeader.insertAdjacentHTML('beforeend', `${str}`);
        
    },
    
    wathOperatipons(str){
        
        let stringHeader = document.querySelector('.operations');
        stringHeader.insertAdjacentHTML('beforeend', `${str}`);
        
    },
    
    clear() {
        
        this.clearNumbers();
        this.clearOperators();
        calc.numbers.splice(0, calc.numbers.length);
        calc.operations.splice(0, calc.operations.length);
        
    },
    
      clearNumbers() {
        
        let stringHeader = document.querySelector('.numbers');
        stringHeader.innerHTML = '';
        
    }, 
    clearOperators() {
        
        let stringHeader = document.querySelector('.operations');
        stringHeader.innerHTML = '';
        
    }
    
}