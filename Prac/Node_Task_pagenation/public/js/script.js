// console.log(data);

document.getElementById("first_page").addEventListener("click", (e) => {
  window.location.href = `/?page=1`;
});
document.getElementById("prev_page").addEventListener("click", (e) => {
  if (data.current_page <= 1) {
    data.current_page = 1;
    page = data.current_page;
    window.location.href = `/?page=${page}`;
  } else {
    page = data.current_page - 1;
    window.location.href = `/?page=${page}`;
  }
});
document.getElementById("next_page").addEventListener("click", (e) => {
  if (data.current_page >= data.total_page) {
    window.location.href = `/?page=${data.total_page}`;
  } else {
    page = data.current_page + 1;
    window.location.href = `/?page=${page}`;
  }
});
document.getElementById("last_page").addEventListener("click", (e) => {
  // page = data.current_page + 1;
  window.location.href = `/?page=${data.total_page}`;
});


//sort-by ID
