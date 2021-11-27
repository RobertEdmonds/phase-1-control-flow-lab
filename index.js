function scuberGreetingForFeet(distance){
  let response
  if (distance <= 400){
    response = "This one is on me!"
  return response;}
  else if (distance <= 2499 && distance >= 2000){
    response = "I will gladly take your thirty bucks."
  return response;}
  else if (distance >= 2500){
    response = 'No can do.'
  return response;}
}

function ternaryCheckCity(city){
  return city === "NYC"?"Ok, sounds good.":"No go."
  // This is for if customer types NYC they will get a Ok, sounds good. Everything else they get a No go.
}

function switchOnCharmFromTip(amount){
  switch(amount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
  // Write your code here!
}