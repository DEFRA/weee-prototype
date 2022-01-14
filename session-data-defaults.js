/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"organisation": "ABB Ltd",
"full-name": "Emily Munro",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = 
{
	header:
	{
		"organisation": "ABB Ltd",
		"signin-name": "Emily Munro"
	}
}
