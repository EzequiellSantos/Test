// V valor total que ele tem
// A açougue
// F farmácia
// p padaria


function SomaContas(V,A,F,P){

    if(V > 0 && V < 2000 && A > 1 && A < 1000 && F > 1 && F < 1000 && P > 1 && P < 1000){
        let all = A + F + P

        if (all <= V) {
            return 3
        }else if(/* all >= V && */ A <= V && F <= V && P > V){
            return 2
        }else if(/* all >= V && */ A > V && F <= V && P <= V){
            return 2
        }else if(/* all >= V && */ A <= V && F > V && P <= V){
            return 2
        }else if(/* all >= V && */ A <= V && F > V && P > V){
            return 1
        }else if(/* all >= V && */ A > V && F <= V && P > V){
            return 1
        }else if(/* all >= V && */ A > V && F > V && P <= V){
            return 1
        }else if(A > V && F > V && P > V){
            return 0
        }
        
    }

    console.log(SomaContas)
}

SomaContas(100,30,40,30)