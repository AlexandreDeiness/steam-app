export class Jeu {
    name;
    summary;
    genres;
    cover;
    screenshots;
    constructor(data)
    {
        Object.assign(this, data);
        this.cover = this.cover.url;
    }

}

