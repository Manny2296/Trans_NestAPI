import { Usuarios } from './usuarios.entity';

describe('Usuarios', () => {
  it('should be defined', () => {
    expect(new Usuarios()).toBeDefined();
  });
});
