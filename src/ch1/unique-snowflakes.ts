export class SnowflakeNode {
    data: Array<number>
    next: SnowflakeNode | null
    constructor(data: Array<number>, next:SnowflakeNode | null = null) {
        this.data = data
        this.next = next
    }
}

export class SnowFlakeList {
    head: null | SnowflakeNode
    constructor(head: null | SnowflakeNode = null) {
        this.head = head
    }
    insertAtStart(data: Array<number>) {
        const newNode = new SnowflakeNode(data)
        newNode.next = this.head
        this.head = newNode
    }
    printList() {
        let curr = this.head
        while (curr) {
            console.log(`${curr.data} => ${curr.next}`)
            curr = curr.next
        }
    }
}

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

export function getCode(snowflake:Array<number>) {
    const total = snowflake.reduce((total, amount) => total + amount)
    return total % 10000
}

export function checkIdentical(snowflake1:Array<number>, snowflake2:Array<number>): Result {
    for (let index = 0; index < snowflake1.length; index++) {
        if (checkRight(snowflake1,snowflake2,index))
            return 'Twin snowflakes found'
        if (checkLeft(snowflake1,snowflake2,index))
            return 'Twin snowflakes found'
    }
    return 'No two snowflakes are alike'
}