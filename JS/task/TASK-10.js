'use strict';

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
      const {age} = plan;
      const {languages} = plan.skills;
      let str = `Мне ${age} и я владею языками: `;
+
      languages.forEach(function(lang) {
          str += `${lang.toUpperCase()} `;
      });
      return str;
  }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
}

console.log(showExperience(personalPlanPeter))

function showProgrammingLangs(pl) {
    
  const {programmingLangs} = pl.skills;
  Object.entries(programmingLangs).forEach(entry => {
    const [key, value] = entry;
    console.log(`Мова ${key} вивчена на ${value}`);
  });
}
showProgrammingLangs(personalPlanPeter)
// console.log(showProgrammingLangs(personalPlanPeter))

