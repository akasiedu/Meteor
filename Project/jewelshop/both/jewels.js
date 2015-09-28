Jewels = new Mongo.Collection('jewels');

Jewels.attachSchema(new SimpleSchema({
	title:{
		type: String,
		label: "Jeweller",
		max: 200
	},
	decription:{
		type:String,
		label: "Brief description of Jewel Type",
		optional:true,
		max: 500,
		autoform: {
			rows:5
		}
	},
	contact:{
		type:String,
		label: "Enter Phone Number"
	},
	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		}
	}

}))