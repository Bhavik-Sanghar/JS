// console.log(data);

document.getElementById("first_page").addEventListener("click", (e) => {
  window.location.href = `/?page=1&sort_by=${data.sort_by}&sort_flag=${data.sort_flag}`;
});
document.getElementById("prev_page").addEventListener("click", (e) => {
  if (data.current_page <= 1) {
    data.current_page = 1;
    page = data.current_page;
    window.location.href = `/?page=${page}&sort_by=${data.sort_by}&sort_flag=${data.sort_flag}`;
  } else {
    page = data.current_page - 1;
    window.location.href = `/?page=${page}&sort_by=${data.sort_by}&sort_flag=${data.sort_flag}`;
  }
});
document.getElementById("next_page").addEventListener("click", (e) => {
  if (data.current_page >= data.total_page) {
    window.location.href = `/?page=${data.total_page}&sort_by=${data.sort_by}&sort_flag=${data.sort_flag}`;
  } else {
    page = data.current_page + 1;
    window.location.href = `/?page=${page}&sort_by=${data.sort_by}&sort_flag=${data.sort_flag}`;
  }
});
document.getElementById("last_page").addEventListener("click", (e) => {
  // page = data.current_page + 1;
  window.location.href = `/?page=${data.total_page}&sort_by=${data.sort_by}&sort_flag=${data.sort_flag}`;
});

//sort-by ID
document.getElementById("sort_id").addEventListener("click", (e) => {
  if (data.sort_flag == 0) {
    window.location.href = `/?page=${data.current_page}&sort_by=id&sort_flag=1`;
  } else {
    window.location.href = `/?page=${data.current_page}&sort_by=id&sort_flag=0`;
  }
});
