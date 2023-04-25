
//DE DONDE SALEN LOS RESULTADOS, DE QUÈ TIPO SON 

type Operations = 'multiply' | 'add' |  'divide'
type Result = number

const calculator = (a: number, b:number, op:Operations): Result => {
    // if (!operations.includes(op)){
    //     console.log('this operation is not definied')
    // }

    if (op === 'multiply') return a*b
    if (op === 'add') return a+b
    if (op === 'divide') {
        if (b===0) throw new Error('can\t divide by 0! sorry!')
        return a/b
    }

    throw new Error('Operation is not valid')
}


console.log('el resultado de la operacion es: '+ calculator(1,3,'add'))

//npm run calculator