// Declare global constants and variables
const Pi = 3.14;
let r = document.getElementById("Radius");
let d = document.getElementById("Diameter");
let a = document.getElementById("Area");
let c = document.getElementById("Circumference");
let btn = document.getElementById('calculate');

// Function to calculate and update values
function calcCircumferencecandArea() {
    let radius = Number(r.value);
    let diameter = Number(d.value);
    let area = Number(a.value);
    let circumference = Number(c.value);
    
    // Check if the user has entered more than one value
    if ((radius && diameter) || 
        (radius && area && circumference) || 
        (diameter && area && circumference) || 
        (radius && diameter && area) || 
        (radius && diameter && circumference) || 
        (diameter && area && circumference)) {
        alert('Please enter only one value at a time.');
    }
    else if (radius) {  // If radius is provided, calculate diameter, area, and circumference
        d.value = (2 * radius).toFixed(2);
        a.value = (Pi * radius ** 2).toFixed(2);
        c.value = (2 * Pi * radius).toFixed(2);
    } 
    else if (diameter) {  // If diameter is provided, calculate radius, area, and circumference
        let radiusFromDiameter = diameter / 2;
        r.value = radiusFromDiameter.toFixed(2);
        a.value = (Pi * radiusFromDiameter ** 2).toFixed(2);
        c.value = (2 * Pi * radiusFromDiameter).toFixed(2);
    } 
    else if (area) {  // If area is provided, calculate radius, diameter, and circumference
        let radiusFromArea = Math.sqrt(area / Pi);
        r.value = radiusFromArea.toFixed(2);
        d.value = (2 * radiusFromArea).toFixed(2);
        c.value = (2 * Pi * radiusFromArea).toFixed(2);
    } 
    else if (circumference) {  // If circumference is provided, calculate radius, diameter, and area
        let radiusFromCircumference = circumference / (2 * Pi);
        r.value = radiusFromCircumference.toFixed(2);
        d.value = (2 * radiusFromCircumference).toFixed(2);
        a.value = (Pi * radiusFromCircumference ** 2).toFixed(2);
    } 
    else {
       alert("Please enter a value.");
    }
}

// Function to reset all input fields
function resetFields() {
    document.getElementById("Radius").value = '';
    document.getElementById("Diameter").value = '';
    document.getElementById("Area").value = '';
    document.getElementById("Circumference").value = '';
}

// Add event listener to the button
btn.addEventListener('click', calcCircumferencecandArea);
