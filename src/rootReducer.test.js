import rootReducer from './rootReducer';

describe("root reducer functionality", () => {
    it('Rerturns an appropriate object depdening on action type', () => {
        const addAction = {type: "ADD", payload: {text: "test", id: "first"}};
        expect(rootReducer(addAction)).toBe({todo: [{text: "test", id: "first"}]});
    });
});