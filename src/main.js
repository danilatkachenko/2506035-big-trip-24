import FiltersPresenter from './presenter/filter-presenter.js';
import SortListPresenter from './presenter/sort-list-presenter.js';
import TripEventsPresenter from './presenter/trip-event-presenter.js';

const filterContainerElement = document.querySelector('.trip-controls__filters');
const filterPresenter = new FiltersPresenter(filterContainerElement);
filterPresenter.init();

const tripEventsContainerEl = document.querySelector('.trip-events');

const sortListPresenter = new SortListPresenter(tripEventsContainerEl);
sortListPresenter.init();

const tripEventsPresenter = new TripEventsPresenter(tripEventsContainerEl);
tripEventsPresenter.init();
