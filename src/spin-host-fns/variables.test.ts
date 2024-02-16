import { Config, } from '@fermyon/spin-sdk'
import { test, assert } from '../../spin-test/src/index'
import { getPassword } from './variables'
import SafeMock, { when, verify } from "safe-mock";

test("getPassword", async () => {
    const mockConfig = SafeMock.build<typeof Config>()
    when(mockConfig.get("karthik")).return("test")
    getPassword(mockConfig, "karthik")
    assert.isEqual(getPassword(mockConfig, "karthik"), "test")
    verify(mockConfig.get).calledWith("karthik")
})