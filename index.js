var katzDeli = [];
function takeANumber (katzDeliLine, name) {
katzDeli.push(`${name}`);
return(`Welcome, ${name}. You are ${katzDeli.length} in line.`);
}
