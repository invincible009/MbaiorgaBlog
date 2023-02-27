export class BlogPost {
   public status: string[];
    public id: string;
    public content: string;
    public title: string;
    public author: string;
    public createdDate: string;

    //assign vals from json to properties
    // constructor(values: Object = {}) { 
    //     Object.assign(this, values);
    // }

    public constructor(status?:string[],id?:string, content?:string,title?:string, author?:string, createdDate?:string ){
        this.status = status || [];
        this.id = id || '';
        this.content = content || '';
        this.title = title || '';
        this.author = author || '';
        this.createdDate = createdDate || '';

    }
}
