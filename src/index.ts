import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"
import { run } from '../spin-test/src/index'
import "./test"

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  await run()
  return {
    status: 200,
    headers: { "content-type": "text/plain" },
    body: "Hello from TS-SDK"
  }
}