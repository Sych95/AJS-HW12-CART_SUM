import Buyable from "./Buyable";

export default class Movie implements Buyable {
    readonly id:number;
    readonly name:string;
    readonly price:number;
    readonly movieNameEng : string;
    readonly imgURL : string;
    readonly isIMAX : boolean;
    readonly date : number;
    readonly country : string;
    readonly tagline : string;
    readonly category : Array<string>;
    readonly duration : string;

    constructor(id:number, name:string, price:number, movieNameEng : string, imgURL : string, isIMAX : boolean, date : number, country : string, tagline : string, category : Array<string>, duration : string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.movieNameEng = movieNameEng;
        this.imgURL = imgURL;
        this.isIMAX = isIMAX;
        this.date = date;
        this.country = country;
        this.tagline = tagline;
        this.category = category;
        this.duration = duration;
    } 
}

