# Candy API

An API that has a sweet tooth. Deployed at https://candyapi.herokuapp.com/.

This API uses data from [FiveThirtyEight](https://fivethirtyeight.com/videos/the-ultimate-halloween-candy-power-ranking/), licensed under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

## Endpoints

### `/`

Return all the candy from the database.

### `/id/[id]`

Return one candy item by its ID.

### `/name/[name]`

Return candy items where the name contains the query parameter.

### `/[category]`

Return candy of a specific category. You can replace `[category]` with one of the following:

- chocolate
- fruity
- caramel
- peanutyalmondy
- nougat
- crispedricewafer
- hard
- bar
- pluribus
