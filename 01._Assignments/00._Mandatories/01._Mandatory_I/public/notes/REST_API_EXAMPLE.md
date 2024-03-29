| HTTP Methods | Endpoints        | Description                            | Conventions                                      |
|--------------|------------------|----------------------------------------|--------------------------------------------------|
| GET          | `/aimodels`     | get all ai-models                      | 1. Use the appropriate HTTP method for the action |
| GET          | `/aimodels/<id>`| get an ai-model by `<id>`               | 2. The ordering of the HTTP methods               |
| POST         | `/aimodels`     | create an new ai-model resource         | 3. Naming the endpoints so that they map to the   |
| PUT          | `/aimodels/<id>`| update the entire ai-model resource    |    collection in your system                     |
| PATCH        | `/aimodels/<id>`| update parts of the ai-model resource  |                                                  |
| DELETE       | `/aimodels/<id>`| delete an ai-model resource by id       |                                                  |

| Ordering     |
|--------------|
| GET          |
| POST         |
| PUT          |
| PATCH        |
| DELETE       |
