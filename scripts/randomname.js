(function() {
  var names = [
    'Charlie',
    'Alex',
    'Taylor',
    'Ashley',
    'Nick',
    'Hayden',
    'Riley',
    'Elliot',
    'Hunter',
    'Tony',
  ];
  var randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("name").innerHTML = randomName;
  document.getElementById("user-name").innerHTML = randomName;
})();

(function() {
  var age = [
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
  ];
  var randomAge = age[Math.floor(Math.random() * age.length)];
  document.getElementById("age").innerHTML = randomAge;
})();

(function() {
  var job = [
    'Web Designer',
    'Advertising',
    'Copywriter',
    'Art Institute, Seattle',
    'Eastern Washington University',
    'Artist',
    'Online Personality',
  ];
  var randomJob = job[Math.floor(Math.random() * job.length)];
  document.getElementById("job").innerHTML = randomJob;
})();

(function() {
  var image = [
    'images/users/1.png',
    'images/users/2.png',
    'images/users/3.png',
    'images/users/4.png',
    'images/users/5.png',
    'images/users/6.png',
  ];
  var randomPic = image[Math.floor(Math.random() * image.length)];
  document.getElementById("profpic").innerHTML = '<img alt="profile picture" src="' +randomPic +'">';
})();