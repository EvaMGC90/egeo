/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StColorPickerComponent } from './st-color-picker.component';

describe('StColorPickerComponent', () => {
   let fixture: ComponentFixture<StColorPickerComponent>;
   let component: StColorPickerComponent;
   let nativeElement: HTMLElement;

   const _convertColor = (color: string): string => {
      if (color.substring(0, 1) === '#') {
         color = color.substring(1);
      }
      const rgbColor = {
         r: parseInt(color.substring(0, 2), 16),
         g: parseInt(color.substring(2, 4), 16),
         b: parseInt(color.substring(4), 16)
      };
      return `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
   };

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StColorPickerComponent],
         providers: [],
         schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StColorPickerComponent);
      component = fixture.componentInstance;
      nativeElement = fixture.nativeElement;
      component.palette = ['#128bdd', '#999999', '#fa9330', '#fdbd2b', '#2cce93', '#cd89d2', '#0f1b27', '#8898a7'];
      fixture.detectChanges();
   });

   describe('When it is initialized', () => {
      it('a ball is displayed for each palette`s color', () => {
         const colorBalls: HTMLSpanElement[] = fixture.nativeElement.querySelectorAll('.color-ball');

         expect(colorBalls.length).toEqual(component.palette.length);

         for (let i = 0; i < colorBalls.length; ++i) {
            expect(colorBalls[i].style['background-color']).toEqual(_convertColor(component.palette[i]));
         }
      });
   });

   it('When user selects a color, an event is emitted with the selected color', () => {
      spyOn(component.change, 'emit');

      const colorBalls = fixture.nativeElement.querySelectorAll('.color-ball');

      colorBalls[2].click();

      expect(component.change.emit).toHaveBeenCalledWith(component.palette[2]);
   });

});
