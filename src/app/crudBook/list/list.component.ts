import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {BookService} from '../../service/book.service';
import {MatDialog} from '@angular/material/dialog';
import {Book} from '../../module/Book';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'description', 'delete', 'edit'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  bookList: Book[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BookService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList() {
    this.bookService.showList().subscribe(list => {
      this.bookList = list;
      this.dataSource = new MatTableDataSource<Book>(this.bookList);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteStudent(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.getBookList();
    });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
