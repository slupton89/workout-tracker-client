
import {login, fetchAuthRequest, fetchAuthSuccess, refreshAuthToken, setAuth} from '../components/actions/auth';
import {API_URI} from '../config';
import jwtDecode from 'jwt-decode';

describe('auth', () => {

    describe('login', () => {
        it('Should dispatch loginSuccess', () => {
            const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVXNlciBUZXN0IiwiZnVsbE5hbWUiOiJUZXN0IFVzZXIiLCJlbWFpbCI6ImZzamRrZmxqc2RAbGdramRzbCIsImhlaWdodCI6IjkwIiwid2VpZ2h0IjoxNTAsImFnZSI6MzAsImlkIjoiNWJjZGZkNGJhMDBkZDUwNmI5MTQwYTMwIn0sImlhdCI6MTU0MDQ5NDQ5MSwiZXhwIjoxNTQxMDk5MjkxLCJzdWIiOiJVc2VyIFRlc3QifQ.EjL3LCrkL50XpL5NoAsPB6AlG2zG2zt6nG8bYEI8aRQ';

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return {authToken};
                    }
                })
            );

            const values = {
              username: 'TestUser',
              password: 'testpass'
            };
            const decodedToken = jwtDecode(authToken);
            const dispatch = jest.fn();

            return login(values)(dispatch).then(() => {
                expect(fetch).toHaveBeenCalledWith(`${API_URI}/auth/login`, {
                  method: 'POST',
                  body: JSON.stringify(values),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                expect(dispatch).toHaveBeenCalledWith(fetchAuthRequest());
                expect(dispatch).toHaveBeenCalledWith(fetchAuthSuccess(decodedToken.user));
                expect(dispatch).toHaveBeenCalledWith(setAuth(authToken));
              });
        });
    });

    describe('refreshAuthToken', () => {
        it('Should dispatch fetchAuthSuccess', () => {
            const getState = jest.fn(() => {
                return {
                    authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVXNlciBUZXN0IiwiZnVsbE5hbWUiOiJUZXN0IFVzZXIiLCJlbWFpbCI6ImZzamRrZmxqc2RAbGdramRzbCIsImhlaWdodCI6IjkwIiwid2VpZ2h0IjoxNTAsImFnZSI6MzAsImlkIjoiNWJjZGZkNGJhMDBkZDUwNmI5MTQwYTMwIn0sImlhdCI6MTU0MDQ5NDQ5MSwiZXhwIjoxNTQxMDk5MjkxLCJzdWIiOiJVc2VyIFRlc3QifQ.EjL3LCrkL50XpL5NoAsPB6AlG2zG2zt6nG8bYEI8aRQ'
                }
            });
            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return {res: 'ok'};
                    }
                })
            );

            const decodedToken = jwtDecode(getState.authToken);
            const dispatch = jest.fn();

            return refreshAuthToken(authToken)(dispatch).then(() => {
                expect(fetch).toHaveBeenCalledWith(`${API_URI}/auth/refresh`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                expect(dispatch).toHaveBeenCalledWith(fetchAuthRequest());
                expect(dispatch).toHaveBeenCalledWith(fetchAuthSuccess(decodedToken.user));
                expect(dispatch).toHaveBeenCalledWith(setAuth(authToken));
              });
        });
    });
});