import * as ics from 'ics';

const event = {
  start: [2021, 1, 30],
  duration: { hours: 1, minutes: 0 },
  title: 'タイトル',
  description: '説明',
  location: '場所',
  url: 'https://www.cloud-ace.jp/',
  geo: { lat: 40.0095, lon: 105.2669 },
  categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
  status: 'CONFIRMED',
  busyStatus: 'BUSY',
  organizer: { name: 'Admin', email: 'Race@BolderBOULDER.com' },
  attendees: [
    { name: 'Adam Gibbons', email: 'adam@example.com', rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' },
    { name: 'Brittany Seaton', email: 'brittany@example2.org', dir: 'https://linkedin.com/in/brittanyseaton', role: 'OPT-PARTICIPANT' }
  ]
}

function createEvent() {
  return ics.createEvent(event, (error, value) => {
    if (error) {
      console.error(error);
      return;
    }
    return value;
  });
}

function downloadICS() {
  const event = createEvent();
  if (event) {
  } else {
    return;
  }
  const blob = new Blob([event], {"type": "text/plain"});

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, "schedule.ics");
  } else {
    document.getElementById("download").href = window.URL.createObjectURL(blob);
  }
}
