import { test, assert } from '../../spin-test/src/index'
import { isValidEmail } from './email-validator'

test("testValidEmail", async () => {
    assert.isTrue(isValidEmail("xyz@fermyon.com"))
})

test("testInvalidEmail", async () => {
    assert.isTrue(!isValidEmail("xyz.com"))
})