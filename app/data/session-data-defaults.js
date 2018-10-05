/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/
const Facility = require('./model')
const Scheme = require('./model')

module.exports = {
  "facilities" : [
    new Facility("facility 1", 1),
    new Facility("facility 4", 3),
  ] 
}
