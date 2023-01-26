import logger from "../../logguer/logguer";
import "../../server.js";

export class BaseDao {

    constructor() {
        this.logger = logger;
        if (this.constructor === BaseDao) {
            throw new Error('Class "BaseDao" cannot be instantiated')
        }
    }
    create() {
        throw new Error('Method create() must be implemented')
    }

    getAll() {
        throw new Error('Method getAll() must be implemented')
    }

    deleteById() {
        throw new Error('Method deleteById() must be implemented')
    }
}