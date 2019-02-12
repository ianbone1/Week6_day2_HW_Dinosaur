const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs = this.dinosaurs.filter(dino => dino !== dinosaur);
};

Park.prototype.bestDinosaur = function() {
  const bestDino = this.dinosaurs.reduce(function(prevDino, curDino) {
      return (prevDino.guestsAttractedPerDay > curDino.guestsAttractedPerDay) ? prevDino : curDino
  });
  return bestDino;
};

Park.prototype.findSpecies = function (theSpecies) {
  return this.dinosaurs.filter(dino => dino.species === theSpecies);
};

Park.prototype.removeSpecies = function (theSpecies) {
  this.dinosaurs = this.dinosaurs.filter(dino => dino.species !== theSpecies);
};

Park.prototype.dailyVisitors = function () {
  let total = 0;
  this.dinosaurs.forEach(dino => total += dino.guestsAttractedPerDay);
  return total;
};

Park.prototype.yearlyVisitors = function () {
  return (this.dailyVisitors() * 365);
};

Park.prototype.yearlyTicketSales = function () {
  return (this.yearlyVisitors() * park.ticketPrice);
};

Park.prototype.dietCounts = function () {
  let result = {};
  this.dinosaurs.forEach(dino =>
    result[dino.diet] ? result[dino.diet] += 1 : result[dino.diet] = 1
    );
  return result;
};

module.exports = Park;
