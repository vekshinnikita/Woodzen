export function splitPrice(a: number | string){
    if (a){
        a = a.toString()
        let count = 0
        let result = []

        for (let i=a.length-1; i>=0; i--){
        if (count === 3){
            count = 0
            result.unshift(' ')
        }
        count += 1
        result.unshift(a[i])
        }

        return result.join('')
    }
    return 0
}