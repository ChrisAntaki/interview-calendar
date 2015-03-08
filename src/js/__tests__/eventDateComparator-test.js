jest.autoMockOff();

describe('eventDateComparator', function() {
  it('sorts events by start (ascending) and duration (descending)', function() {
    var comparator, events;

    comparator = require('../eventDateComparator');

    events = [{
        start: 540,
        end: 600
    }, {
        start: 560,
        end: 620
    }, {
        start: 30,
        end: 150
    }, {
        start: 540,
        end: 580
    }, {
        start: 610,
        end: 670
    }];

    events.sort(comparator);

    expect(events[2].start).toBe(540);
    expect(events[2].end).toBe(580);
  });
});
