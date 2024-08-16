import { createMiddleware } from 'hono/factory'
import { CustomError } from '../error/custom.error';
import { TokenIsEmptyError, AuthenticatedError } from '../error/apiErrors.models';

import { User } from './models/user.model';

export const authMiddleware = createMiddleware(async (context, next) => {
    let userdata: any = await validate(context)
    const user: User = userdata['data']
    context.set('user', user)

    await next()
})


async function validate(context: any) {
    // console.log(`[${c.req.method}] ${c.req.url}`)
    let token = context.req.header('Authorization')

    if (!token) {
        throw new CustomError(
            TokenIsEmptyError.errorCode,
            TokenIsEmptyError.errorTitle,
            TokenIsEmptyError.errorDescription,
            'Autenticacion'
        );
    }
    // Creo la ruta segura para enviar los datos de la tarjeta de credito
    let res = await callApiAuth(context, token);
    return res;
}

async function callApiAuth(context: any, token: string) {
    return fetch(context.env.api_auth_path + '/validate', {
        method: 'POST',
        body: JSON.stringify({ token: token.replace('Bearer ', '') }),
        headers: {
            'cache-control': 'no-cache',
            'Content-type': 'application/json',
        },
    }).then(async (response) => {
        if (!response.ok) {
            const errorData = await response.json();
            throw new CustomError(
                AuthenticatedError.errorCode,
                AuthenticatedError.errorTitle,
                AuthenticatedError.errorDescription,
                'Autenticacion'
            );
        }
        return response.json();
    });
}
