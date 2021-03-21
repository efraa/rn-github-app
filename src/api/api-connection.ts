import axios from 'axios'
import { API_URL as baseURL, API_ACCESS_TOKEN } from '@env'

/**
 * Request Options
 * @description Default headers required by the API to avoid
 * request limit blocks and use the latest version.
 *
 * @link https://docs.github.com/en/rest/overview/resources-in-the-rest-api
 * @author Efraa
 */
const requestOptions = (config: any) => ({
  ...config,
  headers: {
    ...config?.headers,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${API_ACCESS_TOKEN}`,
  },
})

const API = axios.create({ baseURL })

// Request interceptor for API calls
API.interceptors.request.use(requestOptions)

export { API }
