

items = new Meteor.Collection('items', { transform: function(doc){
	doc.displayedAt = new Date();
	doc.style = "display:none";
	return doc;
}});



getItems = function(){
	return items.find({}, {sort: {creationDate: 1}});
}