
import {register, registerRequest, registerSuccess} from '../components/actions/register';
import {API_URI} from '../config';


describe('register', () => {
  it('Should register user', () => {
      global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
              ok: true,
              json() {
                  return {res: 'registered'};
              }
          })
      );

      const values = {
        username: 'TestUser',
        password: 'testpass',
        email: 'test@testemail',
        age: 100,
        height: 100,
        weight: 100
      };

      const dispatch = jest.fn();
      return register(values)(dispatch).then(() => {
          expect(fetch).toHaveBeenCalledWith(`${API_URI}/users`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
          expect(dispatch).toHaveBeenCalledWith(registerRequest());
          expect(dispatch).toHaveBeenCalledWith(registerSuccess());
        });
  });
});