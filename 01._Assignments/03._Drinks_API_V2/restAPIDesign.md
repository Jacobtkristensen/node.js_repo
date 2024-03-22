| HTTP Method | Endpoint         |Description                            | Conventions                                      |
|-------------|------------------|---------------------------------------|---------------------------------------------------
| GET         | /drinks          |get all drinks                         |1. Use the appropriate HTTP method for the action |
| GET         | /drinks/:id      |get a drink with `<id>`                |2. The ordering of the HTTP methods               |
| POST        | /drinks          |create a drink                         |3. Naming the endpoints so that they map to the   |
| PUT         | /drinks/:id      |update the entire drink resource       | collection in your system                        |
| PATCH       | /drinks/:id      |update parts of the drink resource     |
| DELETE      | /drinks/:id      |delete a drink by `<id>`               |

| Ordering     |
|--------------|
| GET          |
| POST         |
| PUT          |
| PATCH        |
| DELETE       |