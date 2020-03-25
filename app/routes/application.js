import Route from '@ember/routing/route';
import moment from 'moment';
import jstz from 'jstimezonedetect';

export default class ApplicationRoute extends Route {
  model(){
    let query = {};
    query.timezone = jstz.determine().name();

    let start = "2020-03-27";
    let end = "2020-03-29";
    query.start = moment(start).startOf('week').subtract(1, 'week').format('YYYY-MM-DD');
    query.end = moment(end).endOf('week').add(1, 'week').format('YYYY-MM-DD');
    return this.store.query('scheduled-show', query);
  }
}
