import { User } from '../middleware/models/user.model';
import { MySQL } from '../resources/mysql';
import { CustomResponse } from './models/response.model';

export async function getTableDataFromMySQL(context: any) {

    const user: User = context.get('user')
    var table = await MySQL.getTableData()

    const customResponse: CustomResponse = new CustomResponse(200, { "table": table }, true, null, null)
    return customResponse.formatResponse()
}
