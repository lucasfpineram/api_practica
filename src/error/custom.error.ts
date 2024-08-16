import { StatusCode } from "hono/utils/http-status";
import { SendingEmailError } from "./apiErrors.models";

export class CustomError extends Error {
    constructor(
        public readonly errorCode: StatusCode,
        public readonly errorTitle: string,
        public readonly errorDescription: string,
        public readonly errorStage: string
    ) {
        super('Custom Error');
    }

    // Metodo para mostrar el error como un JSON
    show() {
        return new Response(JSON.stringify({
            error_code: this.errorCode,
            error_title: this.errorTitle,
            error_description: this.errorDescription,
            error_stage: this.errorStage
        }), {
            status: this.errorCode,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    // Metodo para enviar mail con mensaje del error
    async sendMail(context: any) {
        const date = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });
        const project = 'WORKER NOTAS CURSO INGRESO'

        return fetch(context.env.api_notificaciones + '/error', {
            method: 'POST',
            body: JSON.stringify({
                "name_to": "Nicolas",
                "email_to": "nicolas.portelli@utdt.edu",
                "subject": `Error en ${project} (${context.env.environment}) ${date} `,
                "otherAdresses": [],
                "data": {
                    project: project,
                    stage: this.errorStage,
                    request: {
                        url: context.req.url,
                        path: context.req.routePath,
                        body: context.req.body ? await context.req.json() : null,
                    },
                    error_desc: {
                        errorCode: this.errorCode,
                        errorTitle: this.errorTitle,
                        errorDescription: this.errorDescription,
                        errorStage: this.errorStage,
                    }
                }
            }),
            headers: {
                'cache-control': 'no-cache',
                'Content-type': 'application/json',
            },
        }).then(async (response) => {
            if (!response.ok) {
                const errorData = await response.json();
                throw new CustomError(
                    SendingEmailError.errorCode,
                    SendingEmailError.errorTitle,
                    SendingEmailError.errorDescription,
                    SendingEmailError.errorStage
                );
            }
            return response.json();
        });
    }

    // Metodo para enviar mail con mensaje del error
    async setLog(context: any) {
        const date = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false }).slice(0, 15).replace(/,/g, '-');
        const otherAdresses = context.env.error_mail_list.split(',');
        const project = 'WORKER NOTAS CURSO INGRESO'

        var info = JSON.stringify({
            "name_to": "Nicolas",
            "email_to": "nicolas.portelli@utdt.edu",
            "subject": `Error en ${project} (${context.env.environment}) ${date} `,
            "otherAdresses": otherAdresses,
            "data": {
                project: project,
                stage: this.errorStage,
                request: {
                    url: context.req.url,
                    path: context.req.routePath,
                    body: context.req.body ? await context.req.json() : null,
                },
                error_desc: {
                    errorCode: this.errorCode,
                    errorTitle: this.errorTitle,
                    errorDescription: this.errorDescription,
                    errorStage: this.errorStage,
                }
            }
        })

        let db = await context.env.notas_curso_ingreso_d1
        await db.prepare('INSERT INTO logs (info, date) VALUES (?1, ?2)').bind(info, date).run();
        console.log(`Guardo LOG del error en base de datos`);

    }
}
