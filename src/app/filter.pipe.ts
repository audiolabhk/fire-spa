import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(item: any, term: any): any {
    if (!term) return item;
    return item.filter(item => item.activity.includes(term));
  }
}
