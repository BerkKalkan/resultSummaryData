const summaryData = [
    {
      name: 'reactionScore',
      label: 'Reaction',
      icon: 'reaction.svg',
      score: 80,
    },
    {
      name: 'memoryScore',
      label: 'Memory',
      icon: 'memory.svg',
      score: 92,
    },
    {
      name: 'verbalScore',
      label: 'Verbal',
      icon: 'Verbal.svg',
      score: 61,
    },
    {
      name: 'visualScore',
      label: 'Visual',
      icon: 'Visual.svg',
      score: 73,
    },
  ];

const listIcon = document.querySelectorAll(".item-icon")
const listTitle = document.querySelectorAll(".item-title")
const listPercent = document.querySelectorAll(".item-percent")

function render() {
  for (let i = 0; i < summaryData.length; i++) {
    
    listIcon[i].src = summaryData[i].icon;
    listTitle[i].innerHTML = summaryData[i].label;
    listPercent[i].innerHTML = `${summaryData[i].score}/100`;
  }
}

render();