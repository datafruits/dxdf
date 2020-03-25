import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import jstz from 'jstimezonedetect';

export default class ApplicationController extends Controller {
  @tracked jstz;

  get timezone(){
    return jstz.determine().name();
  }
}
