import { render } from '../render';
import AddFormView from '../view/add-form-view';
import EditFormView from '../view/edit-form-view';
import EventView from '../view/event-view';
import FilterView from '../view/filter-view';
import SortListView from '../view/sort-list-view';
import TripEventListView from '../view/trip-event-list-view';
import TripEventsListItemView from '../view/trip-events-list-item-view';

export default class MainPresenter {
  TripEventListElement = new TripEventListView();

  constructor({ tripEventContainer, filterContainer }) {
    this.tripEventContainer = tripEventContainer;
    this.filterContainer = filterContainer;
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortListView(), this.tripEventContainer);
    render(new EditFormView(), this.tripEventContainer);
    render(new AddFormView(), this.tripEventContainer);
    render(new EventView(), this.tripEventContainer);
    render(new TripEventsListItemView(), this.tripEventContainer);
  }
}
