function checkRight(snowflake1:Array<number>, snowflake2:Array<number>,start:number) {
    
    for (let index = 0; index < snowflake1.length; index++) {
        let snow2index = start + index
        if (snow2index >= snowflake1.length) 
            snow2index = index - snowflake1.length

        if (snowflake1[index] != snowflake2[snow2index]) 
            return 0
        return 1
    }
}

function checkLeft(snowflake1:Array<number>, snowflake2:Array<number>, start:number) {
    for (let index = 0; index < snowflake1.length; index++) {
        let snow2index = start - index

        if (snow2index < 0)
            snow2index = index + snowflake1.length

        if (snowflake1[index] != snowflake2[snow2index])
            return 0
        return 1

    }
}

export function checkIdentical(snowflake1:Array<number>, snowflake2:Array<number>) {
    for (let index = 0; index < snowflake1.length; index++) {
        if (checkRight(snowflake1,snowflake2,index))
            return 1
        if (checkLeft(snowflake1,snowflake2,index))
            return 1
    }
    return 0
}
