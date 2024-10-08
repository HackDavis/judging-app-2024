import { type NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { GetHelpTimers } from '@datalib/helpTimers/getHelpTimer';

export async function GET(request: NextRequest) {
  const queries = await getQueries(request, 'helpTimers');
  return GetHelpTimers(queries);
}
