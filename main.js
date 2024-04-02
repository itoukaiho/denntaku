function get_calc(btn) {
    if(btn.value =="="){
        document.dentaku.display.value = eval(document.dentaku.display.value);

    }else if(btn.value == "AC"){
    document.dentaku.display.value ="";

    }else {
        if(btn.value == "*"){
            btn.value = "*";

        }else if(btn.value == "/"){
            btn.value ="/";
        }
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "*";
        document.dentaku.div_btn.value = "/";
        }
    }


    const  addition = document.getElementById('addition');
    const subtraction = document.getElementById('subtraction');
    const multiplication = document.getElementById('multiplication');
    const division=  document.getElementById('division');
    const decimal = document.getElementById('decimal');
    const  AC = document.getElementById('AC');
    const equal = document.getElementById('equal');
    const numberA= document.getElementById('numbera');
    const numberB= document.getElementById('numberb');
    const numberC= document.getElementById('numberc');
    const numberD= document.getElementById('numberd');
    const numberE= document.getElementById('numbere');
    const numberF= document.getElementById('numberf');
    const numberG= document.getElementById('numberg');
    const numberH= document.getElementById('numberh');
    const numberI= document.getElementById('numberi');
    const numberJ= document.getElementById('numberj');
    const numberK= document.getElementById('numberk');


    


    addition.addEventListener("click", function() {
        addition.disabled = true;
        subtraction.disabled = true;
        multiplication.disabled = true;
        division.disabled = true;
        
    
    });
    
    subtraction.addEventListener("click", function() {
        addition.disabled = true;
        subtraction.disabled = true;
        multiplication.disabled = true;
        division.disabled = true;
        number.disabled = false;
    
    });

    multiplication.addEventListener("click", function() {
        addition.disabled = true;
        subtraction.disabled = true;
        multiplication.disabled = true;
        division.disabled = true;
        
    
    });

    division.addEventListener("click", function() {
        addition.disabled = true;
        subtraction.disabled = true;
        multiplication.disabled = true;
        division.disabled = true;
        
    
    });

    decimal.addEventListener("click", function() {
        decimal.disabled = true;
        addition.disabled = true;
        subtraction.disabled = true;
        multiplication.disabled = true;
        division.disabled = true;
    
    });

    AC.addEventListener("click", function() {
        addition.disabled = false;
        subtraction.disabled = false;
        multiplication.disabled = false;
        division.disabled = false;
        decimal.disabled = false;
        
    
    });
    
    equal.addEventListener("click", function() {
        addition.disabled = false;
        subtraction.disabled = false;
        multiplication.disabled = false;
        division.disabled = false;
        decimal.disabled = false;
        
    
    });




    numberA.addEventListener("click", function() {
        addition.disabled = false;
        subtraction.disabled = false;
        multiplication.disabled = false;
        division.disabled = false;
        decimal.disabled = false;
       
        });

    numberB.addEventListener("click", function() {
        addition.disabled = false;
        subtraction.disabled = false;
        multiplication.disabled = false;
        division.disabled = false;
        decimal.disabled = false;
       
        });

     numberC.addEventListener("click", function() {
            addition.disabled = false;
            subtraction.disabled = false;
            multiplication.disabled = false;
            division.disabled = false;
            decimal.disabled = false;
           
            });
    numberD.addEventListener("click", function() {
            addition.disabled = false;
            subtraction.disabled = false;
            multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
               
            });
    numberD.addEventListener("click", function() {
            addition.disabled = false;
            subtraction.disabled = false;
            multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
                   
            });
    numberE.addEventListener("click", function() {
             addition.disabled = false;
             subtraction.disabled = false;
             multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
                       
            });



    numberF.addEventListener("click", function() {
             addition.disabled = false;
            subtraction.disabled = false;
             multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
                           
             });

    numberG.addEventListener("click", function() {
             addition.disabled = false;
             subtraction.disabled = false;
             multiplication.disabled = false;
             division.disabled = false;                
             decimal.disabled = false;
                               
            });


    numberH.addEventListener("click", function() {
            addition.disabled = false;
            subtraction.disabled = false;
            multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
                                   
            });



    
    numberI.addEventListener("click", function() {
            addition.disabled = false;
            subtraction.disabled = false;
            multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
                                           
            });

    numberK.addEventListener("click", function() {
            ddition.disabled = false;
            subtraction.disabled = false;
            multiplication.disabled = false;
            division.disabled = false;                
            decimal.disabled = false;
                                           
            });
    
    

            