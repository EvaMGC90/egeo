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
import { Component } from '@angular/core';
import { StSidebarItem, StSidebarVisualMode } from '@stratio/egeo';

@Component({
   selector: 'st-sidebar-demo',
   templateUrl: './st-sidebar-demo.component.html',
   styleUrls: ['./st-sidebar-demo.component.scss']
})

export class StSidebarDemoComponent {
   public items: StSidebarItem[] = [
      { id: 'vault-roles', label: 'Vault Roles' },
      { id: 'identities', label: 'Identities', class: 'warning', disabled: true },
      {
         id: 'masters',
         label: 'Masters',
         result: '-',
         items: [{
            id: 'sub-item1',
            label: 'Subitem 1',
            items: [
               { id: 'sub-item1.1', label: 'Subitem 1.1', result: '450' },
               { id: 'sub-item1.2', label: 'Subitem 1.2' }]
         }, { id: 'sub-item2', label: 'Subitem 2' }]
      },
      {
         id: 'agents', label: 'So long section name', result: '25',
         items: [
            { id: 'agents.1', label: 'Subitem 1.1', result: '25' },
            { id: 'agents.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'agents2', label: 'So long section name 2 without results',
         items: [
            { id: 'agents2.1.1', label: 'Subitem 1.1.1', result: '25' },
            { id: 'agents2.1.2', label: 'Subitem 1.1.2' }]
      },
      { id: 'without-children', label: 'No children' },
      {
         id: 'sectionA', label: 'Section A',
         items: [
            { id: 'sub-sectionA.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionA.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionB', label: 'Section B', items: [
         { id: 'sub-sectionB.1', label: 'Subitem 1.1',    disabled: true },
         { id: 'sub-sectionB.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionC', label: 'Section C',
         items: [
            { id: 'sub-sectionC.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionC.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionD', label: 'Section D',
         items: [
            { id: 'sub-sectionD.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionD.2', label: 'Subitem 1.2' }]
      },
   ];

   public activeItem: StSidebarItem;
   public enableSearchMode: boolean = false;
   public complexMode: StSidebarVisualMode = StSidebarVisualMode.complex;

   onChangeActive(item: StSidebarItem) {
      this.activeItem = item;
   }

   constructor() {
      this.activeItem = this.items[2].items[0].items[1]
   }
}
