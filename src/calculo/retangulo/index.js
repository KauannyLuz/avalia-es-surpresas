
export async function Retangulo(base, altura){

    let array = []
 
    for(let col = 1; col <= altura ; col++)
    {

        for (let lin = 1; lin <= base; lin++)
        {
            array.push('* ')
        }

        array.push(<br></br>)
    }   

    return array
}



console.log(Retangulo(3,5));