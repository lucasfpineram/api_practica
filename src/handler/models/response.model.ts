export class CustomResponse {
    constructor(
        public readonly statusCode: number,
        public readonly result: any,
        public readonly success: boolean,
        public readonly errors: string | null,
        public readonly messages: string | null
    ) {
        this.result = result;
        this.success = success;
        this.errors = errors;
        this.messages = messages;
    }

    // Metodo para mostrar el error como un JSON
    public formatResponse() {
        return new Response(JSON.stringify({
            result: this.result,
            success: this.success,
            errors: this.errors,
            messages: this.messages
        }), {
            status: this.statusCode,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
