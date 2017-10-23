# Config

For this application the only configuration is the database connection. This data is stored in `config.json`. Storing data in JSON is tricky with Handlebars templating because:

* Each element needs a comma except the last element
* Duplicate keys or IDs at the same depth will cause errors


## Using `#each` with `#unless @last`

One way to write all the entries out correctly with the comma omitted from the last example requires you to use the trick found in `config-each_last_for_comma.json`. However, this will create duplicate keys.

## Using `#each` with `if @first` or `if @last`

Only write out one entry from the members array. It could be the first one or the last one. The important thing is to only write once.
