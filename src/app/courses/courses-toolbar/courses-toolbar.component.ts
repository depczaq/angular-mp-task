import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CoursesSearchEvent } from 'app/courses/courses-search-event.model';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.css']
})
export class CoursesToolbarComponent implements OnInit, OnDestroy {

  @Output() public searchExecute = new EventEmitter<CoursesSearchEvent>();

  private searchInputChange$: Subject<string>;
  private searchInputChangeSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.searchInputChange$ = new Subject();

    this.searchInputChangeSubscription = this.searchInputChange$
      .pipe(
        filter((text) => !text || text.length > 2),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((text) => this.emitSearchEvent(text));
  }

  ngOnDestroy(): void {
    this.searchInputChangeSubscription.unsubscribe();
  }

  public searchInputChanged(searchInputText: string): void {
    this.searchInputChange$.next(searchInputText);
  }

  private emitSearchEvent(searchText: string) {
    console.log('Search for: ' + searchText);
    this.searchExecute.emit({ searchText });
  }
}
