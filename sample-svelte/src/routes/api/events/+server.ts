import type { RequestEvent } from "@sveltejs/kit";
import { json } from '@sveltejs/kit';

export function GET(req: RequestEvent) {
    let options: Object = {
        status: 200,
        statustText: "OK",
    }
    let body: Object = {
        message: "SvelteKit req OK",
        headers: options,
    }
    return json(body)
}