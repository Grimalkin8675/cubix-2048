import Direction from '../../app/models/Direction';

import Coord from '../../app/models/Coord';


describe(Direction.prototype.bottom, () => {
    it('should return current bottom coordinates depending on gravity', () => {
        const bottom = Direction.BOTTOM.bottom();

        expect(bottom).toEqual([
            new Coord(0, 0, 0),
            new Coord(0, 0, 1),
            new Coord(0, 0, 2),
            new Coord(1, 0, 0),
            new Coord(1, 0, 1),
            new Coord(1, 0, 2),
            new Coord(2, 0, 0),
            new Coord(2, 0, 1),
            new Coord(2, 0, 2),
        ]);
    });
});
