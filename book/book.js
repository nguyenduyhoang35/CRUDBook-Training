class Book {
    /**
     *
     * @param {string} title
     */
    constructor(title) {
        this.title = title;
    }

    /**
     *
     * @return {string|null}
     */
    getTitle() {
        return this.title;

    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {int|null}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {string} author
     */
    setAuthor(author) {
        this.author = author;
    }

    /**
     *
     * @return {string|""}
     */
    getAuthor() {
        return this.author;
    }

    /**
     *
     * @param {string} publisher
     */
    setPublisher(publisher) {
        this.publisher = publisher;
    }

    /**
     *
     * @return {string|""}
     */
    getPublisher() {
        return this.publisher;
    }

    /**
     *
     * @param {float}price
     */
    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    /**
     *
     * @return {{id: int, title: string}}
     */
    toJson() {
        return {
            id       :this.getId(),
            title    :this.getTitle(),
            author   :this.getAuthor(),
            publisher:this.getPublisher(),
            price    :this.getPrice()
        }
    }
}

module.exports= Book;
