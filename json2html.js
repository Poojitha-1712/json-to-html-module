export default function json2html(data){
    const tableHeader = '<table data-user="uppalabpoojitha@gmail.com"><thead><tr><th>Name</th>Age</th><th>Gender</th></tr></thead><tbody>';
    const tableRows = data.map((row) => {
      return '<tr><td>${row.Name || ''}</td><td>${row.Age || ''}</td><td>${row.Gender || ''}</td></tr>';
    }).join("");
    const tableFooter = '</tbody></table>';
    return tableHeader + tableRows + tableFooter;
  }