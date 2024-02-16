import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"
import { run } from '../spin-test/src/index'

// Use Webpack's require.context to dynamically import test files
const testsContext = (require as any).context('.', true, /\.test\.ts$/);
testsContext.keys().forEach(testsContext);

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
    await run()
    return {
        status: 200,
        headers: { "content-type": "text/plain" },
        body: "Hello from TS-SDK"
    }
}