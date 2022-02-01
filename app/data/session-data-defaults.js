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
const EvidenceNote = require('./evidence-note');

module.exports = 
{
	header:
	{
		"organisation": "ABB Ltd",
		"signin-name": "Emily Munro",
		"site-name": "AATF",
		"activity": "AATF return"
	},
	header2:
	{
		"organisation": "PCS 1",
		"signin-name": "Emily Munro",
		"site-name": "PCS",
		"activity": "Manage evidence notes"
	},
}