import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterChecked',
})
export class FilterChecked implements PipeTransform {
    transform(value: any, input: boolean) {
        if (input) {
            return value.filter(function (el: any) {
                return el.completed !== input;
            })
        }
        return value;
    }
}
