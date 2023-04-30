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
  {id: 1, name: 'Jhonnys David', lastname: "De Avila Salgado", document: 1002188478, email: 'jdeavilasalgado@gmail.com', cell: 3236447442, course: "11" },
  {id: 2, name: 'Kalel', lastname: "Morningstar", document: 1001882094, email: 'kalel@gmail.com', cell: 3045363050, course: "8" },

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
