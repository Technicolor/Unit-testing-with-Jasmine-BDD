// Test Suite
describe('CSS tests', function() {
	
	var header = document.getElementById('my-header');
	
	beforeEach(function() {
		// Reset the className before each spec is run
		header.className = 'myclassa myclassb';
	});
	
	// Spec
	it('should return an Array of class names', function() {
		expect(css.classes(header)).toEqual(['myclassa', 'myclassb']);
		expect(css.classes(header).length).toBe(2);
	});
	
	// Spec
	it('should add class to element', function() {
		css.add(header, 'newclass');
		expect(header.className).toBe('myclassa myclassb newclass');
	});
	
	// Spec
	it('should return a boolean for whether the class is on the given element', function() {
		expect(css.has(header, 'myclassa')).toBeTruthy();
		expect(css.has(header, 'newclass')).toBeFalsy(); // although in the previous spec we added 'newclass' to the element, in this spec this assertion should return false because the beforeEach method above has reset the class list back to 'myclassa myclassb'
	});
	
	// Spec
	it('should remove class from element', function() {
		css.remove(header, 'myclassb');
		expect(header.className).toBe('myclassa');
	});
	
});