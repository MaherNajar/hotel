import { RoomService } from './room.service';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Room } from './room';
import * as _ from 'lodash';
import paginate from '../../utils/paginate';

@Component({
  selector: 'app-chambres-suites',
  templateUrl: './chambres-suites.component.html',
  styleUrls: ['./chambres-suites.component.css'],
})
export class ChambresSuitesComponent {
  showSlider = of(false);
  dateRangeValue: Date[];
  arrival: Date;
  departure: Date;

  constructor(private roomService: RoomService) {
    roomService.getAvailableRooms(new Date()).subscribe((rooms) => {
      this.getRooms(rooms);
      this.changePage(0);
    });
  }

  rooms: Room[];

  form: any = {};

  filteredRooms: Room[];
  sortCriteria: string;

  pageItems: Room[];
  currentPage: number = 0;
  pageSize: number = 5;

  // Pagination component input property [totalPages]
  get totalPages() {
    const pageCount = Math.ceil(this.filteredRooms.length / this.pageSize);
    return _.range(pageCount);
  }
  // Pagination component event property (onChange)
  changePage(page: number) {
    this.currentPage = page;
    this.pageItems = paginate(
      this.filteredRooms,
      this.pageSize,
      this.currentPage
    );
  }

  // Page size 5 | 10
  changePageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.changePage(0);
  }

  // Page size font
  getFontWeight(value: HTMLElement) {
    if (parseInt(value.innerHTML) === this.pageSize) return 'bolder';
    return 'normal';
  }

  sortBy(sortCriteria: string) {
    this.sortCriteria = sortCriteria;
    switch (sortCriteria) {
      case 'moreExpensive':
        this.filteredRooms.sort((a, b) => a.price - b.price);
        this.changePage(0);
        break;
      case 'lessExpensive':
        this.filteredRooms.sort((a, b) => b.price - a.price);
        this.changePage(0);
        break;
      default:
        break;
    }
  }

  newDateRangeEmited(dateRange: Date[]) {
    this.dateRangeValue = dateRange;

    this.arrival = this.dateRangeValue[0];
    this.departure = this.dateRangeValue[1];

    this.roomService
      .getAvailableRooms(this.arrival)
      .subscribe((availableRooms) => {
        this.getRooms(availableRooms);
        this.applyFilters();
      });
  }

  private getRooms(rooms: Room[]) {
    this.filteredRooms = this.rooms = rooms;
  }

  applyFilters() {
    const form = this.form;

    // Récupère du formulaire uniquement les champs qui sont cochés
    const filters = Object.keys(form)
      .filter((key) => form[key] === true)
      .reduce((obj, key) => {
        obj[key] = form[key];
        return obj;
      }, {});

    this.filteredRooms = this.rooms.slice().filter((room) => {
      let meetsCapacity: boolean;
      let meetsType: boolean;
      let meetsBreakfast: boolean;
      let meetsDinner: boolean;
      let meetsTransportCard: boolean;

      Object.keys(filters).forEach((key) => {
        switch (key) {
          case 'oneCB':
            meetsCapacity =
              room.capacity === 1 ? true : meetsCapacity ? true : false;
            break;
          case 'twoCB':
            meetsCapacity =
              room.capacity === 2 ? true : meetsCapacity ? true : false;
            break;
          case 'threeCB':
            meetsCapacity =
              room.capacity === 3 ? true : meetsCapacity ? true : false;
            break;
          case 'fourCB':
            meetsCapacity =
              room.capacity === 4 ? true : meetsCapacity ? true : false;
            break;
          case 'moreCB':
            meetsCapacity =
              room.capacity > 4 ? true : meetsCapacity ? true : false;
            break;
          case 'chambreCB':
            meetsType =
              room.type === 'Chambre' ? true : meetsType ? true : false;
            break;
          case 'suiteCB':
            meetsType = room.type === 'Suite' ? true : meetsType ? true : false;
            break;
          case 'petitDejeunerCB':
            meetsBreakfast = room.breakFast ? true : false;
            break;
          case 'dinerInclusCB':
            meetsDinner = room.dinner ? true : false;
            break;
          case 'carteTransportCB':
            meetsTransportCard = room.transportCard ? true : false;
            break;
          default:
            break;
        }
      });
      if (
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard === undefined) ||
        (meetsType === undefined &&
          meetsCapacity === undefined &&
          meetsBreakfast &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast &&
          meetsDinner &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard === undefined) ||
        (meetsType &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast &&
          meetsDinner === undefined &&
          meetsTransportCard) ||
        (meetsType &&
          meetsCapacity === undefined &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard) ||
        (meetsType === undefined &&
          meetsCapacity &&
          meetsBreakfast === undefined &&
          meetsDinner &&
          meetsTransportCard)
      )
        return room;
    });
    this.sortBy(this.sortCriteria);
    this.changePage(0);
  }
}
