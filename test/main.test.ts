import { doSomething } from '../src'
import { checkIdentical, getCode } from '../src/ch1/unique-snowflakes'

test('something',() => expect(doSomething(1)).toBe(1))
test('else',() => expect(doSomething(0)).toBe(0))
const f1 = [1,2,3]
const f2 = [1,2,3]
const f3 = [4,5,6]
const f4 = [2,3,1]
const f5  = [3,1,2]
test('check-code-generation',() => expect(getCode([1,2,3,4])).toBe(10))
test('same-snowflakes',() => expect(checkIdentical(f1,f2)).toBe('Twin snowflakes found'))
test('check-right-snowflake',() => expect(checkIdentical(f1,f4)).toBe('Twin snowflakes found'))
test('check-left-snowflake',() => expect(checkIdentical(f1,f5)).toBe('Twin snowflakes found'))
test('not-matching-snowflakes', () => expect(checkIdentical(f1,f3)).toBe('No two snowflakes are alike'))
