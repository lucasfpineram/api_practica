import { StatusCode } from "hono/utils/http-status";


export class AuthenticatedError extends Error {
    static errorTitle = 'Authenticated Error';
    static errorDescription = 'El usuario no se encuentra correctamente autenticado para realizar la operacion solicitada';
    static errorCode: StatusCode = 403;
    static errorStage = 'Etapa de autenticacion del usuario. Llamada a la API AUTH';
}

export class TokenIsEmptyError extends Error {
    static errorTitle = 'Token missing Error';
    static errorDescription = 'El token enviado esta vacio o es null';
    static errorCode: StatusCode = 404;
    static errorStage = 'Etapa de autenticacion del usuario. Llamada a la API AUTH';
}

export class SendingEmailError extends Error {
    static errorTitle = 'Error sending mail';
    static errorDescription = 'El envio de mail fallo';
    static errorCode: StatusCode = 500;
    static errorStage = 'Etapa de notificaciones de errores hacia el usuario';
}

export class EmptyResponseInDDBB extends Error {
    static errorTitle = 'Empty Response';
    static errorDescription = 'La respuesta viene vacia de la base de datos';
    static errorCode: StatusCode = 404;
    static errorStage = 'Etapa de consulta a la base de datos';
}
