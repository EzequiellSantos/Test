// V valor total que ele tem
// A açougue
// F farmácia
// p padaria
'use strict';
 var readlineSync = require('readline-sync')

 var valorV = readlineSync.question('Digite o Valor Total:')
 var valorA = readlineSync.question('Digite o Valor da conta Do Açougue:')
 var valorF = readlineSync.question('Digite o Valor da conta Da Farmácia:')
 var valorP = readlineSync.question('Digite o Valor da conta Da Padaria:')

function SomaContas(V,A,F,P){

    if(V > 0 && V < 2000 && A > 1 && A < 1000 && F > 1 && F < 1000 && P > 1 && P < 1000){
        let all = A + F + P
        let AP = A + P
        let FP = F + P
        let FA = F + A

        if (all <= V) {

            return 3

        }else if (all > V){
            if(A <= V && F <= V && P > V){

                return 2

            }else if(A > V && F <= V && P <= V){

                return 2

            }else if(A <= V && F > V && P <= V){

                return 2

            }else if(A <= V && F > V && P > V){

                return 1

            }else if(A > V && F <= V && P > V){

                return 1

            }else if(A > V && F > V && P <= V){

                return 1

            }
                
        }if(all > V){

        if( FP <= V && A < V){

            return 2
 
        }else if(AP <= V && F < V){
 
            return 2
 
        }else if(FA <= V && P < V){
             
            return 2
        }
        else if(A > V && F > V && P > V){

            return 0

        }
        else if(FP > V && A <= V){

            return 1

        }else if(AP > V && F <= V){

            return 1

        }else if(FA > V && P <= V){
                
            return 1 // fim maior
              
        }
        
    }
}
    console.log(SomaContas)
}

SomaContas(V,A,F,P)
