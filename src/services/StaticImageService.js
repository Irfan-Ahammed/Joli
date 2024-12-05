import {ApiConstants} from '../contants';

const getFlagIcon = (
  code = 'IN', 
  style = ApiConstants.COUNTRY_FLAG.STYLE.FLAT,
  size = ApiConstants.COUNTRY_FLAG.SIZE.MEDIUM,
) => `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;

export default {getFlagIcon};
