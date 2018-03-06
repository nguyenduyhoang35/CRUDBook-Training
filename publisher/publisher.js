class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *
     * @return {string|*} namePublisher
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     * @return {int||null}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @return {string|*}
     */
    getAddress() {
        return this.address;
    }

    /**
     *
     * @param {string} phoneNumber
     */
    setPhone(phoneNumber) {
        this.phone = phoneNumber;
    }

    /**
     *
     * @return {string|*}
     */
    getPhone() {
        return this.phone;
    }
}

module.exports = Publisher;
