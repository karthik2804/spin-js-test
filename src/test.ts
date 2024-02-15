import { test, assert } from '../spin-test/src/index'
import { add } from './add'

test("adding ints", async () => {
    assert.isEqual(add(1, 1), 2, "addition of simple ints fails")
})

test("adding floats", async () => {
    assert.isEqual(add(1.0, 2.0), 2.0, "addition of simple floats fails")
})