import { IConfig, RequestAPI } from '../lib';
import { RequestSample } from './api';

describe('create control', () => {
  const config: IConfig = { request: { baseURL: '' } };

  test('create request', () => {
    const api = new RequestSample();
    const request = new RequestAPI(api, config);

    expect(request).not.toBeNull();
  });
});
