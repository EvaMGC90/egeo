import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Http } from '@angular/http';
import { By } from '@angular/platform-browser';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {
   times as _times,
   cloneDeep as _cloneDeep
} from 'lodash';

// Components
import { ListItemComponent } from '../list-item/list-item.component';
import { ListSelectionComponent } from './list-selection.component';

// Order modules
import { StSearchModule } from '../../st-search/st-search.module';
import { StDropdownModule } from '../../st-dropdown/st-dropdown.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';

// Mdel
import { StTwoListSelectionConfig, StTwoListSelectionElement } from '../st-two-list-selection.model';

let comp: ListSelectionComponent;
let fixture: ComponentFixture<ListSelectionComponent>;
let de: DebugElement;

let listTitle: 'All';
let listSearchPlaceholder: 'Search all';
let qaTag: string = 'st-two-list-test';

function generateData(numData: number): StTwoListSelectionElement[] {
   return _times(10, (i) => {
      return {
         id: i,
         name: i > 5 ? `${i}Element` : `Element${i}`
      };
   });
}

let list: StTwoListSelectionElement[] = generateData(10);

describe('StTwoListSelectionComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule, VirtualScrollModule, StDropdownModule, StCheckboxModule],
         declarations: [ListSelectionComponent, ListItemComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ListSelectionComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;

   });

   describe('ListSelectionComponent', () => {
      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.searchQaTag).toEqual(qaTag + '-search');
         expect(comp.listQaTag).toEqual(qaTag + '-list');
         expect(comp.hasOrder).toBeFalsy();
         expect(comp.heightMode).toEqual(35);

         comp.mode = 'compact';
         fixture.detectChanges();
         expect(comp.heightMode).toEqual(27);
      });
   });
});