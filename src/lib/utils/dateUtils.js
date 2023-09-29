import { format } from 'date-fns';
import { lt } from 'date-fns/locale';

const formatDate = (data) => {
  return format(new Date(data), ' d MMM  Y', { locale: lt });
};
const DateUtils = {
  formatDate,
};
export default DateUtils;
