// document.addEventListener("DOMContentLoaded", function() {
//     const discoverBtn = document.getElementById('discoverBtn');

//     discoverBtn.addEventListener('click', function() {
//         const content = document.getElementById('cv');
//         content.scrollIntoView({ behavior: 'smooth' });
//     });
// });

const chartData = {
    labels: ["Nagaland","Meghalaya","Sikkim","Arunachal Pradesh","Uttarakhand"],
    data: [100,77,72,71,62],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new mychart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Language Popularity",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = ${l}: <span class='percentage'>${chartData.data[i]}%</span>;
      ul.appendChild(li);
    });
  };
  
  populateUl();


document.addEventListener("DOMContentLoaded", function() {
    const discoverBtn = document.getElementById('discoverBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const content = document.getElementById('content');

    discoverBtn.addEventListener('click', function() {
        content.scrollIntoView({ behavior: 'smooth' });
    });

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

var tl = gsap.timeline()


tl.from(".logo h2, .navlinks ul, .ham",{
    y:-100,
    duration:2,
    delay:0.2,
    opacity:0,
    stagger:0.5
})

tl.from(".image img",{
    x:-100,
    duration:0.4,
    opacity:0,
    blur:1,
    scale:0.8
})

tl.from(".content h2, .content h3",{
    y:50,
    duration:0.6,
    opacity:0,
    stagger:0.5
})

tl.from(".bottom-content",{
    x:100,
    duration:0.5,
    opacity:0,
    stagger:0.5
})

tl.from(".specification span",{
    y:100,
    duration:0.3,
    opacity:0,
    stagger:0.3
})
