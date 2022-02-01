## API Schema And Endpoint

Annoucements will be requested from a [RESTful API](https://www.codecademy.com/articles/what-is-rest) that retrieves data from a database.

You'll be retrieving data via HTTP GET requests to this endpoint. The endpoint for the API is `https://cruzhacks23-organizer-endpoint.herokuapp.com/api/schedule`.

**Sample Response**:

```json
{
    "statusCode": 200,
    "message": "OK",
    "count": 3,
    "results": [
      {
        date: "Friday, January 13, 2023",
        events: [
          { name: "Swag Distribution Starts", time: "3:00 PM", clickable: false },
          { name: "Event Begins", time: "5:00 PM", clickable: false },
          { name: "Swag Distribution Ends", time: "", clickable: false },
          { name: "Opening Ceremony", time: "7:00 PM", clickable: false },
          { name: "Hacking Begins", time: "9:00 PM", clickable: false },
          { name: "Resume/Cover Letter", time: "10:00 PM", clickable: true },
          { name: "MLH Event: Bob Ross Painting", time: "", clickable: true },
          { name: "Equity In Tech", time: "10:45 PM", clickable: true },
        ],
      },
      {
        date: "Saturday, January 14, 2023",
        events: [
          {
            name: "Adding a Backend and Database to Your App in 3 Lines",
            time: "9:00 AM",
            clickable: false
          },
          { name: "Intro to Algorithm / Applications", time: "10:00 AM", clickable: true },
          { name: "Tech Interviews", time: "", clickable: true },
          { name: "Intro to Github", time: "11:00 AM", clickable: true },
          { name: "Swag Distribution Starts", time: "", clickable: false },
          { name: "What Could Go Wrong", time: "", clickable: true },
          { name: "Basics of HTML", time: "12:00 PM", clickable: true },
          { name: "Intro to UI Design", time: "1:00 PM", clickable: true },
          { name: "Android Development", time: "2:00 PM", clickable: true },
          { name: "Swag Distribution Ends", time: "", clickable: false },
          { name: "Intro to Python", time: "3:00 PM", clickable: true },
          { name: "Intro to React", time: "4:00 PM", clickable: true },
          { name: "Environmental Innovation Guided Discussion", time: "", clickable: true },
          { name: "MLH Event: Security Challenge", time: "5:30 PM", clickable: true },
        ],
      },
      {
        date: "Sunday, January 15, 2023",
        events: [
          { name: "Project Submissions", time: "10:00 AM", clickable: false },
          { name: "Judging Begins", time: "11:30 AM", clickable: false },
          { name: "Closing Ceremony", time: "2:00 PM", clickable: false },
          { name: "End of Event", time: "4:00 PM", clickable: false },
        ],
      },
    ]
}
```
Where date refers to the date of event, events refer to all events in that day at a given time and clickable denotes a workshop that one can register for.