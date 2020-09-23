import { Component, ViewChildren, ElementRef ,OnInit,OnDestroy} from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { CommonService } from './common.service';
import {Subject} from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
 
  dtTrigger: Subject<any> = new Subject();
  users$: any[] = [];
  constructor(private http:HttpClient ,private comm:CommonService){

  }
  title = 'jqueryexample';
  ngOnInit()
  {

    $('#table_id1').DataTable();

    this.comm.getdata().subscribe(data => {
      this.users$ = data;
      this.dtTrigger.next();
    });

    $(
      function() {
          $("#startDate").datepicker( {dateFormat : "yy-mm-dd"});
          $("#endDate").datepicker( {dateFormat : "yy-mm-dd"});
      }
  );   
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
  }
  getNoDays() 
  {

  }
  ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();
  }
}
