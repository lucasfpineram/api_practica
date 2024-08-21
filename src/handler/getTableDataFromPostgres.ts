import { User } from '../middleware/models/user.model';
import { Postgres } from '../resources/postgres'; // Cambiado a PostgreSQL
import { CustomResponse } from './models/response.model';

export async function getTableDataFromPostgreSQL(context: any) { 

    const user: User = context.get('user');
    var table = await Postgres.getAllTableData(); 

    const customResponse: CustomResponse = new CustomResponse(200, { "table": table }, true, null, null);
    return customResponse.formatResponse();
}
