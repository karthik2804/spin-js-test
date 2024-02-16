import { Config } from "@fermyon/spin-sdk";

export function getPassword(configStore: typeof Config, user: string): string {
    return configStore.get(user)
}