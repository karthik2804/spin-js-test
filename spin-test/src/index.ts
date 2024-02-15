type asyncFunction = () => Promise<void>

interface TestItem {
    name: string,
    fn: asyncFunction
}

export let tests: TestItem[] = []

export function test(name: string, fn: asyncFunction) {
    tests.push(
        {
            name: name,
            fn: fn
        }
    )
}

export async function run() {
    console.log("\nRunning tests using spin test runner")
    console.log("------------------------------------\n")
    let passed = 0
    let failed = 0
    await tests.map(async (test) => {
        try {
            await test.fn()
            console.log(`running "${test.name}"... OK`)
            passed++
        } catch (err) {
            console.log(`running "${test.name}"... FAILED`)
            //@ts-ignore
            console.log(err.message)
            failed++
        }
    })
    console.log(`\n\n Ran ${tests.length} test: ${passed} Passed, ${failed} Failed`)
}


type Primitive = string | number | boolean | null | undefined;

function isDeepEqualityCheck(obj1: any, obj2: any): boolean {
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !isDeepEqualityCheck(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export const assert = {
    isEqual: function <T extends Primitive>(actual: T, expected: T, message = "Assertion failed"): void {
        if (actual !== expected) {
            throw new Error(`${message} - Expected: ${expected}, Actual: ${actual}`);
        }
    },

    isDeepEqual: function (actual: any, expected: any, message = "Deep equality assertion failed"): void {
        if (!isDeepEqualityCheck(actual, expected)) {
            throw new Error(`${message} - Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`);
        }
    }
};