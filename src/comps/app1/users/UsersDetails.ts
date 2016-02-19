import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChange} from 'angular2/core'
import {List} from 'immutable';
import {BusinessModel} from "../../../business/BusinesModel";
import {OrderBy} from "../../../pipes/OrderBy";
import {SIMPLEGRID_DIRECTIVES} from "../../simplegrid/SimpleGrid";

@Component({
    selector: 'UsersDetails',
    directives: [SIMPLEGRID_DIRECTIVES],
    pipes: [OrderBy],
    styles: [`
            .simpleGridRecord:nth-child(odd) {
                 background-color: #eee;
            }
            .simpleGridRecord:nth-child(even) {
                background-color: #fff;
            }
    `],
    template: `
        <simpleGridTable>
            <thead>
            <tr>
              <th sortableHeader="name" [sort]="sort">name</th>
              <th>login</th>
              <th sortableHeader="businessId" [sort]="sort">business</th>
              <th sortableHeader="fromTemplateId" [sort]="sort">tmp</th>
            </tr>
          </thead>
          <tbody>                                                                          
          <tr class="simpleGridRecord" simpleGridRecord *ngFor="#item of _businesses | OrderBy:sort.field:sort.desc; #index=index" 
            [item]="item" [index]="index">
                <td simpleGridData [type]="'name'" [item]="item"></td>
                <td simpleGridData [type]="'lastLogin'" [item]="item"></td>
                <td simpleGridData [type]="'businessId'" [item]="item"></td>
                <td simpleGridDataImage [type]="'fromTemplateId'" [item]="item"></td>
          </tr>
          </tbody>                 
        </simpleGridTable>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDetails {
    public sort:{field: string, desc: boolean} = {field: null, desc: false};
    private _businesses:List<BusinessModel>;

    @Input()
    set businesses(i_businesses) {
        this._businesses = i_businesses;
    }

    // @Output()
    // addToCart:EventEmitter<any> = new EventEmitter();

    constructor() {
    }
}


