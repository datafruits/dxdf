import Route from '@ember/routing/route';
import moment from 'moment';
import jstz from 'jstimezonedetect';

export default class ApplicationRoute extends Route {
  model(){
    let query = {};
    query.timezone = jstz.determine().name();

    let start = "2021-05-31";
    let end = "2021-06-08";
    query.start = moment(start).startOf('day').format('YYYY-MM-DD');
    query.end = moment(end).endOf('day').format('YYYY-MM-DD');
    return this.store.query('scheduled-show', query);
  }
}
