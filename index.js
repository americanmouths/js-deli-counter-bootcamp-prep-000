var katzDeli = [];
function takeANumber (katzDeli, name) {
katzDeli.push(`${name}`);
return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  let i = 0;
  while (katzDeli.length > i) {
    i++;
} if (katzDeli.length === 0) {
  return (`There is nobody waiting to be served!`);
} else
  return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine(katzDeli) {
  let i = 0;
  if (i > katzDeli.length) {
  return (`The line is currently: ${katzDeli}`;
  } else {
    return ('The line is currently empty');
  }
}
