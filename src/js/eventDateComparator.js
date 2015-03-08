function eventDateComparator(a, b) {
    // Sort by start date, ascending.
    if (a.start < b.start) {
        return -1;
    }

    if (a.start > b.start) {
        return 1;
    }

    // Sort by duration, descending.
    if (a.end > b.end) {
        return -1;
    }

    if (a.end < b.end) {
        return 1;
    }

    // Better reschedule.
    return 0;
}

module.exports = eventDateComparator;
