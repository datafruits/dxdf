import { helper } from '@ember/component/helper';
import moment from 'moment-timezone';
import jstz from 'jstimezonedetect';

export default helper(function formatDate(params/*, hash*/) {
  var timeZone = jstz.determine();
  var formattedTime = moment(params[0]).tz(timeZone.name()).format("MM-DD-YYYY dddd HH:mm z");
  return formattedTime;
});
