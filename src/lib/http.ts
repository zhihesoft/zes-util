// import got, { SearchParameters } from "got";
import axios from "axios";
import { getLogger } from "log4js";

export class Http {
    constructor(
        private baseUrl: string
    ) { }

    private token = "";

    setToken(token: string) {
        this.token = token;
    }

    post<T>(path: string, args: unknown): Promise<T> {
        return axios.post(
            path,
            args,
            {
                baseURL: this.baseUrl,
                headers: {
                    Authorization: `Bear ${this.token}`
                }
            })
            .then(resp => {
                return <T>resp.data;
            })
            .catch((err) => {
                logger.error(`post ${path} failed: ${err}`);
                return Promise.reject(err);
            });
    }

    get<T>(path: string, args: unknown): Promise<T> {
        return axios.get(path, {
            baseURL: this.baseUrl,
            params: args,
            headers: {
                Authorization: `Bear ${this.token}`
            }
        })
            .then(resp => {
                return <T>resp.data
            })
            .catch((err) => {
                logger.error(`post ${path} failed: ${err}`);
                return Promise.reject(err);
            });
    }
}

const logger = getLogger(Http.name);
