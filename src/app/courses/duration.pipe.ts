import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  private readonly HOURS_LABEL = 'h';
  private readonly MINUTES_LABEL = 'min';

  transform(duration: any): any {
    let hours: string = Math.floor(duration / 60).toFixed(0);
    let minutes: string = (duration % 60 + '');

    let result: string = '';

    if (Number.parseInt(hours) > 0) { // format: hh h mm min
      result += hours + ' ' + this.HOURS_LABEL + ' ';
      if(Number.parseInt(minutes) < 10) {
        result += '0'
      }
      result += minutes + ' ' + this.MINUTES_LABEL;
    } else { // format: mm min
      result += minutes + ' ' + this.MINUTES_LABEL;
    }

    return result;
  }

}
