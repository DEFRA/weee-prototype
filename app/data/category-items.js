const Category = require('./category');

class CategoryItems{

    constructor(){
        this._categoryItems = [];
        this._categoryItems.push(new Category(1, 'Large household appliances'));
        this._categoryItems.push(new Category(2, 'Small household appliances'));
        this._categoryItems.push(new Category(3, 'IT and telecommunications equipment'));
        this._categoryItems.push(new Category(4, 'Consumer equipment'));
        this._categoryItems.push(new Category(5, 'Lighting equipment'));
        this._categoryItems.push(new Category(6, 'Electrical and electronic tools'));
        this._categoryItems.push(new Category(7, 'Toys, leisure and sports equipment'));
        this._categoryItems.push(new Category(8, 'Medical devices'));
        this._categoryItems.push(new Category(9, 'Monitoring and control instruments'));
        this._categoryItems.push(new Category(10, 'Automatic dispensers'));
        this._categoryItems.push(new Category(11, 'Display equipment'));
        this._categoryItems.push(new Category(12, 'Cooling appliances containing refrigerants'));
        this._categoryItems.push(new Category(13, 'Gas discharge lamps and LED light sources'));
        this._categoryItems.push(new Category(14, 'Photovoltaic panels'));
    }    
}

module.exports = CategoryItems;
