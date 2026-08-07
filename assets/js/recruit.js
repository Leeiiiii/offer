document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('.filter-btn');
  var jobs = document.querySelectorAll('.job-card');
  var showMore = document.getElementById('showMore');
  var expanded = false;

  function filterJobs(category) {
    jobs.forEach(function (job, index) {
      var matches = category === 'all' || job.dataset.category === category;
      var withinInitialSet = expanded || category !== 'all' || index < 4;
      job.style.display = matches && withinInitialSet ? 'grid' : 'none';
    });
    showMore.style.display = category === 'all' ? 'block' : 'none';
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      filters.forEach(function (item) { item.classList.remove('active'); });
      button.classList.add('active');
      filterJobs(button.dataset.filter);
    });
  });

  showMore.addEventListener('click', function () {
    expanded = !expanded;
    showMore.innerHTML = expanded ? 'Show fewer roles <span>↑</span>' : 'View all opportunities <span>↓</span>';
    filterJobs('all');
  });

  document.querySelectorAll('#mainNav a').forEach(function (link) {
    link.addEventListener('click', function () {
      var menu = document.getElementById('mainNav');
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  filterJobs('all');
});
