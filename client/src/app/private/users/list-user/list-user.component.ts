import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  lastname: string
  document: number;
  email: string;
  cell: number;
  course: string

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', lastname: "de avila", document: 1.0079, email: 'H', cell: 123456, course: "12B" },

];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-list-user',
  styleUrls: ['./list-user.component.scss'],
  templateUrl: './list-user.component.html',
})
export class ListUserComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'document', 'email', 'cell', 'course'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
